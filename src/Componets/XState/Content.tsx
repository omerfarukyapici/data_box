import React from 'react'
import { Counter } from './Counter'
import { Todo } from './Todo'
import { TrafficLights } from './TrafficLights'

export const Content = () => {
  return (
    <div >
      <Counter />
      <Todo />
      <TrafficLights />
    </div>
  )
}
