import React from 'react'
import useKeyCloak from './UseKeyCloak';

function Manager() {
  const keycloak = useKeyCloak();

  return (
    <div>
      {keycloak && keycloak.hasResourceRole("manager") && (
        <div>
          <div>
            <table>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
              </tr>
              <tr>
                <td>juju</td>
                <td>do pix</td>
              </tr>
              <tr>
                <td>meclanche</td>
                <td>cabrom</td>
              </tr>
            </table>
          </div>

        </div>)
      }
      {(!keycloak || !keycloak.hasResourceRole("manager")) && <div>Acesso não permitido. Você não tem acesso à essa página.</div>}
    </div>
  )
}
export default Manager