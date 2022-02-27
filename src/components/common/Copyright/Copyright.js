import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
  background-color: #222222;
  color: #898075;
  text-align: center;
`

function Copyright() {
  return (
    <Container>
      <p>Copyright &copy; 2021. All rights reserved.</p>
    </Container>
  )
}

export default Copyright
