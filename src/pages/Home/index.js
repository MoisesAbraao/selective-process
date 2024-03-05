import React from 'react'
import { HomeTitleContainer, HomeContent } from './styles'
import Sitting from '../../assets/images/Sitting.svg'
import HeaderMenu from '../../components/HeaderMenu'

const Home = () => {
  
  return (
    <>
      <HeaderMenu />
      <HomeContent>
        <HomeTitleContainer>
          <span>The best way to <strong>follow</strong></span><br/> 
          <span>your <strong>job</strong> applications</span>
        </HomeTitleContainer>
        <div>
          <img src={Sitting} alt={'HomeImg'} />
        </div>
      </HomeContent>
    </>
  )
}

export default Home