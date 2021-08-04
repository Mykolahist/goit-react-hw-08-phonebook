import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { selectors, changeFilter } from '../../redux/phonebook';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <div className={styles.thumb}>
        <h2 className={styles.title}>Contacts</h2>
        <label className={styles.label}>
          Find contacts by name
          <input
            type="text"
            className={styles.input}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    </>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: selectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
