const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    abbreviation: String,
    population: Number,
    cases: Number,
    deaths: Number,
    casesPerWeek: Number,
    deathsPerWeek: Number,
    recovered: Number,
    weekIncidence: Number,
    casesPer100k: Number
});

const State = mongoose.model('State', stateSchema);

module.exports = State;