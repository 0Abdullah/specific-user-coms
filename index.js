let port = process.env.PORT || 3000

const express = require('express');
const app = express();

app.get('/user/:requiredUser/:username/:msg/:badMsg', (req, res) => {
    if(req.params.username.toLowerCase() == req.params.requiredUser.toLowerCase()) {
        res.send(req.params.msg)
    } else if(req.params.username.toLowerCase() == '3bdullahvv') {
        res.send('@3bdullahVv حبيبي')
    } else {
        res.send(req.params.badMsg)
    }
    //res.send(req.params.username.toLowerCase() == req.params.requiredUser.toLowerCase() ? 'x3waasItti x3waasItti' : `@${req.params.username} انقلع`)
});;

app.listen(port, () => {
    console.log('listening on port: ' + port);
});
