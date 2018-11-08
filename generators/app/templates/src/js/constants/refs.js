const url = {
  production: '',
  staging: '',
  development: '',
  none: ''
};

export const HOST = url[process.env.NODE_ENV];
export const TEST = '/test';
