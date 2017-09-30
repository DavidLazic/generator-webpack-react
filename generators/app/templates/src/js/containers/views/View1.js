import React, { Component } from 'react';
import Compo from 'components/Component';

export default class View1 extends Component {

    componentDidMount () {
        this.toggleComponentMount(true);
    }

    componentWillUnmount () {
        this.toggleComponentMount(false);
    }

    /**
     * @description
     * Toggle mounted flag of a component.
     *
     * @param  {Boolean} mounted
     * @return {Function}
     * @private
     */
    toggleComponentMount (mounted) {
        return Object.assign(this, { mounted });
    }


    render () {
        return (
            <article>
                Welcome to View_1!
                <Compo />
            </article>
        );
    }
}
