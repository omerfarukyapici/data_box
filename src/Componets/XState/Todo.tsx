import React from 'react'

import '../Style/Todo.scss';


/* This is hook from Xstate */
import { todoMachine } from './TodoMachine';

/* We Created this */
import { useMachine } from '@xstate/react';

/* Use State */
import { useState } from 'react';


export const Todo = () => {

  const [newTodo, setNewTodo] = useState('')

  const [state, send] = useMachine(todoMachine);
  

  const handleAddTodo = () => {

    if (newTodo) {

      send('ADD_TODO', {

        todo: newTodo,

        todo2: 'Gooooo',

      });

      setNewTodo('');

    }

  }

  console.log(newTodo);


  

  return (
    <div className='Todo-P'>

      <div className='Todo-C'>

        <p>TO-DO LİST</p>

        <input

          type="text"

          placeholder='Enter Todo'

          value={newTodo}

          onChange={(e) => setNewTodo(e.target.value)}

        />

        <p>
          <button onClick={handleAddTodo}>Add Todo</button>
        </p>

        {

          state.context.todos.map((todo: any, index: any) => (

            <h2 key={index}> {todo} </h2>

          ))

        }

      </div>

    </div>
  )
}
