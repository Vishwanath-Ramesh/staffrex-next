import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useStore } from '../../hooks/useStore';

function Spinner() {
  const [{ showLoader }] = useStore();

  return (
    <Backdrop
      sx={{ color: '#f5bc34', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Spinner;
