
/**
 * HELPFUL : https://expressjs.com/en/guide/routing.html
 * 
 */

module.exports = function(app, router) {
    /**
     * Method 2
     * We get the user sub routes from user routes after passing the router object
     * We define all user sub routes should be called from the /users path
     */
    var user = require('./fizzbizz_routes')(router);
    app.use('/printFizzBizz', user);
}