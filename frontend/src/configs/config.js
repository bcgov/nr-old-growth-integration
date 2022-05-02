// This file is provided as an option to support runtime loading of configuration parameters in OpenShift
// Development builds and production builds using yarn build will still work using .env files
const config = (() => {
  return {
    VITE_BACKEND_URL: 'https://nrof-31-backend.apps.silver.devops.gov.bc.ca',
  };
})();
