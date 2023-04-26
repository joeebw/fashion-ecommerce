import { handleSignInWithGoogle } from "../../utils/firebase"

function GoogleLoginButton() {
  
  function buttonClickHandler() {
    handleSignInWithGoogle();
  }

  return (
    <button 
      className="btn btn-info w-40 text-white hover:text-black"
      type="button"
      onClick={buttonClickHandler}
    >
      Login with Google
    </button>
  )
}

export default GoogleLoginButton
