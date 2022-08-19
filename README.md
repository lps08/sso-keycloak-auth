
## Installation 

Install and run the project.

Clone the projet:

```bash 
  git clone https://github.com/lps08/sso-keycloak-auth.git
  cd sso-keycloak-auth
```

### Keycloak server

```bash 
  docker-compose up -d
```    
Import the configuration:

Open the browser and go to localhost:8080
Click on "Administration console". Log in with user admin and password admin.
(Don not use this in production! :D)

Now it is time to add a Realm for our application.

From "Administration console" page:
- On the left side menu click on master. 
- A drop-down menu is open, then click on "Add realm".
- Import the configuration. Click on "select file" and pick, from the project root folder, the file named realm-keycloak-tutorial.json.
Kyelcoak will import the setting for our project.

### Users and roles

Now we need to add two users to our application:
- user@acme.com
- manager@acme.com

To do that:
- On the left side, select "Users".
- Click on "Add user", fill down the form and click save.
- Now set the password up. Click on the menu above "Credentials."
- Set the password and confirm it.
- Set temporary to off. This operation will not ask you to change the password. Click on "set password".

Now you need to assign a role to each user:
- Assign the role "user" to user@acme.com 
- Assign the role "manager" to manager@acme.com.


## Acknowledgements

 - [keycloak](https://www.keycloak.org/)
 - [KeyCloak: Creating a realm and a user](https://www.keycloak.org/docs/latest/getting_started/index.html#creating-a-realm-and-a-user)
 - [KeyCloak: Javascript adapter](https://www.keycloak.org/docs/latest/securing_apps/#_javascript_adapter)
 - [Keycloak clients and roles](https://tomas-pinto.medium.com/keycloak-clients-and-roles-a-tutorial-b334147f1dbd)
