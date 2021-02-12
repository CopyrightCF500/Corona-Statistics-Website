const State = require('../models/state');
const CoronaApiService = require('../services/CoronaApiService');

const CoronaApiServiceInstance = new CoronaApiService();

// GET /stats -> Display stats page view
const renderStatsPage = async (req, res) => {
    State.findById('6023ff7273e24e6cfcc3462b')
        .then((result)=> {
            console.log(result);
            res.render('stats/stats', {data: result});
        })
        .catch((err) => {
            console.log(err);
        })
}

// POST /stats -> fetch RKI Corona API and update database
const getStateStats = async (req, res) => {

    try {
        const apiRequest = await CoronaApiServiceInstance.fetchUpdateStateStatistics();
        // console.log(apiRequest); // undefined
        //res.json(apiRequest);
    } catch(err){
        console.log(err);
        res.status(500).send(err);
    } 
}

module.exports = {
    renderStatsPage,
    getStateStats
}