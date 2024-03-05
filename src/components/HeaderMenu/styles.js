import styled from 'styled-components'
import { Layout } from 'antd'

const { Header } = Layout

export const HeaderContainer = styled(Header)`
  background-color: #1e1e26;
`

export const HeaderContent = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: baseline;
  width: 100%;

  button:first-child {
    color: #2dbb5d;
  }

  button {
    color: #FFFFFF;
    margin-right: 10px;

    :hover {
    color: #2dbb5d;
  }
  }

  h3:hover {
    color: #2dbb5d;
  }
`