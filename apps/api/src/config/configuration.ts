import { loadEnvironment } from "./environment";

export default () => ({
  app: loadEnvironment()
});
