import { Link, Outlet } from "react-router-dom"

function Navigation() {
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
          <Link to={'/authentication'} className="mx-5 btn btn-ghost">
            <h4>SIGN IN</h4>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">View cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default Navigation
