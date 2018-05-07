import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap'
import registerRouter from './router'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(registerRouter(), document.getElementById('root'))
registerServiceWorker()
