import { Action, Reducer, Dispatch, Store, StoreEnhancer } from './types'

export interface StoreOption<S, A extends Action = Action> {
  reducer: Reducer<S, A>
  state?: S
  use?: StoreEnhancer<S, A>
}

export default function createStore<S, A extends Action = Action>(
  opts: StoreOption<S, A>
): Store<S, A>

export default function createStore(opts: any): any {
  return null // TODO: implement createStore
}
