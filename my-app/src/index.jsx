import { createRoot} from 'react-dom/client'
import App from './App'
import { StrictMode } from 'react'
import('tailwindcss').Config
import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(<App />)