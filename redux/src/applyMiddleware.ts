import { Action, Store, Dispatch, StoreEnhancer } from './types'

export interface Middleware<S, A extends Action = Action> {
  (store: Store<S, A>): (next: Dispatch<S, A>) => Dispatch<S, A>
}

export default function applyMiddleware<S, A extends Action = Action>(
  ...middlewares: Middleware<S, A>[]
): StoreEnhancer<S, A>

export default function applyMiddleware(...middlewares: any[]): any {
  return null // TODO: implement
}
