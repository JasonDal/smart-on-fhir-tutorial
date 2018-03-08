let express = require('express');
let app = express();
let port = 80;
app.use(express.static(__dirname));


app.get('/index.html', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/launch.html', function (req, res) {
    res.sendFile(__dirname + '/launch.html');
});

app.use(function (req, res, next) {
    let error = {code: '404', message: 'Page not found', url: req.url};
    res.status(404).send(error);
});

app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
