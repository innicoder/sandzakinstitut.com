# Admin Panel Implementation Guide

## Overview
This guide provides a pragmatic approach to implementing admin functionality for a solo developer. Estimated implementation time: 8-12 hours for MVP.

## Recommended Approach: Next.js + Supabase

### Why This Stack?
- **Fast Implementation**: 8-12 hours for basic admin
- **Built-in Auth**: Supabase handles authentication securely
- **Real-time Updates**: Changes reflect immediately
- **Cost-effective**: Free tier covers most use cases
- **Type-safe**: Full TypeScript support
- **Scalable**: Can grow with your needs

## Implementation Phases

### Phase 1: Setup & Authentication (2 hours)

#### 1.1 Install Dependencies
```bash
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs
npm install --save-dev @types/node
```

#### 1.2 Environment Variables
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

#### 1.3 Supabase Client Setup
**File:** `lib/supabase/client.ts`

```typescript
import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}
```

**File:** `lib/supabase/server.ts`

```typescript
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}
```

#### 1.4 Database Schema
```sql
-- Users table (extends Supabase auth.users)
CREATE TABLE profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  full_name TEXT,
  role TEXT DEFAULT 'editor',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- News articles
CREATE TABLE news_articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  author_id UUID REFERENCES profiles(id),
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Events
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  image_url TEXT,
  registration_open BOOLEAN DEFAULT true,
  max_attendees INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Team members
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  position TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  email TEXT,
  order_index INTEGER DEFAULT 0,
  active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Public profiles are viewable by everyone" 
  ON profiles FOR SELECT 
  USING (true);

CREATE POLICY "Users can update own profile" 
  ON profiles FOR UPDATE 
  USING (auth.uid() = id);

CREATE POLICY "Published news are viewable by everyone" 
  ON news_articles FOR SELECT 
  USING (published = true);

CREATE POLICY "Editors can manage news" 
  ON news_articles FOR ALL 
  USING (auth.uid() IN (
    SELECT id FROM profiles WHERE role IN ('editor', 'admin')
  ));
```

### Phase 2: Admin Layout & Auth (2 hours)

#### 2.1 Admin Login Page
**File:** `app/admin/login/page.tsx`

```tsx
'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export default function AdminLogin() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/admin')
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Admin prijava</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <Input
                type="password"
                placeholder="Lozinka"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? 'Prijavljivanje...' : 'Prijavi se'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
```

#### 2.2 Admin Layout with Auth Check
**File:** `app/admin/layout.tsx`

```tsx
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import AdminSidebar from './components/admin-sidebar'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/admin/login')
  }

  // Check if user is admin/editor
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (!profile || !['admin', 'editor'].includes(profile.role)) {
    redirect('/')
  }

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
```

#### 2.3 Admin Sidebar Component
**File:** `app/admin/components/admin-sidebar.tsx`

```tsx
'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { 
  LayoutDashboard, 
  FileText, 
  Calendar, 
  Users, 
  Settings,
  LogOut 
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const menuItems = [
  { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/news', label: 'Vijesti', icon: FileText },
  { href: '/admin/events', label: 'Događaji', icon: Calendar },
  { href: '/admin/team', label: 'Tim', icon: Users },
  { href: '/admin/settings', label: 'Postavke', icon: Settings },
]

export default function AdminSidebar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 ${
                isActive ? 'bg-gray-100 border-l-4 border-primary' : ''
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.label}
            </Link>
          )
        })}
      </nav>
      
      <div className="absolute bottom-0 w-64 p-6">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={handleLogout}
        >
          <LogOut className="h-4 w-4 mr-2" />
          Odjavi se
        </Button>
      </div>
    </aside>
  )
}
```

### Phase 3: Content Management (4-6 hours)

#### 3.1 News Management
**File:** `app/admin/news/page.tsx`

