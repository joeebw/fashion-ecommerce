import { useState } from "react";
import GoogleLoginButton from "../buttons/GoogleLoginButton.component"
import InputForm from "../input form/InputForm.component";
import Button from "../buttons/Button.component";
import { handleLoginSubmit } from "../../utils/firebase";

const defaultFormField = {
  email: '',
  password: ''
}


function SignIn() {
  const [formField, setFormField] = useState(defaultFormField);
  const {email, password} = formField;

  function resetFormField() {
    setFormField(defaultFormField);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // Run the function to handle email and password login
    const user = await handleLoginSubmit(email, password);
    // If there is an error don't reset the form field
    if (!user) return;
    resetFormField();
  }

  function handleChange(event) {
    const {name, value} = event.target;
    setFormField({...formField, [name]:value})
  }

  return (
    <div className='flex self-start justify-end'>
      <div className="card mx-4 w-[450px] border-2 border-gray-700">
        <div className="card-body">
          <h3 className="text-4xl font-semibold text-center my-4">Sign In</h3>
          
          <form onSubmit={handleSubmit}>
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

            <div className="flex justify-center gap-10">
              <Button type="submit" selectButton='normal'>Sign In</Button>
              <GoogleLoginButton/>
            </div>

          </form>          
        </div>
      </div>
    </div>
  )
}

export default SignIn
