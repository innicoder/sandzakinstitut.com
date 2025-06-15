'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MisijaPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/o-nama#misija');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p>Preusmjeravanje...</p>
    </div>
  );
}