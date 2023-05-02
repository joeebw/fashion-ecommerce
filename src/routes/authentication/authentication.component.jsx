import SignUpForm from "../../components/sign-up form/SignUpForm.component"
import SignIn from "../../components/sign-in form/SignIn.component"

function Authentication() {
  return (
    <div className='grid grid-cols-2 gap-32 flex-grow mt-9 '>
      <SignIn/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication
