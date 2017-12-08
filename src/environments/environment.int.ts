// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://int.api.metlife.com/metlife/integration/GPRService/api/v1',
  clientId: '2c729000-2731-482e-80b7-0ec26acf4eb4',
  tokenUrl: 'https://int.api.metlife.com/metlife/integration/authorization/token',
  tokenUsername: 'AQ707806',
  tokenPassword: 'sacOk5ei',
  basicAuth: 'Basic QVE3MDc4MDY6c2FjT2s1ZWk='
};
