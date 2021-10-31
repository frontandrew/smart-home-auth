import { sample } from 'effector'
import {
  $pathname,
  $historySearch,
  historyPush,
  searchPush,
} from './model'


sample({
  clock: searchPush,
  source: [$pathname, $historySearch],
  fn: ([path, search], [name, param]) => {
    if (param) {
      search.set(name, param)
    } else {
      search.delete(name)
    }
    return `${path}?${search.toString()}`
  },
  target: historyPush,
});