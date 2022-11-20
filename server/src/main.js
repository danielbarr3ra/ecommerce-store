import app from './server.js'

const PORT = 8080;
const server = app.listen(process.env.PORT || PORT, () => {
    console.log(`Server currently listeingint ot port : ${server.address().port}`)
})

server.on('error', error => console.log(`Error in server ${error}`))