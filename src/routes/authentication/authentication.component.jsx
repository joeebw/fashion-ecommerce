import SignInForm from "../../components/sign-in form/SignInForm.component"


function Authentication() {
  return (
    <div className='grid grid-cols-2 flex-grow '>
      <SignInForm/>
      <div className='flex items-center justify-center'>
        <h1>Sign In page</h1>
      </div>
    </div>
  )
}

export default Authentication
