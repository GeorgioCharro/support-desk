import { useState } from "react"
import {FaUser} from 'react-icons/fa'
import { toast } from "react-toastify"
import {useSelector, useDispatch} from 'react-redux'
import { register } from "../features/auth/authSlice"


function Register() {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })
    const {name,email,password,password2}=formData
    const dispatch = useDispatch()

    const {isError,isSuccess,isLoading,message,user} = useSelector(state=>state.auth)
    const onChange = (e)=>{
        setFormData((prevState)=>({

            ...prevState,
            [e.target.name]:e.target.value,
        }


        ))

    }
    const onSubmit = (e)=>{
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords does not match')
        }

        if(password === password2){

            const userData = {
                name,
                email,
                password


            }
            dispatch(register(userData))
        }
    }
  return (
    <>
    <section className="heading">
        <h1>
            <FaUser />Register
        </h1>
        <p>Please create an account</p>
    </section>

    <section className="form">
        <form onSubmit={onSubmit}>

        <div className="form-group">

            <input type="text" className="form-control" id="name" name="name" value={name} onChange={onChange} placeholder="Enter Your Name" required />
        </div>

        <div className="form-group">

            <input type="email" className="form-control" id="email" name="email" value={email} onChange={onChange} placeholder="Enter Your Email" required />
        </div>
        <div className="form-group">

            <input type="password" className="form-control" id="password" name="password" value={password} onChange={onChange} placeholder="Enter Your Password" required />
        </div>
        <div className="form-group">

            <input type="password" className="form-control" id="password2" name="password2" value={password2} onChange={onChange} placeholder="Confirm Your Password" required />
        </div>
        <div className="form-group">
            <button className="btn btn-block">Submit</button>
        </div>
        </form>
    </section>
    </>
  )
}

export default Register