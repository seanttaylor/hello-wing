"use strict";
var $handler = undefined;
exports.handler = async function(event) {
  $handler = $handler ?? ((await (async () => {
  const $func = async (ctx, event) => {
            if (!event) {
                throw new Error("invalid API request event");
            }
            const response = await ctx.handler(event);
            if (!response) {
                return undefined;
            }
            else {
                return response;
            }
        }
  const $ctx = {
  handler: (await (async () => {
  const $func = async (ctx, request) => {
        const val = JSON.parse(request?.body);
        console.log(val.header);
        return {
            status: 200,
            body: JSON.stringify({
                name: "com.beepboop.api.intents",
                timestamp: new Date().toISOString()
            }),
            headers: {
                "content-type": "application/json"
            }
        };
    }
  const $ctx = {
  
  };
  let newFunction = async (...args) => {
    return $func($ctx, ...args);
  };
  newFunction.handle = newFunction;
  return newFunction;
}
)())
  };
  let newFunction = async (...args) => {
    return $func($ctx, ...args);
  };
  newFunction.handle = newFunction;
  return newFunction;
}
)()));
  return await $handler.handle(event);
};