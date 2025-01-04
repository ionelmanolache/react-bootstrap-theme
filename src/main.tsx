import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './theme/theme.scss'

createRoot(document.getElementById('root')!).render(
    <App />
)
