import { foo } from './foo.js'
import barModule from './bar.js'

export const foobar = () => {
  foo()
  barModule.bar()
}