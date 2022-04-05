import React, { useState, useContext } from 'react';

import styled from 'styled-components';

import { hideLoader, showLoader, showToast } from '../../hooks/actions';
import { useStore } from '../../hooks/useStore';
import getAPIData from '../../../configs/api';
import apiEndPoints from '../../../configs/apiEndPoints';
import Textbox from '../../common/textbox';
import Button from '../../common/button';
import Radio from '../../common/radio';
import FileUpload from '../../common/FileUpload';

const Container = styled.form`
  padding: 0rem 10%;
  margin: auto;
  margin-bottom: 2rem;

  .application__header {
    background: var(--primary-text);
    color: #fff;
    padding: 1rem 0rem;
    text-align: center;
    border-radius: 20px 20px 0px 0px;
  }

  .application__body {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background: #fff;
    color: #b1aaad;
    padding: 2rem 2rem;
    border-radius: 0px 0px 20px 20px;

    .application__name {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }

    .application__oetfields,
    .application__ieltsfields {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .application__submit {
      align-self: flex-start;
      font-weight: bold;
    }

    #attach-cv {
      font-family: inherit;
    }
  }
`;

function ApplicationForm() {
  const initialState = {
    formValues: {
      firstName: '',
      lastName: '',
      emailAddress: '',
      whatsappNumber: '',
      oetTaken: 'No',
      oetReading: null,
      oetWriting: null,
      oetListening: null,
      oetSpeaking: null,
      ieltsTaken: 'No',
      ieltsReading: null,
      ieltsWriting: null,
      ieltsListening: null,
      ieltsSpeaking: null,
      fileName: '',
    },
  };
  const [state, setState] = useState(initialState);
  const [{ data }, dispatch] = useStore();

  function handleChange(e) {
    if (e.target.name === 'attachCV') return null;

    setState((currentState) => {
      let value = e.target.value;

      return {
        ...currentState,
        formValues: {
          ...currentState.formValues,
          [e.target.name]: value,
        },
      };
    });
  }

  async function onFileChange2(e) {
    let file = e.target.files[0];

    setState((currentState) => ({
      ...currentState,
      formValues: {
        ...currentState.formValues,
        file,
      },
    }));
  }

  async function onFileChange(e) {
    let file = e.target.files[0];

    const reader = new FileReader();

    reader.addEventListener(
      'load',
      function () {
        // convert image file to base64 string
        setState((currentState) => ({
          ...currentState,
          fileName: file.name,
          file,
          [e.target.name]: reader.result,
        }));
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    Object.keys(state.formValues).forEach((key) =>
      formData.append(key, state.formValues[key] || '-')
    );

    dispatch(showLoader());

    const response = await getAPIData(
      apiEndPoints.sendMail.method,
      apiEndPoints.sendMail.url,
      formData,
      {
        'content-type': 'multipart/form-data',
        // 'content-type': 'application/json',
      }
    );

    setState({
      ...initialState,
    });
    dispatch(hideLoader());
    dispatch(
      showToast({
        severity: response.status === 200 ? 'success' : 'error',
        message: response.data.message,
      })
    );
  }

  if (!data) return null;

  const { formValues } = state;

  return (
    <Container
      id="application-form"
      action="/apply"
      method="post"
      enctype="multipart/form-data"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className="application__header">{data?.applicationForm?.title}</div>
      <div className="application__body">
        <div className="application__name">
          <Textbox
            id="first-name"
            name="firstName"
            label={data?.applicationForm?.firstNameLabel}
            value={formValues.firstName}
            isMandatory
          />
          <Textbox
            id="last-name"
            name="lastName"
            label={data?.applicationForm?.lastNameLabel}
            value={formValues.lastName}
          />
        </div>
        <Textbox
          id="email-address"
          name="emailAddress"
          type="email"
          label={data?.applicationForm?.emailAddressLabel}
          value={formValues.emailAddress}
          className="application__email"
          isMandatory
        />
        <Textbox
          id="whatsapp-number"
          name="whatsappNumber"
          label={data?.applicationForm?.whatsappNumberLabel}
          className="application__phone"
          value={formValues.whatsappNumber}
          isMandatory
        />
        <Radio
          name="oetTaken"
          label={data?.applicationForm?.takenOETLabel}
          items={data?.applicationForm?.OETTakenItems}
          selectedValue={formValues.oetTaken}
          isMandatory
        />
        <div
          className={`application__oetfields ${
            formValues.oetTaken.toLowerCase() === 'no' ? 'dispnone' : ''
          }`}
        >
          <Textbox
            id="oet-reading"
            name="oetReading"
            type="number"
            label={data?.applicationForm?.OETReadingLabel}
            value={formValues.oetReading}
            className="application__reading"
          />
          <Textbox
            id="oet-writing"
            name="oetWriting"
            type="number"
            label={data?.applicationForm?.OETWritingLabel}
            value={formValues.oetWriting}
            className="application__writing"
          />
          <Textbox
            id="oet-listeninig"
            name="oetListening"
            type="number"
            label={data?.applicationForm?.OETListeningLabel}
            value={formValues.oetListening}
            className="application__listeninig"
          />
          <Textbox
            id="oet-speaking"
            name="oetSpeaking"
            type="number"
            label={data?.applicationForm?.OETSpeakingLabel}
            value={formValues.oetSpeaking}
            className="application__speaking"
          />
        </div>
        <Radio
          name="ieltsTaken"
          label={data?.applicationForm?.takenIELTSLabel}
          items={data?.applicationForm?.IELTSTakenItems}
          selectedValue={formValues.ieltsTaken}
          isMandatory
        />
        <div
          className={`application__ieltsfields ${
            formValues.ieltsTaken.toLowerCase() === 'no' ? 'dispnone' : ''
          }`}
        >
          <Textbox
            id="ielts-reading"
            name="ieltsReading"
            type="number"
            label={data?.applicationForm?.IELTSReadingLabel}
            value={formValues.ieltsReading}
            className="application__reading"
          />
          <Textbox
            id="ielts-writing"
            name="ieltsWriting"
            type="number"
            label={data?.applicationForm?.IELTSWritingLabel}
            value={formValues.ieltsWriting}
            className="application__writing"
          />
          <Textbox
            id="ielts-listeninig"
            name="ieltsListening"
            type="number"
            label={data?.applicationForm?.IELTSListeningLabel}
            value={formValues.ieltsListening}
            className="application__listeninig"
          />
          <Textbox
            id="ielts-speaking"
            name="ieltsSpeaking"
            type="number"
            label={data?.applicationForm?.IELTSSpeakingLabel}
            value={formValues.ieltsSpeaking}
            className="application__speaking"
          />
        </div>
        <FileUpload
          name="attachCV"
          id="attach-cv"
          label={data?.applicationForm?.attachCVLabel}
          onChange={onFileChange2}
          isMandatory
          accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <Button
          type="submit"
          name="submit"
          className="application__submit"
          label={data?.applicationForm?.applyNowCTALabel}
        />
      </div>
    </Container>
  );
}

export default ApplicationForm;

