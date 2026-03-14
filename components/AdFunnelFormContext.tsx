'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { AdFunnelFormModal } from './AdFunnelFormModal';

type AdFunnelFormContextValue = {
  openAdFunnelForm: () => void;
};

const AdFunnelFormContext = createContext<AdFunnelFormContextValue | null>(null);

export function useAdFunnelForm() {
  const ctx = useContext(AdFunnelFormContext);
  return ctx;
}

export function AdFunnelFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openAdFunnelForm = useCallback(() => setIsOpen(true), []);
  const closeAdFunnelForm = useCallback(() => setIsOpen(false), []);

  return (
    <AdFunnelFormContext.Provider value={{ openAdFunnelForm }}>
      {children}
      <AdFunnelFormModal isOpen={isOpen} onClose={closeAdFunnelForm} />
    </AdFunnelFormContext.Provider>
  );
}
