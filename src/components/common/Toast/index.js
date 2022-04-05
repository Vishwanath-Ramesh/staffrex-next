import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

import { useStore } from '../../hooks/useStore';
import { hideToast } from '../../hooks/actions';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Toast() {
  const [store, dispatch] = useStore();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(hideToast());
  };

  return (
    <Snackbar
      open={store.notification.show}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={store.notification.severity}
        sx={{ width: '100%' }}
      >
        {store.notification.message}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
