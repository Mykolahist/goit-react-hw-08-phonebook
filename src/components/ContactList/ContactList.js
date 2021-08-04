import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import { operations, selectors } from '../../redux/phonebook';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {contacts.map(({ id, name, number }) => (
      <CSSTransition key={id} timeout={250} classNames={styles}>
        <li className={styles.item}>
          <p className={styles.name}>{name}:</p>
          <p className={styles.name}>{number}</p>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </Button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.defaultProps = {
  name: '',
  number: '',
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
      isContactExists: PropTypes.bool,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  contacts: selectors.getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(operations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
