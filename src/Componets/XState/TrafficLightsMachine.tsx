import { createMachine } from 'xstate';

export const trafficLightMachine = createMachine({
    initial: 'red',
    states: {
      red: {
        on: {
          NEXT: {
            target: 'yellow',
          },
        },
      },
      yellow: {
        on: {
          NEXT: {
            target: 'green',
          },
        },
      },
      green: {
        on: {
          NEXT: {
            target: 'red',
          },
        },
      },
    },
  });