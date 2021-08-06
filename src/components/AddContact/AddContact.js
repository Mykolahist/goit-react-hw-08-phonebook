import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './AddContact.module.css';
import { connect } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';
const INITIAL_STATE = {
  name: '',
  number: '',
};

class AddContact extends Component {
  state = { ...INITIAL_STATE };

  handelChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  searchRepeatName() {
    const { name } = this.state;
    const normalizedName = name.toLowerCase();
    return this.props.contacts.filter(
      contact => contact.name.toLowerCase() === normalizedName,
    );
  }

  handelSubmit = e => {
    e.preventDefault();
    if (this.searchRepeatName().length !== 0) {
      alert(`${this.state.name} is already in contacts`);
      return;
    }
    this.props.onSubmit({ ...this.state });
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={style.form} onSubmit={this.handelSubmit}>
        <label className={style.form__item}>
          Name
          <input
            className={style.form__input}
            type="text"
            name="name"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handelChange}
          />
        </label>
        <label className={style.form__item}>
          Number
          <input
            className={style.form__input}
            type="tel"
            name="number"
            value={this.state.number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handelChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

AddContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};

const mapPropsToState = state => ({
  contacts: phonebookSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(phonebookOperations.addContact(contact)),
});

export default connect(mapPropsToState, mapDispatchToProps)(AddContact);
