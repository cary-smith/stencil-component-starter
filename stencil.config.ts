import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'mycomponent',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'www',
      serviceWorker: null
    }
  ],
  testing: {
    reporters: ['default', ['jest-junit', { output: 'target/junit/junit.xml' }]]
  }
};
