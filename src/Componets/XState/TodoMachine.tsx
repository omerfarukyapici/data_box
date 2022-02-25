import { createMachine, assign } from 'xstate';

export const todoMachine = createMachine({

    context: {

        todos: [],

    } as {todos: any},

    on: {

        ADD_TODO: {

            actions: assign({

                todos: (context: any, event: any) => [

                    ...context.todos,

                    event.todo

                ],

            }),

        },

    }

});