let port = process.env.PORT || 3000

const express = require('express');
const app = express();

app.get('/user/:requiredUser/:username', (req, res) => {
    res.send(req.params.username.toLowerCase() == req.params.requiredUser.toLowerCase() ? 'x3waasItti x3waasItti' : `@${req.params.username} انقلع`)
});;

app.listen(port, () => {
    console.log('listening on port: ' + port);
});
