exports.handler = async function(event) {
  return await (new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/api.onrequest.inflight.js")).ApiOnRequestHandlerClient({ handler: 
          (await (async () => {
            const $Closure3Client = 
          require("./inflight.$Closure3-1.js")({
            $counter: new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/counter.inflight")).CounterClient(process.env["DYNAMODB_TABLE_NAME_49baa65c"], 0),
            $db: new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/table.inflight")).TableClient(process.env["DYNAMODB_TABLE_NAME_d5d44f18"], process.env["DYNAMODB_TABLE_NAME_d5d44f18_PRIMARY_KEY"], process.env["DYNAMODB_TABLE_NAME_d5d44f18_COLUMNS"]),
            $std_Json: require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/std/json.js").Json,
          })
        ;
            const client = new $Closure3Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} })).handle(event);
};