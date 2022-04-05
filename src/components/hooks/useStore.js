import React, { useReducer, createContext } from 'react';
import { useQuery } from 'react-query';

import getAPIData from '../../configs/api';
import apiEndPoints from '../../configs/apiEndPoints';
import reducer from './dataReducer';
import { setData } from './actions';

const Store = createContext();

export const useStore = () => React.useContext(Store);

export function StoreProvider(props) {
  const initialState = {
    data: {},
    notification: {
      message: '',
      show: false,
      severity: 'success',
    },
    showLoader: false,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useQuery(['data', 'getStaticContent'], () =>
    getAPIData(apiEndPoints.getData.method, apiEndPoints.getData.url).then(
      (response) => dispatch(setData(response.data.data[0]))
    )
  );

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getAPIData(
  //       apiEndPoints.getData.method,
  //       apiEndPoints.getData.url
  //     );
  //     setData(response.data.data[0]);
  //   }
  //   fetchData();
  // }, []);

  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
}
