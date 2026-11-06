import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import './resume.css'
import { ru } from '@/data/resume/ru'
import { Resume } from './Resume'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Resume content={ru} />
  </StrictMode>
)
