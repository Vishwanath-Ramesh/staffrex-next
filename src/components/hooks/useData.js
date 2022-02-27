import React, { useState, useEffect, createContext } from 'react';

import getAPIData from '../../configs/api';
import apiEndPoints from '../../configs/apiEndPoints';

const DataContext = createContext();

function DataProvider(props) {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await getAPIData(
        apiEndPoints.getData.method,
        apiEndPoints.getData.url
      );
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}

export { DataProvider, DataContext };
