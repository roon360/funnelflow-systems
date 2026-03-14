'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { HighConvertingWebsiteFormModal } from './HighConvertingWebsiteFormModal';

type HighConvertingWebsiteFormContextValue = {
  openHighConvertingForm: () => void;
};

const HighConvertingWebsiteFormContext = createContext<HighConvertingWebsiteFormContextValue | null>(null);

export function useHighConvertingWebsiteForm() {
  const ctx = useContext(HighConvertingWebsiteFormContext);
  return ctx;
}

export function HighConvertingWebsiteFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openHighConvertingForm = useCallback(() => setIsOpen(true), []);
  const closeHighConvertingForm = useCallback(() => setIsOpen(false), []);

  return (
    <HighConvertingWebsiteFormContext.Provider value={{ openHighConvertingForm }}>
      {children}
      <HighConvertingWebsiteFormModal isOpen={isOpen} onClose={closeHighConvertingForm} />
    </HighConvertingWebsiteFormContext.Provider>
  );
}
