import React, { Component } from 'react';
import t from 'prop-types';
import classNames from 'classnames';
import { useForm } from 'lib/decorators';
import { validateNumberOnKeypress } from 'lib/helpers/validation';

const MODEL = {
  firstName: {
    name: 'firstName',
    placeholder: 'First Name',
    type: 'text',
    values: ''
  },
  lastName: {
    name: 'lastName',
    placeholder: 'Last Name',
    type: 'text',
    values: ''
  },
  email: {
    name: 'email',
    placeholder: 'Email Address',
    type: 'email',
    values: '',
    error: 'Error: please enter a valid email address'
  },
  zipCode: {
    name: 'zipCode',
    placeholder: 'Zip Code',
    type: 'number',
    values: '',
    error: 'Error: please enter a valid zip code'
  }
};

@useForm({ form: MODEL })
class FormProfile extends Component {

  static propTypes = {
    onSubmit: t.func.isRequired,
    onCancel: t.func,
    setValue: t.func.isRequired,
    data: t.object.isRequired
  };

  static defaultProps = {
    onCancel: null
  };

  onRemoveError = () =>
    this.props.onRemoveError()

  onSubmit = event => {
    event.persist();
    event.preventDefault();
    return this.props.onSubmit(event);
  };

  onCancel = () => this.props.onCancel();

  render () {
    const { data } = this.props;
    const { error } = this.props.formState;
    return (
      <form className="form modal__form" onSubmit={ this.onSubmit }>
        {
          Object.keys(MODEL).map((key, index) => (
            <div
              key={ index }
              data-error={ MODEL[key].error }
              className={ classNames('modal__fields', {
                error: error && error === MODEL[key].name
              }) }
              onClick={ this.onRemoveError }>
              <input
                name={ key }
                type={ MODEL[key].type }
                value={ data[key] }
                placeholder={ MODEL[key].placeholder }
                className="modal__input"
                onKeyPress={ e => validateNumberOnKeypress(e, 5) }
                onChange={ this.props.setValue } />
            </div>
          ))
        }

        <div className="modal__submit-wrapper">
          <button
            type="submit"
            className="modal__button"
            onClick={ this.onSubmit }>
            SUBMIT
          </button>
        </div>

      </form>
    );
  }
}

export default FormProfile;
