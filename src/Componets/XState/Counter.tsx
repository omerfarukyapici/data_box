import React from 'react'
import '../Style/Counter.scss';

/* This is hook from Xstate */
import { useMachine } from '@xstate/react';

/* We Created this */
import { counterMachine } from './CounterMachine';




export const Counter = () => {

  const [state, send] = useMachine(counterMachine);

  console.log(state.context.count);


  return (

    <div className='Counter-P'>

      <div className='Counter-C'>

        <p>Counter</p>

        <p>{state.context.count}</p>

        <button onClick={() => (send('INCREMENT'))}>İncrement</button>

        <button onClick={() => (send('DECREMENT'))}>Decrement</button>

      </div>
      
    </div>
  )
}
