import { getAuth } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import {useEffect} from "react";
import { app } from '../firebase/index'

const account = {
  displayName: 'Vaibhav Solanki',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatars/avatar_default.jpg',
};

function Router() {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    console.log(user)
  }, [user]);

}


export default account;
