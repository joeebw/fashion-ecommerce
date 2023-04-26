import { useState } from "react";
import GoogleLoginButton from "../buttons/GoogleLoginButton.component"
import { createAuthWithEmailAndPassword } from "../../utils/firebase";

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  password2: ''
}

function SignInForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const {displayName, email, password, password2} = formField;

  function resetFormField() {
    setFormField(defaultFormField);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Check if the two passwords are correct
    if (password !== password2) return alert('Passwords do not match')
    // Run function to create auth with email and password
    createAuthWithEmailAndPassword(email, password, displayName);
    resetFormField();
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormField({...formField, [name]:value})
  }

  return (
    <div className='flex items-center justify-center'>
      <div className="card mx-4 w-[450px] border-2 border-gray-700">
        <div className="card-body">
          <h3 className="text-4xl font-semibold text-center my-4">Sign Up</h3>
          
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="displayName" className="my-1 font-medium">Display Name</label>
              <input 
                type="text" 
                placeholder="Type here" 
                className="input input-sm w-full border-2 border-black my-3" 
                id="displayName"
                name='displayName'
                value={displayName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-3">
              <label htmlFor="email" className="my-1 font-medium">Email</label>
              <input 
                type="email" 
                placeholder="Type here" 
                className="input input-sm w-full border-2 border-black my-3" 
                id="email"
                name='email'
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-3">
              <label htmlFor="Password" className="my-1 font-medium">Password</label>
              <input 
                type="password" 
                placeholder="Type here" 
                className="input input-sm w-full border-2 border-black my-3" 
                id="Password"
                name='password'
                value={password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="my-3">
              <label htmlFor="password2" className="my-1 font-medium">Repeat your password</label>
              <input 
                type="password" 
                placeholder="Type here" 
                className="input input-sm w-full border-2 border-black my-3" 
                id="password2"
                name='password2'
                value={password2}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex justify-center gap-20">
              <button type="submit" className="btn btn-active">Sign Up</button>
              <GoogleLoginButton/>
            </div>

          </form>          
        </div>
      </div>
    </div>
  )
}

export default SignInForm
