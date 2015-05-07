var Sighting = require('../models/sightings');


module.exports = {

    create: function(req, res) {
        var newSighting = new Sighting(req.body);

        newSighting.save(function(err, results) {
            if (err) return res.status(500).send(err)
            else res.send(results);
        });
    },

    read: function(req, res) {
    	Sighting.find(req.query)
    	.exec(function(err, results) {
    		if(err) res.status(500).send(err)
    		else res.send(results);	
    	})
    },

    update: function(req, res) {
    	Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, results) {
    		if(err) res.status(500).send(err)
    		else res.send(results);	
    	})
    },

    delete: function(req, res) {
    	Sighting.findByIdAndRemove(req.params.id, function(err, deleted) {
    		if(err) res.status(500).send(err)
    		else res.send(deleted);
    	})
    }






};
