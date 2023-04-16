const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static("public"));

// use res.render to load up an ejs view file
const routes = require('./routes/index.routes');
app.use(routes);

app.listen(
  PORT, () => {
    console.info(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    console.log(`URL: http://localhost:${PORT}/login`)
  }
);



