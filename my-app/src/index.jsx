import { createRoot} from 'react-dom/client'
import { App } from './App'
import Root from './Root'

const root = createRoot(document.getElementById('root'))
root.render(<Root />)