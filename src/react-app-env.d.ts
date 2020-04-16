/// <reference types="react-scripts" />

declare namespace NodeJS {
  export interface ProcessEnv {
    REACT_APP_STAGE: "LOCAL" | "DEV" | "STG" | "PROD";
  }
}
