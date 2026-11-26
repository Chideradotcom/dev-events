import { PostHog } from "posthog-node";

let posthogServer: PostHog | null = null;
let hasWarnedAboutMissingConfig = false;

export function getPostHogServer() {
  const token = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST;

  if (!token || !host) {
    if (process.env.NODE_ENV !== "production" && !hasWarnedAboutMissingConfig) {
      const missingVariable = token
        ? "NEXT_PUBLIC_POSTHOG_HOST"
        : "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN";

      console.warn(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
      );
      hasWarnedAboutMissingConfig = true;
    }

    return null;
  }

  posthogServer ??= new PostHog(token, {
    host,
    flushAt: 1,
    flushInterval: 0,
    requestTimeout: 2000,
    fetchRetryCount: 0,
    enableExceptionAutocapture: process.env.NEXT_RUNTIME === "nodejs",
  });

  return posthogServer;
}
