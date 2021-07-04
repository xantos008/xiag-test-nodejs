const express = require("express");

const handle = require("./handlers");

const app = express();
const port = 3000; // Default port

app.get('/', (req, res) => res.json({hello: 'world'}));

app.use(handle.notFound);
app.use(handle.errors);

app.listen(port, console.log(`App's server started on port ${port}`));