```tsx
import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Plus, Edit, Trash2 } from 'lucide-react'
import NewsTable from './news-table'

export default async function AdminNews() {
  const supabase = await createClient()
  
  const { data: articles, error } = await supabase
    .from('news_articles')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Vijesti</h1>
        <Link href="/admin/news/new">
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Nova vijest
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Sve vijesti</CardTitle>
        </CardHeader>
        <CardContent>
          <NewsTable articles={articles || []} />
        </CardContent>
      </Card>
    </div>
  )
}
```

#### 3.2 News Editor
**File:** `app/admin/news/[id]/page.tsx`

```tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import RichTextEditor from '../components/rich-text-editor'

export default function NewsEditor({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [article, setArticle] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    image_url: '',
    published: false,
  })

  const isNew = params.id === 'new'

  useEffect(() => {
    if (!isNew) {
      loadArticle()
    }
  }, [params.id])

  const loadArticle = async () => {
    const supabase = createClient()
    const { data, error } = await supabase
      .from('news_articles')
      .select('*')
      .eq('id', params.id)
      .single()

    if (data) {
      setArticle(data)
    }
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()

    const articleData = {
      ...article,
      author_id: user?.id,
      updated_at: new Date().toISOString(),
      ...(article.published && !article.published_at && {
        published_at: new Date().toISOString()
      })
    }

    let result
    if (isNew) {
      result = await supabase
        .from('news_articles')
        .insert([articleData])
        .select()
        .single()
    } else {
      result = await supabase
        .from('news_articles')
        .update(articleData)
        .eq('id', params.id)
        .select()
        .single()
    }

    if (result.error) {
      setError(result.error.message)
      setLoading(false)
    } else {
      router.push('/admin/news')
      router.refresh()
    }
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">
        {isNew ? 'Nova vijest' : 'Uredi vijest'}
      </h1>

      <form onSubmit={handleSubmit}>
        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Osnovne informacije</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Naslov</Label>
              <Input
                id="title"
                value={article.title}
                onChange={(e) => {
                  setArticle({ 
                    ...article, 
                    title: e.target.value,
                    slug: generateSlug(e.target.value)
                  })
                }}
                required
              />
            </div>

            <div>
              <Label htmlFor="slug">URL slug</Label>
              <Input
                id="slug"
                value={article.slug}
                onChange={(e) => setArticle({ ...article, slug: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="category">Kategorija</Label>
              <select
                id="category"
                className="w-full p-2 border rounded"
                value={article.category}
                onChange={(e) => setArticle({ ...article, category: e.target.value })}
              >
                <option value="">Izaberi kategoriju</option>
                <option value="Istraživanja">Istraživanja</option>
                <option value="Događaji">Događaji</option>
                <option value="Saradnja">Saradnja</option>
                <option value="Publikacije">Publikacije</option>
              </select>
            </div>

            <div>
              <Label htmlFor="excerpt">Kratak opis</Label>
              <Textarea
                id="excerpt"
                value={article.excerpt}
                onChange={(e) => setArticle({ ...article, excerpt: e.target.value })}
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="image_url">URL slike</Label>
              <Input
                id="image_url"
                type="url"
                value={article.image_url}
                onChange={(e) => setArticle({ ...article, image_url: e.target.value })}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Sadržaj</CardTitle>
          </CardHeader>
          <CardContent>
            <RichTextEditor
              value={article.content}
              onChange={(content) => setArticle({ ...article, content })}
            />
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Opcije objavljivanja</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={article.published}
                onCheckedChange={(published) => setArticle({ ...article, published })}
              />
              <Label htmlFor="published">Objavi vijest</Label>
            </div>
          </CardContent>
        </Card>

        <div className="flex gap-4">
          <Button type="submit" disabled={loading}>
            {loading ? 'Čuvanje...' : 'Sačuvaj'}
          </Button>
          <Button 
            type="button" 
            variant="outline"
            onClick={() => router.push('/admin/news')}
          >
            Otkaži
          </Button>
        </div>
      </form>
    </div>
  )
}
```

