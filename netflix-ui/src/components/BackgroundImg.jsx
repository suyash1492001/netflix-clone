import React from 'react'
import Background from "../assets/login.jpg"
import styled from 'styled-components'

function BackgroundImg() {
  return (
    <Conatiner>
        <img src={Background} alt="background" />
    </Conatiner>
   
  )
}
const Conatiner = styled.div`
height: 100vh;
width: 100vw;
img{
    height: 100vh;
    width: 100vw;
}`;
export default BackgroundImg