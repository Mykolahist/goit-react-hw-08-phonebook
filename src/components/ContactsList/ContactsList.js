import { Component } from 'react';
import PropTypes from 'prop-types';
import style from './ContactsList.module.css';
import { connect } from 'react-redux';
import { phonebookSelectors, phonebookOperations } from '../../redux/phonebook';

class ContactsList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <ul className={style.list}>
          {this.props.isLoading && <h1>Loading...</h1>}
          {this.props.contactsList &&
            this.props.contactsList.map(item => (
              <li key={item.id} className={style.item}>
                <span>
                  {item.name}: {item.number}
                </span>
                <button
                  className={style.list__button}
                  onClick={() => this.props.onClick(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      </>
    );
  }
}

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func.isRequired,
};

// const findContacts = (filter, contacts) => {

// };

const mapPropsToState = state => ({
  contactsList: phonebookSelectors.getVisibleContacts(state),
  isLoading: phonebookSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
  onClick: id => dispatch(phonebookOperations.deleteContact(id)),
});

export default connect(mapPropsToState, mapDispatchToProps)(ContactsList);
