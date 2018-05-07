import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import InputForm from './pages/InputForm/InputForm'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // about
  { path: '/about', component: About, exact: true },
  // input
  { path: '/input', component: InputForm, exact: true },
]
