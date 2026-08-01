export const environment = {
  production: true,
  // Relative path: assumes the combined-deployment setup from the README, where
  // ASP.NET Core serves both the API and this built Angular app from one origin.
  // If you deploy the API on a different domain, change this to its full URL,
  // e.g. 'https://api.yourdomain.com/api'.
  apiBase: '/api'
};
