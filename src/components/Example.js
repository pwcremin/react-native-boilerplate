import React from 'react'

import { TouchableHighlight, Text, View } from 'react-native'

import { connect } from 'react-redux'
import { exampleAction } from '../actions/example.actions'

const Example = ({ dispatch, counter }) => (
  <View>
    <TouchableHighlight onPress={() => dispatch(exampleAction())}>
      <Text> Just some example crap {counter}</Text>
    </TouchableHighlight>
  </View>
)

export default connect(state => ({ counter: state.example.counter }))(Example)
