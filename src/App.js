import React from 'react';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Home from './components/Home';
// import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <div className="container mx-auto my-4 w-75">
      {/* <GlobalProvider> */}
        <BrowserRouter>
          <NavLink to="/" className="text-decoration-none">
            <h1 className="border-bottom pb-3 text-black text-center">🚀 CRUD Application</h1>
          </NavLink>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/add" component={AddUser} />
            <Route exact path="/edit/:id" component={EditUser} />
          </Switch>
        </BrowserRouter>
      {/* </GlobalProvider> */}
    </div>
  );
}

export default App;
