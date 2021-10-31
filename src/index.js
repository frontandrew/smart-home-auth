import { StrictMode } from 'react'
import ReactDOM from 'react-dom'

import { App } from './features'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('.root')
)