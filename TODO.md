# Tasks

## easy wins
- add server endpoints to app.module.ts

## protocol
- configuration file should have a list of supported actions for this node.
- these endpoints should derive from the configuration with an equivalent funciton to getConfiguredActions()
- breakout into unique endpoints
- create public private key authentication mechanism for all endpoints in the /protocol folder
- create tests for all protocol / server-to-server methods in the /protocol folder
- create decentralized registry 
- create registration process and methods. Discuss features and tradeoffs:
    - permissionlessness
    - security
    - interoperability
    - user portability
    - create registration readme
    - write generateKeys for public private key authentication method
    - write package.json script for "generate-keys": "node scripts/generateKeys.js" 
- have chatgpt write a seed.ts file to seed the prisma database with mock data:
    - make sure schema is intuitive
    - make sure data relations are intutive
- create notion of terms for cancellations, refunds, returns, replacements and other rules
    - define how these rules are configured
    - define how these rules are represented in the database
    - define how these rules are displayed to users
- break out into microservices for CSN, BSN, SSN
- refactor protocol endpoints to not be so redundant
- create universally known codes for:
    - waypoints
    - languages
    - payments
    - industries
    - order status
- create methods or services that create the Condition that is sent over the protocol based on .env + configuration 
- write logic to handle server to server requests
- add logic for all json values
- create a client side sdk for the node
- define standard format for callback urls
- create server to server invoicing mechanism
- create concept of search middleware, similar to google ads search, but for nodes to broadcast searches. 

## admin
- adopt Roles for api access for each of buyer, seller, courier, admin
