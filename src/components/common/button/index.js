import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const COLORS = {
  primary: 'var(--primary-color)',
  secondary: 'var(--secondary-color)',
}

const StyledButton = styled.button`
  padding: 1.2rem 3rem;
  background: ${(props) => COLORS[props.color] || props.color};
  color: #000;
  cursor: pointer;
  outline: none;
  border: 0;
`

function Button(props) {
  const { label, color, className } = props

  return (
    <StyledButton className={className} type="button" color={color}>
      {label}
    </StyledButton>
  )
}

Button.defaultProps = {
  color: 'secondary',
  className: '',
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
}

export default Button
