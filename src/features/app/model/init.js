// import { forward } from 'effector'

import { appMount } from './model'

appMount.watch(() => console.log('App started!'))
// $route.watch((x) => console.log('$route', x))
// $history.watch((x) => console.log('$history', x))
// fxRouterInit.done.watch((x) => console.log('router init', x))
