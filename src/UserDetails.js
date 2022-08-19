import useKeyCloak from './UseKeyCloak';
import UserInfo from './UserInfo';
import Logout from './Logout';

export default function UserDetails() {
  const keycloak = useKeyCloak();

  return (

    <div>
      {keycloak && (keycloak.hasResourceRole("manager") || keycloak.hasResourceRole("user")) && (<div>
        <div>loggin com sucesso</div>
        <div> <UserInfo keycloak={keycloak} /></div>
        <div><Logout keycloak={keycloak} /></div>
      </div>
      )}
      {keycloak && !keycloak.authenticated &&
        (<div><a onClick={() => keycloak.login()}>Login</a></div>)
      }
    </div>

  )
}