#### 3.3 Rich Text Editor Component
**File:** `app/admin/news/components/rich-text-editor.tsx`

```tsx
'use client'

import { useEffect, useRef } from 'react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
}

export default function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      editorRef.current.innerHTML = value
    }
  }, [value])

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value)
    handleInput()
  }

  return (
    <div className="border rounded-lg">
      <div className="border-b p-2 flex gap-2 flex-wrap">
        <button
          type="button"
          onClick={() => execCommand('bold')}
          className="px-3 py-1 hover:bg-gray-100 rounded font-bold"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => execCommand('italic')}
          className="px-3 py-1 hover:bg-gray-100 rounded italic"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => execCommand('underline')}
          className="px-3 py-1 hover:bg-gray-100 rounded underline"
        >
          U
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => execCommand('formatBlock', 'h2')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          H2
        </button>
        <button
          type="button"
          onClick={() => execCommand('formatBlock', 'h3')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          H3
        </button>
        <button
          type="button"
          onClick={() => execCommand('formatBlock', 'p')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          P
        </button>
        <div className="w-px bg-gray-300 mx-1" />
        <button
          type="button"
          onClick={() => execCommand('insertUnorderedList')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => execCommand('insertOrderedList')}
          className="px-3 py-1 hover:bg-gray-100 rounded"
        >
          1. List
        </button>
      </div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="p-4 min-h-[300px] focus:outline-none prose max-w-none"
        suppressContentEditableWarning
      />
    </div>
  )
}
```

### Phase 4: File Uploads (1-2 hours)

#### 4.1 Image Upload Component
**File:** `app/admin/components/image-upload.tsx`

```tsx
'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Upload, X } from 'lucide-react'
import Image from 'next/image'

interface ImageUploadProps {
  value: string
  onChange: (url: string) => void
  bucket?: string
}

export default function ImageUpload({ 
  value, 
  onChange, 
  bucket = 'images' 
}: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true)

      if (!event.target.files || event.target.files.length === 0) {
        return
      }

      const file = event.target.files[0]
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `${fileName}`

      const supabase = createClient()
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      const { data } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)

      onChange(data.publicUrl)
    } catch (error) {
      alert('Error uploading image!')
      console.error(error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="space-y-2">
      <Label>Slika</Label>
      {value ? (
        <div className="relative inline-block">
          <Image
            src={value}
            alt="Upload preview"
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute -top-2 -right-2"
            onClick={() => onChange('')}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      ) : (
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="mt-2">
            <Label htmlFor="image-upload" className="cursor-pointer">
              <span className="text-primary hover:underline">
                Klikni za upload
              </span>
              <Input
                id="image-upload"
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={uploadImage}
                disabled={uploading}
              />
            </Label>
          </div>
          <p className="text-xs text-gray-500 mt-1">
            PNG, JPG do 10MB
          </p>
        </div>
      )}
    </div>
  )
}
```

### Phase 5: Dashboard & Analytics (2 hours)

#### 5.1 Admin Dashboard
**File:** `app/admin/page.tsx`

