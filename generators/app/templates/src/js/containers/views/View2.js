import React, { Component } from 'react';

export default class View2 extends Component {

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
                Welcome to View_2!
            </article>
        );
    }
}
