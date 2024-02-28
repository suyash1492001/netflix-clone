import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import BackgroundImg from '../components/BackgroundImg';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"
import {firebaseAuth} from "../utils/firebase-config"

function Signup() {
  
    const [showpassword, setShowPassword] = useState(false);
    const [formValues, setformValues] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const handleSignIn  =async()=>{

        console.log(formValues);
        try{
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password);
        }catch(error){
            console.log(error);
        }
    };
          
    useEffect(() => {
        onAuthStateChanged(firebaseAuth,(currentUser)=>{
            if(currentUser) navigate("/")
        })
      });

    


  return (
    <Container showpassword = {showpassword} >
        <BackgroundImg/>
        <div className="content">
        <Header/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>Ready to watch? Enter your email tp create or  restart membership</h6>
            </div>
            <div className="form">
                <input type="email" placeholder='Email Address' onChange={(e)=> setformValues({
                    ...formValues,[e.target.name]:e.target.value,
                })} name='email' value={formValues.email} />
                {showpassword && (
                   <input type="password" placeholder='Password' onChange={(e)=>setformValues({
                    ...formValues,[e.target.name]:e.target.value,
                })} name='password' value={formValues.password} />
                )}
                {!showpassword && (
                 <button onClick={()=>setShowPassword(true)}>Get Started</button>
                )}
            </div>
            {showpassword && <button  onClick={handleSignIn}>Sign Up</button>}
        </div>
        </div>
    </Container>
  )
}
const Container = styled.div`
position: relative;
.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-row: 15vh 85vh;
    .body {
        gap: 1rem;
        .text {
          gap: 1rem;
          text-align: center;
          font-size: 2rem;
          h1 {
            padding: 0 25rem;
          }
        }
        .form {
          display: grid;
          grid-template-columns: ${({ showpassword }) =>
            showpassword ? "1fr 1fr" : "2fr 1fr"};
          width: 60%;
          input {
            color: black;
            border: none;
            padding: 1.5rem;
            font-size: 1.2rem;
            border: 1px solid black;
            &:focus {
              outline: none;
            }
          }
          button {
            padding: 0.5rem 1rem;
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
        button {
          padding: 0.5rem 1rem;
          background-color: #e50914;
          border: none;
          cursor: pointer;
          color: white;
          border-radius: 0.2rem;
          font-weight: bolder;
          font-size: 1.05rem;
        }
      }
    }
}
`;
export default Signup