const url = {
    production: '',
    qa: '',
    development: '',
    local: ''
};

export const HOST = url[process.env.NODE_ENV];
export const PING = '/api/ping';
