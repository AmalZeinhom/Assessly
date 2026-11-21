'use client'

import TooltipProvider from '@/components/ui/tooltip/TooltipProvider';
import { ReactNode } from 'react'

interface ProvidersProps {
    children: ReactNode; 
}
export default function provider({children}: ProvidersProps) {
  return (
    <TooltipProvider delayDuration={500}>
        {children}
    </TooltipProvider>
  )
}
