import React from 'react';
import { useIsFetching } from 'react-query';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

import { useStore } from '../../hooks/useStore';

function Spinner() {
  const [{ showLoader }] = useStore();
  const isFetching = useIsFetching();

  return (
    <Backdrop
      sx={{ color: '#f5bc34', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={showLoader || isFetching > 0}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Spinner;
