import { Config } from "@stencil/core";

export const config: Config = {
  namespace: "stencil-starter-project-name",
  globalScript: "src/global/index.ts",
  outputTargets: [
    {
      type: "dist",
      esmLoaderPath: "../loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null // disable service workers
    }
  ]
};
