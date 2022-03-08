import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  input {
    width: 100%;
    padding: 10px 1rem;
    border-radius: 5px;
    border: 1px solid #a8b1cc;
  }

  .file__mandatory {
    color: red;
  }

  p {
    padding: 0px;
    margin: 0px;
  }

  .file__itemlabel {
    padding-right: 2rem;
  }
`;

function FileUpload({ id, label, name, onChange, isMandatory }) {
  return (
    <Container>
      <label htmlFor={id}>
        <span className="file__label">{label}</span>
        {isMandatory && <span className="file__mandatory">*</span>}
      </label>
      <input
        type="file"
        id={id}
        name={name}
        accept="image/png, image/jpeg"
        onChange={onChange}
        required={isMandatory}
      />
    </Container>
  );
}

export default FileUpload;
