import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { StoreContext, RootStore } from './store/RootStore.ts'

const rootStore = new RootStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <StoreContext.Provider value={rootStore}>
        <App />
      </StoreContext.Provider>
    </BrowserRouter>
  </StrictMode>
)