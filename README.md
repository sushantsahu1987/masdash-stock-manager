# database-learnings

Learning databases the cool way !

### Projects within
    
    1. mongodb-tutorial
    2. redis-tutorial
    3. router-tutorial
    4. graphql-tutorial
    5. jsonserver-graphql-tutorial

### Packages

    1. ...

### Notes
    
    How to make http calls over graphql server:
    
    1. Get Request:
        http://localhost:3000/graphql?query={user(id:%2223%22){name}}
        
    2. Post Request:
        http://localhost:3000/graphql
        { "query": "mutation  ($id: String!, $name: String!) { addUser(id: $id, name: $name) { id, name } } ", 
        "variables": { "id": "1", "name":"sushant" } }

    
    GraphQL 
    
    1. Format:
        query [name]{
            [user](id:1) {
                attr1,
                attr2,
            }
        }
        
    2. Multiple Query:
        {
            result1: [user](id:1) {
                attr1,
                attr2,
            }
            result1: [user](id:1) {
                attr1,
                attr2,
            }
        }
        
    3. Query Fragment:
        {
            result1: [user](id:1) {
                ...fragment_name
            }
            result1: [user](id:1) {
                ...fragment_name
            }
        }
        
        fragment [fragment_name] on [Model] {
            attr1,
            attr2,
        }
        
    4. Mutation:
        mutation {
            [fn-name](args) {
                id,
                name
            }
        }        

### Help

    1. https://github.com/bradtraversy/restify_customer_api 
    2. https://stackoverflow.com/questions/39166700/the-this-object-is-empty-in-presave
    3. https://gist.github.com/coolaj86/f6f36efce2821dfb046d
    4. https://www.toptal.com/nodejs/secure-rest-api-in-nodejs
    5. https://medium.com/@brandonstilson/lets-encrypt-files-with-node-85037bea8c0e
    6. https://graphql.github.io/learn/serving-over-http/

### Links
    
    1. Redis
    https://redislabs.com/
    https://www.npmjs.com/package/redis
    
    2. Lowdb
    https://www.npmjs.com/package/lowdb
    
    
