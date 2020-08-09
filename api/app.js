const express = require("express");
const app = express();
const port = 5000;
const routes = require('./routes');
const cors = require('cors')

// Apply CORS logic before routing
app.use(cors());
//  Connect all our routes to our application
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});
