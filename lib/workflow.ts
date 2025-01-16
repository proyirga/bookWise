import config from "./config";
import { Client as WorkFlowClient } from "@upstash/workflow";

export const workFlowClient = new WorkFlowClient({
  baseUrl: config.env.upstash.qstashUrl,
  token: config.env.upstash.qstashToken,
});

export default workFlowClient;
