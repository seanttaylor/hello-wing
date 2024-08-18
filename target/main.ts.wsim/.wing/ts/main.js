"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const framework_1 = require("@wingcloud/framework");
const FUNC_NAME = "hello_wing";
const API_NAME = "my_api";
const APP_NAME = "com.beepboop.enzo";
async function helloWing() {
    return "Wing!";
}
/**
 *
 */
(0, framework_1.main)((root) => {
    const api = new framework_1.cloud.Api(root, API_NAME);
    new framework_1.cloud.Function(root, FUNC_NAME, (0, framework_1.inflight)(helloWing));
    /**
     * Returns the system status
     */
    api.get("/status", (0, framework_1.inflight)(async (ctx, request) => {
        return {
            status: 200,
            body: JSON.stringify({
                name: "com.beepboop.enzo",
                timestamp: new Date().toISOString()
            })
        };
    }));
    /**
     * Endpoint for receiving user intent messages from
     * the client-side LLM
     */
    api.post("/intents", (0, framework_1.inflight)(async (ctx, request) => {
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
    }));
});
//# sourceMappingURL=main.js.map