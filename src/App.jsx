import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { setCurrentUser } from './store/user/user.reducer'
import { authStateChangedListener } from './utils/firebase'
import Home from './routes/home/home.component'
import Navigation from './routes/navigation/Navigation.component'
import Authentication from './routes/authentication/authentication.component'
import Shop from './routes/shop/Shop.component'
import Checkout from './routes/checkout/Checkout.component'
import './App.css'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = authStateChangedListener(user => {
      dispatch(setCurrentUser(user));
    })

    return unsubscribe;
  },[])

  return(
    <>
      <Routes>
        <Route path='/' element={<Navigation/>}>
          <Route index element={<Home/>}/>
          <Route path='shop/*' element={<Shop/>}/>
          <Route path='authentication' element={<Authentication/>}/>
          <Route path='checkout' element={<Checkout/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
