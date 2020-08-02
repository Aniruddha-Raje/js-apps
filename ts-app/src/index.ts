import { createServer } from "./connectors/api/server";
import { validateConfig } from "./validate-config";
import { CONFIG } from "./config";

try {
  validateConfig([], ["PORT"]);
  console.info("Config is valid, starting Express server");

  const listener = createServer().listen(CONFIG.PORT);
  console.info(`Listening on ${listener.address()["port"]}`);
} catch (e) {
  console.error(e);
  process.exit(1);
}
