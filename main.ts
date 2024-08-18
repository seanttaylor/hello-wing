import { main, cloud, inflight } from "@wingcloud/framework";

const FUNC_NAME = "hello_wing";
const API_NAME = "my_api";
const APP_NAME = "com.beepboop.enzo";

/**
 * 
 */
main((root) => {
  const api = new cloud.Api(root, API_NAME);

  /**
   * Returns the system status
   */
  api.get("/status", inflight(async (ctx, request): Promise<cloud.ApiResponse> => {
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
  api.post("/intents", inflight(async (ctx, request: cloud.ApiRequest): Promise<cloud.ApiResponse> => {
    const requestBody = JSON.parse(request?.body as unknown as any);
    
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