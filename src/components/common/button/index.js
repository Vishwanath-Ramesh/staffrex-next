import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const COLORS = {
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
};

const StyledButton = styled.button`
  padding: 1.2rem 3rem;
  background: ${(props) => COLORS[props.color] || props.color};
  color: #000;
  cursor: pointer;
  outline: none;
  border: 0;
  font-family: inherit;

  &:disabled,
  &[disabled] {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

function Button(props) {
  const { label, color, className, type, onClick, disabled } = props;

  return (
    <StyledButton
      className={className}
      type={type || 'button'}
      color={color}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
}

Button.defaultProps = {
  color: 'secondary',
  className: '',
  type: 'button',
  disabled: false,
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
