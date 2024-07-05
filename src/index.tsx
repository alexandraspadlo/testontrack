import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import { Provider } from 'react-redux'
import './stylesheets/index.scss'
import App from './containers/App'

createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
			<App />
		</Provider>
)