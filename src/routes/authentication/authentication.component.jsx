import { useSelector } from "react-redux"
import { selectCurrentUser } from "../../store/user/user.selector"
import SignUpForm from "../../components/sign-up form/SignUpForm.component"
import SignIn from "../../components/sign-in form/SignIn.component"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const user = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  useEffect(() => {
    if(!user) return; 
    navigate('/');
  },[user])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16 flex-grow mt-9 '>
      <SignIn/>
      <SignUpForm/>
    </div>
  )
}

export default Authentication
