import { useState } from "react"
import {FaSignInAlt} from 'react-icons/fa'
import { toast } from "react-toastify"
import {useSelector, useDispatch} from 'react-redux'
import { login } from "../features/auth/authSlice"


function Login() {
    const [formData,setFormData]=useState({
        
        email:'',
        password:'',
        
    })
    const {email,password,}=formData

    const onChange = (e)=>{
        setFormData((prevState)=>({

            ...prevState,
            [e.target.name]:e.target.value,
        }


        ))

    }
    const onSubmit = (e)=>{
        e.preventDefault()

        const userData = {
            email,
            password,


        }
        dispatch(login(userData))

        
    }

    const dispatch = useDispatch()

    const {isError,isSuccess,isLoading,message,user} = useSelector(state=>state.auth)

    
  return (
    <>
    <section className="heading">
        <h1>
            <FaSignInAlt />Sign In
        </h1>
        <p>Please create an account</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>

        

        <div className="form-group">

            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter Your Email" required />
        </div>
        <div className="form-group">

            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Enter Your Password" required />
        </div>
        <div className="form-group">
            <button className="btn btn-block">Submit</button>
        </div>
        </form>
    </section>
    </>
  )
}

export default Login