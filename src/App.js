import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from "./components/Header";
import { LogInPage } from "./containers/LogInPage";
import { MainPage } from "./containers/MainPage";
import {useEffect} from "react";
import {getAccessToken} from "./services/localStorage";
import api from "./services/api";
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./store/UserData.reducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = getAccessToken()
    if (accessToken) {
      try {
        api.getUser().then(resp => {
          dispatch(setCurrentUser(resp.data))
        });

      } catch (err) {
        console.log(err)
      }
    }

  }, [])

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path='/'
            exact
            element={<MainPage/>}
          />
          <Route
            path='/login'
            exact
            element={<LogInPage/>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
