import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <div className='fixed bg-white'> */}
      <div className="fixed inset-0 bg-[#008080] flex items-center justify-center p-2 md:p-10 font-mono overflow-hidden">
      <App />
    </div>

  </StrictMode>,
)
