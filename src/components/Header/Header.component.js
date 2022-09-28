import { useNavigate } from "react-router";
import api from "../../services/api";
import {setAccessToken} from "../../services/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentUser} from "../../store/UserData.reducer";
import Button from "../Button/Button.component";

const Header = () => {
  const navigate = useNavigate();
  const { user } =  useSelector((state) => state.userData)
  const dispatch = useDispatch();

  const goToLogInPage = () => navigate({ pathname: '/login' });

  const goToMainPage = () => navigate({ pathname: '/' });

  const logOut = async () => api.logout().then((resp) => {
    dispatch(setCurrentUser(null))
    setAccessToken(null);
  });

  return (
    <nav className='flex justify-between items-center p-2 bg-gray-300'>
      <div className='flex ml-2 cursor-pointer' onClick={goToMainPage}>
        TestApp
      </div>

      {user ? (
        <div className='flex items-center'>
          <div className='font-semibold mx-3'>{user.username}</div>
          <Button onClick={logOut}>Log Out</Button>
        </div>
      ) : (
        <div className='flex items-center'>
          <Button
            onClick={goToLogInPage}
          >
            Log In
          </Button>
        </div>
      )}

    </nav>
  );
}

export default Header;
