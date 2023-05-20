import { useState } from "react";
import { createAuthWithEmailAndPassword } from "../../utils/firebase";
import InputForm from "../input form/InputForm.component";
import Button from "../buttons/Button.component";

const defaultFormField = {
  displayName: '',
  email: '',
  password: '',
  password2: ''
}

function SignUpForm() {
  const [formField, setFormField] = useState(defaultFormField);
  const {displayName, email, password, password2} = formField;

  function resetFormField() {
    setFormField(defaultFormField);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Check if the two passwords are correct
    if (password !== password2) return alert('Passwords do not match')
    // Run function to create auth with email and password
    const user = await createAuthWithEmailAndPassword(email, password, displayName);
    // Reset the form form field
    if (!user) return;
    resetFormField();
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormField({...formField, [name]:value})
  }

  return (
    <div className='flex self-start justify-center md:justify-start'>
      <div className="card mx-4 w-full sm:w-[450px] border-2 border-gray-700">
        <div className="card-body">
          <h3 className="text-4xl font-semibold text-center my-4">Sign Up</h3>
          
          <form onSubmit={handleSubmit}>
            <InputForm 
              type="text" 
              label='Display Name'
              placeholder="Type here" 
              name='displayName'
              value={displayName}
              onChange={handleChange}
              required
            />
        
            <InputForm 
              type="email" 
              label='Email'
              placeholder="Type here" 
              name='email'
              value={email}
              onChange={handleChange}
              required
            />
            
            <InputForm 
              type="password" 
              label='Password'
              placeholder="Type here" 
              name='password'
              value={password}
              onChange={handleChange}
              required
            />

            <InputForm 
              type="password" 
              label='Confirm Password'
              placeholder="Type here" 
              name='password2'
              value={password2}
              onChange={handleChange}
              required
            />

            <div className="ml-1">
              <Button type="submit" selectButton='normal'>Sign Up</Button>
            </div>

          </form>          
        </div>
      </div>
    </div>
  )
}

export default SignUpForm
