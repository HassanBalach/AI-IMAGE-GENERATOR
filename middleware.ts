import {
  clerkMiddleware,
  createRouteMatcher
} from '@clerk/nextjs/server';

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  '/api/webhooks/clerk'
]);

// Apply Clerk middleware for route protection
export default clerkMiddleware((auth, req) => {
  try {
    // Check if the route is protected
    if (isProtectedRoute(req)) {
      // Apply authentication protection
      auth().protect();
    }
  } catch (error) {
    console.error('Error in middleware:', error);
    throw new Error('Middleware authentication failed');
  }
});

// Middleware configuration to match URL patterns
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
