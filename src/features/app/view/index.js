import { Route, Switch, Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Suspense, lazy } from 'react'

import { AppGate } from '../model'
import { history, theme } from '../../../shared'
import { HomePage } from '../../../pages'

import '../../../shared/ui/app-root/index.css'

const AuthPage = lazy(() => import('../../../pages/auth'))

export const App = () => {
  return (
    <>
      <AppGate />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Suspense fallback={() => console.log('fallback!!')}>
            <Switch>
              <Route exact path="/auth" component={AuthPage} />
              <Route path="/" component={HomePage} />
            </Switch>
          </Suspense>
        </Router>        
      </ThemeProvider>
    </>
  )
}

