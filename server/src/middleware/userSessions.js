import MongoStore from 'connect-mongo';
import session from 'express-session';
import * as dotenv from 'dotenv';

const store = MongoStore.create({
    mongoUrl: process.env.MONGOBD_CONNECTION_STRING
})

export default session({
    store: store,
    secret: "aSessionSecret",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
        maxAge: 15 * 60 * 1000
    }
})