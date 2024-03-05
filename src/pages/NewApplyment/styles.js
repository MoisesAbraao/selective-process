import { Button } from 'antd'
import styled from 'styled-components'

export const NewApplymentsContainer = styled.div`
  margin: 100px 200px;
`

export const NewApplymentsTitle = styled.div`
    font-size: 30px;
    color: #FFFFFF;
    margin-bottom: 50px;
`

export const NewApplymentsFormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    input {
        width: 500px;
    }
`

export const NewApplymentAddButton = styled(Button)`
    background-color: #2dbb5d;
    width: 200px;
  
    span {
    color: #FFFFFF;
    }
`