import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { useMutation, useQueryClient } from 'react-query';
import isEqual from 'lodash/isEqual';
import styled from 'styled-components';

import getAPIData from '../../src/configs/api';
import apiEndPoints from '../../src/configs/apiEndPoints';
import Button from '../../src/components/common/button';
import { useStore } from '../../src/components/hooks/useStore';
import {
  hideLoader,
  showLoader,
  showToast,
} from '../../src/components/hooks/actions';

const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false });

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-color: #f2f3f4;
  padding: 0px 10% 1rem 10%;
  min-height: calc(100vh - 300px);

  h1 {
    color: var(--primary-text);
    margin: 3rem 0px;
  }

  h1::after {
    content: '';
    display: block;
    position: absolute;
    background-color: var(--secondary-color);
    width: 100px;
    height: 3px;
    margin-top: 1rem;
  }

  .content-update__body {
    display: flex;
    flex-flow: column wrap;
    gap: 1rem;

    .content-update__cta {
      display: flex;
      gap: 1rem;
      align-self: flex-end;

      .content-update__reset {
        border: 2px solid var(--secondary-color);
        background: #f2f3f4;
        font-weight: bold;
      }

      .content-update__submit {
        border: 2px solid var(--secondary-color);
        align-self: flex-end;
      }
    }
  }
`;

function ContentUpdate() {
  const queryClient = useQueryClient();
  const [{ data: contextData }, dispatch] = useStore();
  const { _id = '', ...data } = contextData;
  const [state, setState] = React.useState(data);

  const mutation = useMutation(
    (postData) =>
      getAPIData(
        apiEndPoints.updateData.method,
        `${apiEndPoints.updateData.url}/${_id}`,
        postData
      ).then((response) => response.data),
    {
      onMutate: () => dispatch(showLoader()),
      onSuccess: (response) => {
        queryClient.invalidateQueries(['data', 'getStaticContent']).then(() => {
          dispatch(hideLoader());
          dispatch(showToast({ message: JSON.stringify(response.message) }));
        });
      },
    }
  );

  function handleEdit({ updated_src }) {
    setState(updated_src);
  }

  function handleSubmit(e) {
    mutation.mutate(state);
  }

  function handleReset(e) {
    setState(data);
  }

  React.useEffect(() => {
    setState(data);
  }, [contextData]);

  return (
    <Container>
      <Head>
        <title>Content Update</title>
      </Head>
      <h1>CONTENT UPDATE</h1>
      <div className="content-update__body">
        <div className="content-update__cta">
          <Button
            className="content-update__reset"
            label="Reset"
            onClick={handleReset}
          />
          <Button
            className="content-update__submit"
            label="Update"
            onClick={handleSubmit}
            disabled={isEqual(state, data)}
          />
        </div>
        <DynamicReactJson
          src={state}
          theme="bright"
          name={false}
          displayDataTypes={false}
          displayObjectSize={false}
          collapsed={false}
          onEdit={handleEdit}
          onDelete={handleEdit}
          enableClipboard={false}
        />
      </div>
    </Container>
  );
}

export default ContentUpdate;
