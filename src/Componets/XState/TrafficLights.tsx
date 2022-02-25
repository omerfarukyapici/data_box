import React from 'react'
import '../Style/TrafficLights.scss';



/* Xstate hook */
import { useMachine } from '@xstate/react';

/* We Create this */
import { trafficLightMachine } from './TrafficLightsMachine';




export const TrafficLights = () => {

  const [state, send] = useMachine(trafficLightMachine);


  return (
    <div className='Traffic-P'>

      <div className='Traffic-C'>

        <div>
          <div>Traffic Lights</div>

          <p><button
            className="red"
            disabled={state.value !== 'red'}
            onClick={() => send('NEXT')}>
            Red
          </button></p>

          <p><button className="yellow"
            disabled={state.value !== 'yellow'}
            onClick={() => send('NEXT')}>
            Yellow
          </button></p>

          <p><button className="green"
            disabled={state.value !== 'green'}
            onClick={() => send('NEXT')}
          >Green
          </button></p>

          <p>Src: <a href="https://www.thisdot.co/blog/xstate-with-react-for-beginners">https://www.thisdot.co/blog/xstate-with-react-for-beginners</a> </p>
        </div>

      </div>

    </div>
  )
}
