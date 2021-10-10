> Please read the PLEASE_READ_FIRST.md first.

> Please document your code & design decisions here.

# Design

## Coding
- Adjust project to support ECMAscript modules for convenient module import & export development
- Add essential start up code and libraries for serving in local
- Serve in localhost to ensure local development and hosting is ready to go
- Add mocks for apollo server, do this ahead can enable frontend development team to integrate with backend api in parallel without waiting.
- Install ngrok npm package at local globally and host HTTPS for either local backend develop or remote access from frontend integration through apollo studio explorer
```bash
ngrok http 4000
```
- Test simpleRETS api through postman to verify request and response before layering graphql on the api
- import apollo rest library and create simpleRETS REST resource api class for rest api data retrieving
- Set up essential Jest config if necessary and run test code against rest api data retrieving
- Map rest api returned json object to the predefined graphql model, if not 100% mapped between those 2 models, I'll import lodash to pick and map.
- Run Jest to test mapping results
- Add middleware or utilize apollo context for client authentication using basic http auth
- end2end test through apollo studio explorer

## Deployment Considerations
- put rest api in configuration file for set up values in different locations
- utilize dotenv to store environment variables

## Security Considerations
- put rest api access token and graphql client access token in .env file, but never commit into repo

## Performance Considerations
- Assume the properties data is not updated quite often and it is okay to cache for 1 hour, so I will put cache control of 60 minutes for the client
