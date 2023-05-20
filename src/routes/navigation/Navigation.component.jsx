import { Link, Outlet } from "react-router-dom"
import {useSelector} from 'react-redux'
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutUser } from "../../utils/firebase"
import CartIcon from "../../components/cart-icon/CartIcon.component";
import CartDropdown from "../../components/cart-dropdown/CartDropdown.component";

function Navigation() {
  const currentUser = useSelector(selectCurrentUser); 
  const isCartOpen = useSelector(selectIsCartOpen);

  function handleSignOut() {
    signOutUser();
  }

  return (
    <>
      <div className="relative navbar bg-[#f5f5f5] px-4">
        <div className="flex-1">
          <Link to={'/'} className="btn btn-ghost normal-case text-sm sm:text-4xl">MOONLIT</Link>
        </div>
        <div className="flex-none sm:mr-8">
          <Link to={'/shop'} className="btn btn-ghost">
            <h4 className="text-xs sm:text-sm">SHOP</h4>
          </Link>
          {currentUser ? 
            <h4 className="sm:mx-5 btn btn-ghost" onClick={handleSignOut}>SIGN OUT</h4>
            :
            <Link to={'/authentication'} className="sm:mx-5 btn btn-ghost">
              <h4 className="text-xs sm:text-sm">SIGN IN</h4>
            </Link>
          }
          <CartIcon/>
        </div>
        {isCartOpen && <CartDropdown/>}
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation
