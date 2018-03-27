import React from 'react'
import { Provider } from 'react-redux'
import store from './src/store'

import AppNavigator from './src/navigation/appNavigator'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    )
  }
}
