import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import shortid from 'shortid';
import Button from '@material-ui/core/Button';

import Notification from '../Notification';
import { operations, selectors } from '../../redux/phonebook';

import styles from './Form.module.css';
import fadeStyles from '../Notification/fadeNotification.module.css';

class Form extends Component {
  state = {
    id: '',
    name: '',
    number: '',
    isContactExists: false,
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
      id: shortid.generate(),
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { savedContacts } = this.props;
    const { name } = this.state;

    const normalizedName = name.toLowerCase();

    if (
      savedContacts.find(contact =>
        contact.name.toLowerCase().includes(normalizedName),
      )
    ) {
      this.setState({ isContactExists: true });

      setTimeout(() => {
        this.setState({ isContactExists: false });
      }, 2500);

      return;
    }

    this.props.onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState({ name: '', number: '', isContactExists: false });
  };

  render() {
    const { name, number, isContactExists } = this.state;

    return (
      <div className={styles.thumb}>
        <form onSubmit={this.handleSubmit}>
          <div className={styles.form__container}>
            <label className={styles.label}>
              Name
              <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
                className={styles.input}
                onChange={this.handleChange}
                value={name}
              />
            </label>

            <label className={styles.label}>
              Number
              <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                required
                className={styles.input}
                onChange={this.handleChange}
                value={number}
              />
            </label>
          </div>

          <div className={styles.button__container}>
            <Button type="submit" variant="contained" color="primary">
              Add contact
            </Button>
          </div>
        </form>

        <CSSTransition
          in={isContactExists}
          timeout={250}
          classNames={fadeStyles}
          unmountOnExit
        >
          <Notification name={name} />
        </CSSTransition>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savedContacts: selectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: data => dispatch(operations.addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
