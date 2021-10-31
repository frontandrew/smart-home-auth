import { Route, Switch, Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline, Typography } from '@mui/material'

import { AppGate } from '../model'
import { history, theme } from '../../../shared'
import { AuthPage, HomePage } from '../../../pages'

export function App() {
  return (
    <>
      <AppGate />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router history={history}>
          <Switch>
            <Route exact path="/auth" component={AuthPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </Router>
        <Typography variant="h4">App</Typography>
      </ThemeProvider>
    </>
  )
}

