import PropTypes from 'prop-types';
import style from './FindContacts.module.css';
import { connect } from 'react-redux';

import { phonebookSelectors, findContacts } from '../../redux/phonebook';
const FindContacts = ({ value, onChange }) => (
  <>
    <h1>Contacts</h1>
    <label>
      Find contacts by name
      <input
        className={style.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  </>
);

FindContacts.propsTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapPropsToState = state => ({
  contacts: phonebookSelectors.getContacts(state),
  value: phonebookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(findContacts(e.currentTarget.value)),
});

export default connect(mapPropsToState, mapDispatchToProps)(FindContacts);
