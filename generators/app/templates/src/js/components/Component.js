import React, { Component } from 'react';
import { routeCodes } from 'routes';
import { Link } from 'react-router-dom';

export default class Compo extends Component {

    render () {
        return (
            <article>
                Test component
                <Link to={ routeCodes.VIEW_2 }>Back</Link>
            </article>
        );
    }
}
