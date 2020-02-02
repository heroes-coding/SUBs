import React from 'react'

import './App.css';
import { signIn, signOut, registerAuthWithStore } from './auth/auth';
import { Provider, useDispatch, useSelector } from 'react-redux'
import store, { StoreState } from './store';
import { useEffectOnlyOnce } from './helpers/index';

const App: React.FC = () => (
  <Provider store={store}>
    <WrappedApp />
  </Provider>
)


const WrappedApp = () => {
  const dispatch = useDispatch()
  const { initializing, user } = useSelector((state: StoreState) => state.user)
  useEffectOnlyOnce(() => registerAuthWithStore(dispatch))

  if (initializing) {
    return <div>Loading</div>
  } else if (!user) {
    return <button onClick={signIn}>Sign in with Google</button>
  }
  return (
    <div>
      <UserProfile />
      <button onClick={signOut}>Sign Out</button>
    </div>
  )


}

function UserProfile() {
  const user = useSelector((state: StoreState) => state.user.user )
  return user === null ? null : <div>Hello, {user.displayName}</div>
}


export default App
