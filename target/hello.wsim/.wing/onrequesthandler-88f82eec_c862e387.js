exports.handler = async function(event) {
  return await (
          (await (async () => {
            const $Closure3Client = 
          require("./inflight.$Closure3-1.js")({
            $counter: (function(env) {
  let handle = process.env[env];
  if (!handle) {
    throw new Error("Missing environment variable: " + env);
  }
  return $simulator.findInstance(handle);
})("COUNTER_HANDLE_e5a56560"),
            $db: (function(env) {
  let handle = process.env[env];
  if (!handle) {
    throw new Error("Missing environment variable: " + env);
  }
  return $simulator.findInstance(handle);
})("TABLE_HANDLE_64086798"),
            $std_Json: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        ).handle(event);
};