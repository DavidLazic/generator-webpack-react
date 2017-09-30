import React, { Component } from 'react';
import { routeCodes } from 'routes';
import { Link } from 'react-router-dom';

export default class Compo extends Component {

    render () {
        return (
            <article>
                <div>Test component</div>
                <Link to={ routeCodes.VIEW_2 }>To View 2</Link>
            </article>
        );
    }
}
