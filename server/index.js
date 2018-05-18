const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
const PORT = 3000 // process.env.PORT || 3000 -- use port in env file, or 3000

app.use(bodyParser.json())
//middleware - every package goes thru middleware, before sending it back, dont have to chunk it
//this does it for you
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static(path.join(__dirname, '../static')))
//serve static files in static folder

app.listen(PORT, (err) => {
  if (err) {
      console.log('oops')
  }
  console.log('success on ', PORT)
})


//in package.json -  "start": "nodemon server/index.js" - tells nodemon to watch index.js
// "build": "webpack - w" in package.json - it looks for webpack config.js, where we specify 
//in point and out point, it compiles everything for you

//make webpack watch index.jsx, the parent file, index.jsx is where everything starts to render,
//so making webpack watch it compiles everything

//axios - like ajax but easier
//axios.METHOD('ENDPOINT', OPTIONS)

//props state CWM render CDM - react life cycle hooks

//axios for ajax - good docs

//other stuff

//graveyard.js -- things you want to ignore but will maybe use later

//git rm -rf --cached

//npm run build