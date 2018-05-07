import Landing from './pages/Landing/Landing'
import About from './pages/About/About'
import InputForm from './pages/InputForm/InputForm'
import OutputForm from './pages/OutputForm/OutputForm'
import TargetForm from './pages/TargetForm/TargetForm'
import Results from './pages/Results/Results'

export default [
  // landing
  { path: '/', component: Landing, exact: true },
  // about
  { path: '/about', component: About, exact: true },
  // forms
  { path: '/input', component: InputForm, exact: true },
  { path: '/output', component: OutputForm, exact: true },
  { path: '/target', component: TargetForm, exact: true },
  // results
  { path: '/results', component: Results, exact: true },
]
