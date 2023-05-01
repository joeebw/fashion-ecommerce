import { useContext } from "react";
import { Link, Outlet } from "react-router-dom"
import { signOutUser } from "../../utils/firebase"
import { UserContext } from "../../context/user.context";
import CardIcon from "../../components/card-icon/CardIcon.component";
import CardDropdown from "../../components/card-dropdown/CardDropdown.component";

function Navigation() {
  const {currentUser} = useContext(UserContext);

  function handleSignOut() {
    signOutUser();
  }

  return (
    <>
      <div className="navbar bg-[#f5f5f5] px-4">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-2xl">MOONLIT WOLVES</Link>
        </div>
        <div className="flex-none mr-8">
          <Link to={'/shop'} className="btn btn-ghost">
            <h4>SHOP</h4>
          </Link>
          {currentUser ? 
            <h4 className="mx-5 btn btn-ghost" onClick={handleSignOut}>SIGN OUT</h4>
            :
            <Link to={'/authentication'} className="mx-5 btn btn-ghost">
              <h4>SIGN IN</h4>
            </Link>
          }
          <CardIcon/>
        </div>
        <CardDropdown/>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation
