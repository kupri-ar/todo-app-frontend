import { useContext } from "react";
import { AppContext } from "../../App";
import { useNavigate } from "react-router";
import api from "../../services/api";
import {setAccessToken} from "../../services/localStorage";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser, setCurrentUser } = useContext(AppContext);

  const goToLogInPage = () => navigate({ pathname: '/login' });

  const goToMainPage = () => navigate({ pathname: '/' });

  const logOut = async () => api.logout().then((resp) => {
    // setCurrentUser(resp.data.user);
    setCurrentUser(null);
    setAccessToken(null);
  });

  return (
    <nav className='flex justify-between items-center p-2 bg-gray-300'>
      <div className='flex ml-2 cursor-pointer' onClick={goToMainPage}>
        TestApp
      </div>

      {currentUser ? (
        <div className='flex items-center'>
          <div className='font-semibold mx-3'>{currentUser.username}</div>
          <button className='bg-blue-400 py-1 px-3 ml-1 rounded-md' onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div className='flex items-center'>
          <button
            onClick={goToLogInPage}
            className='bg-blue-400 py-1 px-3 ml-1 rounded-md'
          >
            Log In
          </button>
        </div>
      )}

    </nav>
  );
}

export default Header;
