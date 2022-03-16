import React, { useState, useContext } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import styled from 'styled-components';

import { DataContext } from '../../hooks/useData';
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
  }
`;

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function ApplicationForm() {
  const initialState = {
    showNotification: false,
    showLoader: false,
    notificationMessage: '',
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
  };
  const [state, setState] = useState(initialState);
  const data = useContext(DataContext);

  function handleChange(e) {
    if (e.target.name === 'attachCV') return null;

    setState((currentState) => {
      let value = e.target.value;

      return {
        ...currentState,
        [e.target.name]: value,
      };
    });
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
          [e.target.name]: reader.result,
        }));
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    setState((currentState) => ({ ...currentState, showLoader: true }));
    getAPIData(apiEndPoints.sendMail.method, apiEndPoints.sendMail.url, state, {
      'content-type': 'multipart/form-data',
      // 'content-type': 'application/json',
    })
      .then((response) => {
        setState({
          ...initialState,
          showNotification: true,
          showLoader: false,
          severity: 'success',
          notificationMessage: response.data.data,
        });
      })
      .catch((err) =>
        setState({
          ...initialState,
          showNotification: true,
          showLoader: false,
          severity: 'error',
          notificationMessage: err.response.data.message,
        })
      );
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState((currentState) => ({ ...currentState, showNotification: false }));
  };

  if (!data) return null;

  return (
    <Container
      id="application-form"
      action=""
      method="post"
      enctype="multipart/form-data"
      onSubmit={handleSubmit}
      onChange={handleChange}
    >
      <div className="application__header">{data.applicationForm.title}</div>
      <div className="application__body">
        <div className="application__name">
          <Textbox
            id="first-name"
            name="firstName"
            label={data.applicationForm.firstNameLabel}
            value={state.firstName}
            isMandatory
          />
          <Textbox
            id="last-name"
            name="lastName"
            label={data.applicationForm.lastNameLabel}
            value={state.lastName}
          />
        </div>
        <Textbox
          id="email-address"
          name="emailAddress"
          type="email"
          label={data.applicationForm.emailAddressLabel}
          value={state.emailAddress}
          className="application__email"
          isMandatory
        />
        <Textbox
          id="whatsapp-number"
          name="whatsappNumber"
          label={data.applicationForm.whatsappNumberLabel}
          className="application__phone"
          value={state.whatsappNumber}
          isMandatory
        />
        <Radio
          name="oetTaken"
          label={data.applicationForm.takenOETLabel}
          items={data.applicationForm.OETTakenItems}
          selectedValue={state.oetTaken}
          isMandatory
        />
        <div
          className={`application__oetfields ${
            state.oetTaken.toLowerCase() === 'no' ? 'dispnone' : ''
          }`}
        >
          <Textbox
            id="oet-reading"
            name="oetReading"
            type="number"
            label={data.applicationForm.OETReadingLabel}
            value={state.oetReading}
            className="application__reading"
          />
          <Textbox
            id="oet-writing"
            name="oetWriting"
            type="number"
            label={data.applicationForm.OETWritingLabel}
            value={state.oetWriting}
            className="application__writing"
          />
          <Textbox
            id="oet-listeninig"
            name="oetListening"
            type="number"
            label={data.applicationForm.OETListeningLabel}
            value={state.oetListening}
            className="application__listeninig"
          />
          <Textbox
            id="oet-speaking"
            name="oetSpeaking"
            type="number"
            label={data.applicationForm.OETSpeakingLabel}
            value={state.oetSpeaking}
            className="application__speaking"
          />
        </div>
        <Radio
          name="ieltsTaken"
          label={data.applicationForm.takenIELTSLabel}
          items={data.applicationForm.IELTSTakenItems}
          selectedValue={state.ieltsTaken}
          isMandatory
        />
        <div
          className={`application__ieltsfields ${
            state.ieltsTaken.toLowerCase() === 'no' ? 'dispnone' : ''
          }`}
        >
          <Textbox
            id="ielts-reading"
            name="ieltsReading"
            type="number"
            label={data.applicationForm.IELTSReadingLabel}
            value={state.ieltsReading}
            className="application__reading"
          />
          <Textbox
            id="ielts-writing"
            name="ieltsWriting"
            type="number"
            label={data.applicationForm.IELTSWritingLabel}
            value={state.ieltsWriting}
            className="application__writing"
          />
          <Textbox
            id="ielts-listeninig"
            name="ieltsListening"
            type="number"
            label={data.applicationForm.IELTSListeningLabel}
            value={state.ieltsListening}
            className="application__listeninig"
          />
          <Textbox
            id="ielts-speaking"
            name="ieltsSpeaking"
            type="number"
            label={data.applicationForm.IELTSSpeakingLabel}
            value={state.ieltsSpeaking}
            className="application__speaking"
          />
        </div>
        <FileUpload
          name="attachCV"
          id="attach-cv"
          label={data.applicationForm.attachCVLabel}
          onChange={onFileChange}
          isMandatory
          accept=".pdf,.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        />
        <Button
          type="submit"
          name="submit"
          className="application__submit"
          label={data.applicationForm.applyNowCTALabel}
        />
      </div>
      <Snackbar
        open={state.showNotification}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={state.severity}
          sx={{ width: '100%' }}
        >
          {state.notificationMessage}
        </Alert>
      </Snackbar>
      <Backdrop
        sx={{ color: '#f5bc34', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={state.showLoader}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Container>
  );
}

export default ApplicationForm;
