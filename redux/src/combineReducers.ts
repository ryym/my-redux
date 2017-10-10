import { Action, Reducer } from './types'

export default function combineReducers<S, A extends Action = Action>(
  reducers: {
    [K in keyof S]: Reducer<S[K], A>
  }
): Reducer<S, A>

export default function combineReducers(reducers: any): any {
  return null // TODO: implement
}
