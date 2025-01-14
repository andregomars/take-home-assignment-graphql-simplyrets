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
- Map rest api returned json object to the predefined graphql model, ~~if not 100% mapped between those 2 models, I'll import lodash to pick and map.~~ The rest response data model and the predefined model is 100% mapped, so there is no need to introduce extra mapping mechanism, thus no need for the next step.
- ~~Run Jest to test mapping results~~
- Add resolver to verify graphql output in apollo studio expolrer
- Add client cache control in rest api request through fetch api parameters 
- Add middleware or utilize apollo context for client authentication using basic http auth
- end2end test through apollo studio explorer

## Deployment Considerations
- put rest api in configuration file for set up values in different locations
- utilize dotenv to store environment variables

## Security Considerations
- put rest api access token and graphql client access token in .env file, but never commit into repo
- add apollo server plugins for each request to overwrite http status to 401 once the request is declined due to authentication failure, prevent simply return 500 server failure
- hide content for unauthenticated request too, in case the authentication failure not throwing as exception in each request.

## Performance Considerations
- Assume the properties data is not updated quite often and it is okay to cache for 1 hour, so I will put cache control of 60 minutes when retrieving simpleRESTS api data 
