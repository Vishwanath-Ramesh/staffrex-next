import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  margin: auto;
  color: #b1aaad;

  .radio__mandatory {
    color: red;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  .radio__itemlabel {
    padding-right: 2rem;
  }
`;

function Radio({ items, name, label, isMandatory, selectedValue }) {
  return (
    <Container>
      <p>
        <span className="radio__label">{label}</span>
        {isMandatory && <span className="radio__mandatory">*</span>}
      </p>
      {items.map((item) => (
        <span key={item.id}>
          <input
            type="radio"
            id={item.id}
            name={name}
            value={item.value}
            checked={selectedValue === item.value}
            required={isMandatory}
          ></input>
          <label className="radio__itemlabel" htmlFor={item.id}>
            {item.label}
          </label>
        </span>
      ))}
    </Container>
  );
}

Radio.defaultProps = {
  selectedValue: '',
  items: [],
};

Radio.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.object),
  selectedValue: PropTypes.string,
  label: PropTypes.string.isRequired,
};

export default Radio;
