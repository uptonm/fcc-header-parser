const express = require('express');
// const subdomain = require('express-subdomain');
const requestIP = require('request-ip');
const morgan = require('morgan');
// const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.set('trust proxy', 'loopback'); // specify a single subnet
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use(subdomain('api', app));
app.use(morgan('dev'));
app.use(cors());

app.get('/api/whoami', (req, res) => {
  res.status(200).send({
    ipaddress: req.headers['x-forwarded-for'],
    language: req.headers['accept-language'],
    software: req.headers['user-agent']
  });
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/client/build/index.html'));
// });

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`);
});
