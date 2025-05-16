// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://37e9236122061bb079432144b9979aed@o4509333775450112.ingest.us.sentry.io/4509333782462464",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;