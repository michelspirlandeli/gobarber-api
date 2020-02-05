const express = require('express');
const routes = require('./router');

class app {

    constructor(){
        this.server = express();

        this.middleware();
        this.routes();
    }

    middleware(){
        this.server.use(express.json());
    }

    routes(){
        this.server.use(routes);
    }
}

module.exports = new app().server;