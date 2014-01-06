'use strict';

module.exports = {
    db: process.env.MONGOHQ_URL || "mongodb://localhost/mean",
    app: {
        name: "MEAN - A Modern Stack - Production"
    },
    facebook: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "https://weaver.herokuapp.com/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "https://weaver.herokuapp.com/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "https://weaver.herokuapp.com/auth/github/callback"
    },
    google: {
        clientID: process.env.GOOGLE_APP_ID || "APP_ID",
        clientSecret: process.env.GOOGLE_APP_SECRET || "APP_SECRET",
        callbackURL: "https://weaver.herokuapp.com/auth/google/callback"
    }
}