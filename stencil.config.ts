import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-test',
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    }, {
      type: 'docs-vscode',
      file: 'vscode-data.json',
    }
  ],
  testing: {
    browserHeadless: "new",
  },
};
