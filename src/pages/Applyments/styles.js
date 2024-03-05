import styled from 'styled-components'
import { Button } from 'antd'

export const ApplymentsContainer = styled.div`
  /* width: 100%; */
  margin: 100px 200px;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin: 50px 0 50px;
`

export const ApplyButton = styled(Button)`
  background-color: #2dbb5d;
  
   span {
    color: #FFFFFF;
   }
`