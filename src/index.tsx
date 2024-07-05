import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import './stylesheets/index.scss'
import App from './containers/App'

createRoot(document.getElementById('root') as HTMLElement).render( <App />)