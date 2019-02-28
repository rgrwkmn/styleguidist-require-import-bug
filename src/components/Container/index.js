import React from 'react';
import PropTypes from 'prop-types';

class Container extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div style={{ border: 'solid 1px #000', padding: '10px' }}>
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;