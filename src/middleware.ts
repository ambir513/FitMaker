import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// Make all nested sign-in/sign-up routes public
const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/diet-plan",
  "/api/diet-filter(\\?.*)?",
]);

export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static assets
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always match API/trpc routes
    "/(api|trpc)(.*)",
  ],
};
