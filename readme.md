## Projet Node JS

### Versions

node 14.4.0<br />
npm 7.7.6

### Librairies

express<br />
lowdb<br />
jsonschema<br />
uid<br />
bcrypt<br />
jsonwebtoken<br />
dotenv

### Run

```
npm install
node index.js
```

### JSON Objects Structures

**Tasks :**<br />

```
{
    "name": "Task 3",
    "title": "Un TP",
    "dateBegin": "01/04/2021",
    "dateEnd": "30/04/2021",
    "username": "Bob",
    "status": "processing"
}
```

**Users :**<br />

```
{
    "username": "Bob",
    "password": "hello"
}
```

### API Endpoints

##### /users/login - POST

Connexion à l'API : renvoie un token JWT

##### /users/register - POST

Création d'un nouvel utilisateur.

##### /tasks - GET

Affichage des tâches.<br />
Authentification nécessaire.

##### /tasks/:id - GET

Affichage d'une tâche.<br />
Authentification nécessaire.

##### /tasks - POST

Création d'une tâche.<br />
Authentification nécessaire.

##### /tasks/:id - PUT

Modification d'une tâche.<br />
Authentification nécessaire.

##### /tasks/:id - DELETE

Suppression d'une tâche.<br />
Authentification nécessaire.