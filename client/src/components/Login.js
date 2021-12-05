import React from 'react'
import {useState} from 'react'

function Login({setLoggedIn, setCurrentUser}) {
    
    const [input , setInput] = useState({
        user_name: "",
        password: "",
        })


        function formFill(e){
            setInput({...input, [e.target.name]: e.target.value})
            }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/login", {
            method : 'POST',
            headers :{"Content-Type":"application/json"},
            body: JSON.stringify(input)
        })
        .then(res=>res.json())
        .then(currentUser => {
            setCurrentUser(currentUser)
            setLoggedIn(true)
            console.log(currentUser.id)
          }
        )}


    return (
        <div className="Login">
             <form className="Form" onSubmit={handleSubmit}>
            <input
                class="form-control"
                type='text'
                name='user_name'
                placeholder='Input Username'
                onChange={formFill}/>
            <input
                class="form-control"
                type='text'
                name='password'
                placeholder='Input Password'
                onChange={formFill}/>
            <button type='submit' class="btn btn-primary">Sign In</button>
            </form>
             {/* <Link exact to="/SignUP"> */}
            <button class="btn btn-primary">Sign Up</button>
            {/* </Link> */}

        </div>
    )
}

export default Login