// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : process.env.FACEBOOK_APP_ID,
        'clientSecret'    : process.env.FACEBOOK_APP_SECRET,
        'callbackURL'     : process.env.APP_URL + '/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : process.env.TWITTER_KEY,
        'consumerSecret'     : process.env.TWITTER_SECRET,
        'callbackURL'        : process.env.APP_URL + '/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : process.env.GOOGLE_PLUS_CLIENT_ID,
        'clientSecret'     : process.env.GOOGLE_PLUS_CLIENT_SECRET,
        'callbackURL'      : process.env.APP_URL + '/auth/google/callback'
    }

};
