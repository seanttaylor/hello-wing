exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure5Client = 
          require("./inflight.$Closure5-1.js")({
            $db: (function(env) {
  let handle = process.env[env];
  if (!handle) {
    throw new Error("Missing environment variable: " + env);
  }
  return $simulator.findInstance(handle);
})("TABLE_HANDLE_64086798"),
          })
        ;
            const client = new $Closure5Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};