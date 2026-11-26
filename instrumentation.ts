import { createOnRequestError } from "@posthog/next";
import type { Instrumentation } from "next";
import { getPostHogServer } from "./lib/posthog-server";

const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const posthogRequestErrorHandler =
  token && host ? createOnRequestError({ apiKey: token, host }) : null;

export function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    getPostHogServer();
  }
}

export const onRequestError: Instrumentation.onRequestError = (...args) =>
  posthogRequestErrorHandler?.(...args);
