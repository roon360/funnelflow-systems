'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { LearnOnlineFormModal } from './LearnOnlineFormModal';

type LearnOnlineFormContextValue = {
  openLearnForm: () => void;
};

const LearnOnlineFormContext = createContext<LearnOnlineFormContextValue | null>(null);

export function useLearnOnlineForm() {
  const ctx = useContext(LearnOnlineFormContext);
  return ctx;
}

export function LearnOnlineFormProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openLearnForm = useCallback(() => setIsOpen(true), []);
  const closeLearnForm = useCallback(() => setIsOpen(false), []);

  return (
    <LearnOnlineFormContext.Provider value={{ openLearnForm }}>
      {children}
      <LearnOnlineFormModal isOpen={isOpen} onClose={closeLearnForm} />
    </LearnOnlineFormContext.Provider>
  );
}
