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
        return {
            status: 200,
            body: JSON.stringify({
                name: "com.beepboop.enzo",
                timestamp: new Date().toISOString()
            })
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