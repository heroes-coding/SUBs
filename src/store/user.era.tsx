export const LOAD_USER = '[User] Load User'

export type CUser = firebase.User | null

interface LoadUser {
  readonly type: typeof LOAD_USER
  payload: CUser
}
export const loadUser = (user): LoadUser => ({ type: LOAD_USER, payload: user })

type UserActions = LoadUser

export interface UserState {
  initializing: boolean
  user: CUser
}

const makeInitialState = () => ({ initializing: true, user: null })

const userReducer = (state: UserState = makeInitialState(), action: UserActions) => {
  switch (action.type) {
    case LOAD_USER:
      return { initializing: false, user: action.payload }
    default:
      return state
  }
}

export default userReducer