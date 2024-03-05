import React, { useState } from 'react'
import api from '../../services/api'
import { useNavigate } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import { 
    NewApplymentsContainer, 
    NewApplymentsTitle,
    NewApplymentsFormWrapper,
    NewApplymentAddButton
} from './styles'
import { Input } from 'antd'

const NewApplyment = () => {
    const navigate = useNavigate()
    const [company, setCompany] = useState("")
    const [status, setStatus] = useState("")
    const [applicationLink, setApplicationLink] = useState("")


    const handleNewAppy = async() => {
        let params = {
            company: company,
            status: status,
            link: applicationLink
        }

        if (company?.length && status?.length && applicationLink?.length) {
            await api?.post('/applyments', params).then((result) => { if(result?.status === 201) { navigate('/applyments') }})
        }
    }


    return (
        <> 
            <HeaderMenu />
            <NewApplymentsContainer>
                <NewApplymentsTitle>Apply New Job Position</NewApplymentsTitle>
                <NewApplymentsFormWrapper>
                    <Input 
                        size="large" 
                        placeholder='Company' 
                        value={company} 
                        onChange={(e) => setCompany(e?.target?.value)} 
                    />
                    <Input 
                        size="large"
                        placeholder='status'
                        value={status} 
                        onChange={(e) => setStatus(e?.target?.value)}
                     />
                    <Input 
                        size="large" 
                        placeholder='Job Application Link https:exemplo.com' 
                        value={applicationLink} 
                        onChange={(e) => setApplicationLink(e?.target?.value)}
                    />
                    <NewApplymentAddButton 
                        type="primary" 
                        size={'large'} 
                        onClick={handleNewAppy}
                        disabled={!company?.length || !status?.length || !applicationLink?.length}
                    >
                        <span>Save</span>
                    </NewApplymentAddButton>
                </NewApplymentsFormWrapper>
            </NewApplymentsContainer>
        </>
    )
}

export default NewApplyment