/* AKA Entry point */
// Runs on port 3000 by default (both react and json)

// 1.Import json-server library in index.js using the keyword 'require'
const jsonServer =  require('json-server')

// 2.Create server using this (json-server) library
const videoPlayerServer = jsonServer.create()

// 3.Create a path to db.json
const router = jsonServer.router('db.json')

// 4.Middleware to convert
const middleware =  jsonServer.defaults()

// 5.Connect them
videoPlayerServer.use(middleware)
videoPlayerServer.use(router)

// 6.Set up port for server (to avoid clash as react too runs on port 3000)
const port = 7000 || process.env.PORT   // Useful while hosting, to avoid class between other clients as they may have the same port as yours sometimes

// 7.Monitor 7000
videoPlayerServer.listen(port,()=>{
    console.log(`videoPlayerServer is listening to ${port} and waiting for the request`);
})