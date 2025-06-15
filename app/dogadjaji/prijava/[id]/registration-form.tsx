'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircleIcon } from 'lucide-react';

interface RegistrationFormProps {
  eventId: string;
}

export default function RegistrationForm({ eventId }: RegistrationFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    // In a real app, this would send data to an API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    
    // Redirect after success
    setTimeout(() => {
      router.push(`/dogadjaji/${eventId}`);
    }, 3000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  if (isSuccess) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <CheckCircleIcon className="h-4 w-4 text-green-600" />
        <AlertDescription className="text-green-800">
          Vaša prijava je uspešno poslata! Kontaktiraćemo vas uskoro sa dodatnim informacijama.
        </AlertDescription>
      </Alert>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Ime i prezime *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Unesite vaše ime i prezime"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email adresa *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="vas@email.com"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phone">Broj telefona *</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handleChange}
          placeholder="+381 XX XXX XXXX"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Dodatna poruka (opciono)</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Unesite dodatne informacije ili pitanja..."
          rows={4}
        />
      </div>
      
      <div className="pt-4">
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Slanje prijave...' : 'Pošaljite prijavu'}
        </Button>
      </div>
    </form>
  );
}