import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HeaderContainer, HeaderContent } from './styles'
import { Button } from 'antd'

const HeaderMenu = () => {
  const navigate = useNavigate()
  return (
    <HeaderContainer>
      <HeaderContent>
        <Button type='link' onClick={() => navigate('/')}><h3>Selective Process</h3></Button>
        <Button type='link' onClick={() => navigate('/applyments')}><h3>Applyments jobs</h3></Button>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default HeaderMenu