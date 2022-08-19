import React from 'react';
import { withRouter } from 'react-router-dom'

function Logout(props) {

  function logout() {
    props.history.push('/');
    props.keycloak.logout();
  }

  return (
    <button onClick={() => logout()}>
      Sair
    </button>
  );
}

export default withRouter(Logout);