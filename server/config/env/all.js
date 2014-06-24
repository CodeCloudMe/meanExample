'use strict';

var path = require('path');
var rootPath = path.normalize(__dirname + '/../../..');
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 3000
//8080 openstack... 3000 local
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

module.exports = {
	root: rootPath,
	port: server_port,
	hostname: server_ip_address,
	db: process.env.MONGOHQ_URL,
	templateEngine: 'swig',

    // The secret should be set to a non-guessable string that
    // is used to compute a session hash
    sessionSecret: 'MEAN',

    // The name of the MongoDB collection to store sessions in
    sessionCollection: 'sessions', 

    // The session cookie settings
    sessionCookie: { 
    	path: '/',
    	httpOnly: true,
    	// If secure is set to true then it will cause the cookie to be set
    	// only when SSL-enabled (HTTPS) is used, and otherwise it won't
    	// set a cookie. 'true' is recommended yet it requires the above
    	// mentioned pre-requisite.
    	secure: false,
    	// Only set the maxAge to null if the cookie shouldn't be expired
    	// at all. The cookie will expunge when the browser is closed.
    	maxAge: null
    },

    // The session cookie name
    sessionName: 'connect.sid'
};
