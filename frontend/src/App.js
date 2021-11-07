import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SingleBusinessPage from "./components/SingleBusinessPage";
import AllBusiness from "./components/AllBusiness";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  // isLoaded - don't want to render routes unless user logged in

  // use restore user thunk action after App component's first render
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);



  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <button>Demo</button> */}
      {isLoaded && (
        <Switch>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route path='/business/:businessId'>
            <SingleBusinessPage />
          </Route>
          <Route path='/business'>
            <AllBusiness />
          </Route>
          <Route>
            Page Not Found
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
