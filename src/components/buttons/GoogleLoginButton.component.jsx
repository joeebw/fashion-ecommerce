import { handleSignInWithGoogle } from "../../utils/firebase"
import Button from "./Button.component";

function GoogleLoginButton() {
  
  function buttonClickHandler() {
    handleSignInWithGoogle();
  }

  return (
    <Button 
      type="button"
      onClick={buttonClickHandler}
      selectButton='google'
      className='text-xs'
    >
      Sign In with Google
    </Button>
  )
}

export default GoogleLoginButton
