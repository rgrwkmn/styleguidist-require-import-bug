import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <button>
        {children}
      </button>
    );
  }
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;