// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://usazebasu019cl.met_intnet.net:35667/GPRService/api/v1',
    // 'https://dev.api.metlife.com/metlife/development/GPRService/api/v1',
  clientId: 'c0874ae5-f244-4504-b71f-c6f832defbda',
  tokenUrl: 'https://dev.api.metlife.com/metlife/development/authorization/token',
  tokenUsername: 'AQ707806',
  tokenPassword: 'sacOk5ei',
  basicAuth: 'Basic QVE3MDc4MDY6c2FjT2s1ZWk='
};
