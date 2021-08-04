import { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import Container from '../../components/Container';
import Form from '../../components/Form';
import Filter from '../../components/Filter';
import ContactList from '../../components/ContactList';
import Loader from '../../components/Loader';
import Error from '../../components/Error';
import fadeStyles from '../../fade/fadeFilter.module.css';
import { operations, selectors } from '../../redux/phonebook';

class ContactsPage extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, isLoading, error } = this.props;
    const renderFilter = contacts.length > 0;

    return (
      <Container>
        <Form />

        <CSSTransition
          in={renderFilter}
          timeout={250}
          classNames={fadeStyles}
          unmountOnExit
        >
          <Filter />
        </CSSTransition>

        {isLoading && <Loader />}
        {error && <Error />}

        <CSSTransition
          in={true}
          appear
          timeout={500}
          classNames={fadeStyles}
          unmountOnExit
        >
          <ContactList />
        </CSSTransition>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  contacts: selectors.getContacts(state),
  isLoading: selectors.getLoading(state),
  error: selectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsPage);
