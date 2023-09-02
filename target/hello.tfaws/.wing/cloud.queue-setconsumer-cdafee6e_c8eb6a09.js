exports.handler = async function(event) {
  return await (new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/queue.setconsumer.inflight.js")).QueueSetConsumerHandlerClient({ handler: 
          (await (async () => {
            const $Closure1Client = 
          require("./inflight.$Closure1-1.js")({
            $bucket: new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/bucket.inflight")).BucketClient(process.env["BUCKET_NAME_d755b447"]),
            $counter: new (require("/usr/local/lib/node_modules/winglang/node_modules/@winglang/sdk/lib/shared-aws/counter.inflight")).CounterClient(process.env["DYNAMODB_TABLE_NAME_49baa65c"], 1),
          })
        ;
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        , args: {} })).handle(event);
};