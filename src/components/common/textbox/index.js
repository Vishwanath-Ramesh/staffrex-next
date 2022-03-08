import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  padding: 10px 1rem;
  border-radius: 5px;
  outline: none;
  border: 1px solid #a8b1cc;
  color: #b1aaad;
  width: 100%;
`;

function Textbox({
  id,
  type,
  name,
  className,
  label,
  value,
  onChange,
  isMandatory,
}) {
  return (
    <Input
      className={className}
      type={type || 'text'}
      name={name || id}
      id={id}
      value={value}
      required={isMandatory}
      placeholder={label}
      onChange={onChange}
    />
  );
}

Textbox.defaultProps = {
  name: '',
  type: 'text',
  className: '',
  onChange: () => null,
};

Textbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default Textbox;
