import { Component } from 'react';
import { connect } from 'react-redux';
import {
  phonebookSelectors,
  phonebookOperations,
  findContacts,
} from '../redux/phonebook';
import AddContact from '../components/AddContact/AddContact';
import ContactsList from '../components/ContactsList/ContactsList';
import FindContacts from '../components/FindContacts/FindContacts';
class Contacts extends Component {
  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <AddContact />
        <FindContacts
          value={this.props.filter}
          onChange={this.propschangeFilter}
        />
        <ContactsList onClick={this.props.deleteContacts} />
      </>
    );
  }
}

const mapPropsToState = state => ({
  contacts: phonebookSelectors.getContacts(state),
  filter: phonebookSelectors.getFilter(state),
});

const mapDispatchToState = dispatch => ({
  changeFilter: ({ filter }) => dispatch(findContacts({ filter })),
  deleteContact: ({ id }) =>
    dispatch(phonebookOperations.deleteContact({ id })),
});

export default connect(mapPropsToState, mapDispatchToState)(Contacts);
