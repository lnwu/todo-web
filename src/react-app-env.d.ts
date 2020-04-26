/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_STAGE: "local" | "development" | "staging" | "production";
  }
}
