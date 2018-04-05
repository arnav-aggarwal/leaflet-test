const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.static(__dirname));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
