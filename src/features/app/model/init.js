import { forward } from 'effector'
import {
  $route, // goTo,
  // historyBack,
  // beforeRouteEnter,
  // routeChanged,
  // onRouteChanged,
} from 'effector-routing';


import { appMount } from './model'

import { fxRouterInit } from '../../../shared'

forward({
  from: appMount,
  to: fxRouterInit,
})

appMount.watch(() => console.log('App started!'))
$route.watch(() => console.log('$route'))
