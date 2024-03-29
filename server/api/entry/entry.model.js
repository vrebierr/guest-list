'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EntrySchema = new Schema({
	name: String,
	info: String,
	active: Boolean
});

module.exports = mongoose.model('Entry', EntrySchema);