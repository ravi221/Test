// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://qa.api.metlife.com/metlife/qa/GPR/api/v1/',
  clientId: '849c7a0f-f812-455e-b825-6ffba8ed6c69',
  tokenUrl: 'https://qa.api.metlife.com/metlife/qa/authorization/token',
  tokenUsername: 'AQ707806',
  tokenPassword: 'sacOk5ei',
  basicAuth: 'Basic QVE3MDc4MDY6c2FjT2s1ZWk='
};
