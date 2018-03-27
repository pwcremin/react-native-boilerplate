import { handleActions } from 'redux-actions'

import { exampleAction } from '../actions/example.actions'

const initialState = { counter: 0 }

export default handleActions(
  {
    [exampleAction]: state => ({
      counter: state.counter + 1,
    }),
  },
  initialState,
)
