import { HOST } from 'constants/api';

export default class Api {

    static headers () {
        return {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'dataType': 'json'
        };
    }

    static get (route) {
        return this.http(route, null, 'GET');
    }

    static post (route, props) {
        return this.http(route, props, 'POST');
    }

    static httpConfig (props, type) {
        const options = Object.assign({
            method: type,
            headers: Api.headers()
        }, props ? { body: JSON.stringify(props) } : null);

        return Promise.resolve(Object.assign(options.headers, { Authorization: `Bearer ${localStorage.getItem('token')}` }));
    }

    static http (route, props, type) {
        return this.httpConfig(props, type)
            .then(options => fetch(`${HOST}${route}`, options)
                .then(res => res.json())
                .then(data => data)
                .catch(err => console.log('ERR_FETCH -- ', err)));
    }
}
