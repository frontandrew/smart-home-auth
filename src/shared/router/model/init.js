import { addRoutes } from 'effector-routing'
import { initDomRouter } from 'effector-routing/dist/dom'

import {
  $route, // goTo,
  // historyBack,
  // beforeRouteEnter,
  // routeChanged,
  // onRouteChanged,
} from 'effector-routing';

import { routes } from '../config'
import { fxRouterInit } from './model'
// import { AppGate } from '../../../features'

$route.watch((x) => console.log('$route router init', x))

fxRouterInit.use(() => {
  console.log('Router init!!')
  addRoutes(routes)
  initDomRouter({ defaultRoute: { name: 'auth' } })
})
