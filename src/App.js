import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import {createContext, useState} from "react";
import { Header } from "./components/Header";
import { LogInPage } from "./containers/LogInPage";
import { MainPage } from "./containers/MainPage";

export const AppContext = createContext({});

const App = () => {
  const [currentUser, setCurrentUser, accessToken, setAccessToken] = useState(null);

  return (
    <BrowserRouter>
      <AppContext.Provider value={{currentUser, setCurrentUser}}>
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
      </AppContext.Provider>
    </BrowserRouter>
  );
}

export default App;
