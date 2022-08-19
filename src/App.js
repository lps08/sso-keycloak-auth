import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome';
import Public from './PublicPage';
import UserDetails from './UserDetails';
import Manager from './Manager';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <ul>
          <li><Link to="/welcome">Página de boas vindas</Link></li>
          <li><Link to="/public">Página pública</Link></li>
          <li><Link to="/manager">Página do manager</Link></li>
          <li><Link to="/user-details">Detalhes de usuário</Link></li>
        </ul>
        <Route exact path="/welcome" component={Welcome} />
        <Route path="/public" component={Public} />
        <Route path="/manager" component={Manager} />
        <Route path="/user-details" component={UserDetails} />
      </div>
    </BrowserRouter>
  );
}
export default App;