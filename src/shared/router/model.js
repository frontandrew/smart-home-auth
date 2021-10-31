import { restore, createDomain } from 'effector'
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory(); 

const routingDomain = createDomain();

const historyPush = routingDomain.createEffect(history.push);
const searchPush = routingDomain.createEvent();
const updateLocation = routingDomain.createEvent();
const updateAction = routingDomain.createEvent();

history.listen((location, action) => {
  updateLocation(location);
  updateAction(action);
});

const $history = restore(updateLocation, history.location);
const $lastAction = restore(updateAction, null);
const $pathname = $history.map(({ pathname }) => pathname);
const $historySearch = $history
  .map(({ search = '' }) => search)
  .map((search) => new URLSearchParams(search));

export {
  $history,
  $lastAction,
  $pathname,
  $historySearch,
  historyPush,
  searchPush,
  routingDomain,
  updateLocation,
};