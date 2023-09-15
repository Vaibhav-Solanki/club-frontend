import LoginPage from './pages/LoginPage';

export default function AuthProvider (routes,isLoggedIn){
  return routes.map(route=>{
    route.element = route.isProtected && !isLoggedIn ? <LoginPage /> : route.element
    return route
  }  )
};
