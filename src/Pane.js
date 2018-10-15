import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_USER_AGENT =
  'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.2 (KHTML, like Gecko) Safari/537.2';
const USER_AGENT =
  typeof navigator !== 'undefined' ? navigator.userAgent : DEFAULT_USER_AGENT;

class Pane extends React.PureComponent {
  render() {
    const {
      children,
      className,
      split,
      style: styleProps,
      size,
      eleRef,
    } = this.props;

    const classes = ['Pane', split, className];

    const style = Object.assign({}, styleProps || {}, {
      flex: 1,
      position: 'relative',
      outline: 'none',
    });

    if (size !== undefined) {
      if (split === 'vertical') {
        style.width = size;
      } else {
        style.height = size;
        style.display = 'flex';
      }
      style.flex = 'none';
    }

    return (
      <div ref={eleRef} className={classes.join(' ')} style={style}>
        {children}
      </div>
    );
  }
}

Pane.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  split: PropTypes.oneOf(['vertical', 'horizontal']),
  style: PropTypes.object,
  eleRef: PropTypes.func,
};

export default Pane;
