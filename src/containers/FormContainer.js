import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function FormContainer({ title, children }) {
  return (
    <div className="form-container">
      <div className="row mx-0 form-container__wrapper">
        <div className="px-0 form__wrapper">
          <h3 className="text-center py-4 form-container__title">{title}</h3>
          <div className="px-3">
            {children}
          </div>
          {title.toLowerCase() === 'register' ? (
            <div className="my-3 px-3">
              <span>Already have an account?</span>
              <Link className="ml-2" to="/signin">Login</Link>
            </div>
          ) : (
            <div className="my-3 px-3 form__footer">
              <span>You do not have an account?</span>
              <Link className="ml-2" to="/signup"> Register</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

FormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default FormContainer;
