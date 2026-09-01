'use client';

import { useEffect, useState } from 'react';

export function HydrationGuard({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Evitar renderizar componentes que usan Zustand hasta después de hidratación
  if (!isHydrated) {
    return <div suppressHydrationWarning>{children}</div>;
  }

  return <>{children}</>;
}
