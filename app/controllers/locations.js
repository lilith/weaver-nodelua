'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Location = mongoose.model('Location'),
    _ = require('lodash');


/**
 * Find location by id
 */
exports.location = function(req, res, next, id) {
    Location.load(id, function(err, location) {
        if (err) return next(err);
        if (!location) return next(new Error('Failed to load location ' + id));
        req.location = location;
        next();
    });
};

/**
 * Create a location
 */
exports.create = function(req, res) {
    var location = new Location(req.body);

    location.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                location: location
            });
        } else {
            res.jsonp(location);
        }
    });
};

/**
 * Update a location
 */
exports.update = function(req, res) {
    var location = req.location;

    location = _.extend(location, req.body);

    location.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                location: location
            });
        } else {
            res.jsonp(location);
        }
    });
};

/**
 * Delete an location
 */
exports.destroy = function(req, res) {
    var location = req.location;

    location.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                location: location
            });
        } else {
            res.jsonp(location);
        }
    });
};

/**
 * Show an location
 */
exports.show = function(req, res) {
    res.jsonp(req.location);
};

/**
 * List of Locations
 */
exports.all = function(req, res) {
    Location.find().exec(function(err, locations) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(locations);
        }
    });
};