```tsx
import { createClient } from '@/lib/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Calendar, Users, Eye } from 'lucide-react'
import Link from 'next/link'

export default async function AdminDashboard() {
  const supabase = await createClient()

  // Get counts
  const [newsCount, eventsCount, teamCount] = await Promise.all([
    supabase.from('news_articles').select('*', { count: 'exact', head: true }),
    supabase.from('events').select('*', { count: 'exact', head: true }),
    supabase.from('team_members').select('*', { count: 'exact', head: true })
  ])

  // Get recent items
  const { data: recentNews } = await supabase
    .from('news_articles')
    .select('id, title, created_at, published')
    .order('created_at', { ascending: false })
    .limit(5)

  const { data: upcomingEvents } = await supabase
    .from('events')
    .select('id, title, date')
    .gte('date', new Date().toISOString())
    .order('date', { ascending: true })
    .limit(5)

  const stats = [
    {
      title: 'Ukupno vijesti',
      value: newsCount.count || 0,
      icon: FileText,
      href: '/admin/news'
    },
    {
      title: 'Ukupno događaja',
      value: eventsCount.count || 0,
      icon: Calendar,
      href: '/admin/events'
    },
    {
      title: 'Članovi tima',
      value: teamCount.count || 0,
      icon: Users,
      href: '/admin/team'
    },
    {
      title: 'Pregledi (30 dana)',
      value: '2,543',
      icon: Eye,
      href: '/admin/analytics'
    }
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Stats Grid */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Link key={stat.title} href={stat.href}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Najnovije vijesti</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentNews?.map((article) => (
                <div key={article.id} className="flex items-center justify-between">
                  <Link 
                    href={`/admin/news/${article.id}`}
                    className="text-sm hover:underline truncate flex-1"
                  >
                    {article.title}
                  </Link>
                  <span className={`text-xs px-2 py-1 rounded ${
                    article.published 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {article.published ? 'Objavljeno' : 'Nacrt'}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nadolazeći događaji</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {upcomingEvents?.map((event) => (
                <div key={event.id} className="flex items-center justify-between">
                  <Link 
                    href={`/admin/events/${event.id}`}
                    className="text-sm hover:underline truncate flex-1"
                  >
                    {event.title}
                  </Link>
                  <span className="text-xs text-gray-500">
                    {new Date(event.date).toLocaleDateString('bs-BA')}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
```

## Security Considerations

### 1. Row Level Security (RLS)
All tables have RLS enabled with appropriate policies:
- Public content is readable by everyone
- Authenticated users can only modify their own content
- Admin/editor roles have elevated permissions

### 2. API Security
```typescript
// Middleware to check admin access
export async function checkAdminAccess(userId: string) {
  const supabase = createClient()
  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .single()

  return profile?.role === 'admin' || profile?.role === 'editor'
}
```

### 3. Input Validation
Always validate and sanitize user input:
```typescript
import DOMPurify from 'isomorphic-dompurify'

// Sanitize HTML content
const cleanContent = DOMPurify.sanitize(content, {
  ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'h2', 'h3', 'ul', 'ol', 'li', 'a'],
  ALLOWED_ATTR: ['href', 'target']
})
```

## Deployment Checklist

1. **Environment Variables**
   - Set all Supabase keys in production
   - Enable CORS for your domain in Supabase

2. **Database Setup**
   - Run all migrations in production
   - Create initial admin user
   - Set up storage buckets

3. **Security**
   - Enable 2FA for admin accounts
   - Regular security audits
   - Monitor failed login attempts

4. **Performance**
   - Enable caching for public content
   - Optimize images before upload
   - Use pagination for large lists

## Future Enhancements

1. **Advanced Features**
   - Revision history
   - Content scheduling
   - Multi-language support
   - SEO metadata editor

2. **Analytics**
   - Google Analytics integration
   - Custom analytics dashboard
   - Content performance metrics

3. **Workflow**
   - Content approval workflow
   - Email notifications
   - Activity logs

## Total Implementation Time

- Phase 1 (Setup & Auth): 2 hours
- Phase 2 (Admin Layout): 2 hours
- Phase 3 (Content Management): 4-6 hours
- Phase 4 (File Uploads): 1-2 hours
- Phase 5 (Dashboard): 2 hours

**Total: 11-14 hours for complete admin panel**

## Quick Start Commands

```bash
# 1. Install dependencies
npm install @supabase/supabase-js @supabase/auth-helpers-nextjs

# 2. Set up Supabase project
# Go to supabase.com and create a project

# 3. Run migrations
# Copy SQL from this guide to Supabase SQL editor

# 4. Add environment variables
# Copy from Supabase project settings

# 5. Create first admin user
# Use Supabase dashboard to create user and update role in profiles table
```

This implementation provides a solid foundation that can be extended based on specific needs.