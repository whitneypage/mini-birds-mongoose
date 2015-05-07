var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
    name: {
        type: String,
        lowercase: true
    },
    order: {
        type: String,
        lowercase: true 
    },
    status: {
        type: String,
        lowercase: true,
        enum: [
            'extinct',
            'extinct in the wild',
            'vunerable',
            'least concern',
            'near threatened',
            'endangered'
        ]
    },
    confirmed: {
        type: Boolean,
        default: false
    },
    numberSeen: {
        type: Number,
        min: 1
    }
});

module.exports = mongoose.model('Sighting', sightingSchema);
