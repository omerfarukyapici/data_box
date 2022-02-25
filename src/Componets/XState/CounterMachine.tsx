import { createMachine, assign } from 'xstate';

export const counterMachine = createMachine({

    context: {

        // Here, we will define the initial state of the machine

        count: 0,

    } as {count: number},

    on: {

        // Here we will define the events that will trigger the transitions.

        /* İncrement event to onclick button */
        INCREMENT: {

            actions: assign({

                count: (context:any) => context.count + 1,

            }),

        },

        /* Decrement event to onclick button */
        DECREMENT: {

            actions: assign({

              count: (context:any) => context.count - 1,

            }),

          },

    }

});