const mongoose = require('mongoose');
const Classes = require('./Classes');

var config = {
    username: '',
    password: '',
    host: '',
    port: 22,
    dstHost: '127.0.0.1',
    dstPort: 0,
    localHost: '127.0.0.1',
    localPort: 0
};

var tunnel = require('tunnel-ssh');
tunnel(config, function (error, server) {
    if (error) {
        console.log(error);
        return;
    }
    connect();
});

const connect = () => {
    const user = '';
    const pass = '';
    const authsrc = '';
    const db = '';
    let mongourl = `mongodb://${user}:${pass}@127.0.0.1:27017/${db}?authSource=${authsrc}`;
    mongoose.connect(mongourl, {
        useNewUrlParser: true
    });
    const db = mongoose.connection;
    db.on('error', (e) => {
        console.log('mongoose error connection')
        console.log(e);
    });
    db.once('open', () => {
        console.log('database has opened successfully');
        Classes.find({}, (err, docs) => {
            if (err) {
                console.log(`find error : ${err}`);
            }
            console.log(docs);
        });
    })
}

