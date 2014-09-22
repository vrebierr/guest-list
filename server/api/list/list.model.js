'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ListSchema = new Schema({
	name: String,
	info: String,
	active: Boolean,
	places: Number,
	entries: [ {type : mongoose.Schema.ObjectId, ref : 'Entry'} ],
	end: Date
});

module.exports = mongoose.model('List', ListSchema);