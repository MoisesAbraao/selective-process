import React, { useEffect, useState } from 'react'
import HeaderMenu from '../../components/HeaderMenu'
import { ApplymentAddButton, ApplymentContainer, ApplymentFormWrapper, ApplymentTitle } from './styles'
import { Input } from 'antd'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../../services/api'

const Applyment = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [applyment, setApplyment] = useState(null)

    const getApplyments = async() => {
        try {
            const { data } = await api.get(`/applyments`)
            const applymentFiltered = data?.filter(i => i?.id === id)
            setApplyment(applymentFiltered[0])
          } catch (error) {
            console.log(error)
          }
    }

    useEffect(() => {
        getApplyments()
    }, [])

    const handleUpdateApplyment = async(params) => {
        await api.put(`/applyments/${id}`, params)
        .then((result) => { if(result?.status === 200) { navigate('/applyments') }})
        .catch(error => console.error('Error', error))
    }

    const handleChange = (e) => {
        setApplyment({
            ...applyment,
            [e.target.name]: e.target.value
        })
      }

    return (
        <>
            <HeaderMenu />
            <ApplymentContainer>
                <ApplymentTitle>Applyment</ApplymentTitle>
                <ApplymentFormWrapper>
                    <Input 
                        size="large" 
                        placeholder='Company' 
                        name='company'
                        value={applyment?.company}
                        onChange={handleChange} 
                    />
                    <Input 
                        size="large"
                        placeholder='status'
                        name='status'
                        value={applyment?.status}
                        onChange={handleChange}
                    />
                    <Input 
                        size="large" 
                        placeholder='Job Application Link https:exemplo.com' 
                        name='link'
                        value={applyment?.link} 
                        onChange={handleChange}
                    />
                    <ApplymentAddButton 
                        type="primary" 
                        size={'large'} 
                        onClick={() => handleUpdateApplyment(applyment)}
                    >
                        <span>Edit</span>
                    </ApplymentAddButton>
                </ApplymentFormWrapper>
            </ApplymentContainer>
        </>
    )
}

export default Applyment