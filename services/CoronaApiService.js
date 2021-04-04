const State = require('../models/state');
const axios = require('axios');
const { response } = require('express');

class CoronaApiService{
    /**
     * @description Create an instance of CoronaApiService and set endpoints
     */
    constructor(){
        this.rootEndpoint = 'https://api.corona-zahlen.org';
        this.stateEndpoint = '/states';
    }

    /**
     * @description Attempt to fetch state Statistics of the RKI Corona API of today
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async getDailyStateStats(){
        try{
            await axios.get(this.rootEndpoint+this.stateEndpoint)
                    .then(async (response) => {
                        //console.log(response.data);
                        return { success: true, body: response.data};
                    });
            
        } catch(err){
            console.log('error get daily stats in APIService');
            console.log(err);
            return {success: false, error: err};
        }
    }

    /**
     * @description Attempt to fetch state Statistics of the RKI Corona API
     * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
     */
    async fetchUpdateStateStatistics(){
        try{
            await axios.get(this.rootEndpoint+this.stateEndpoint)
                    .then(async (response) => {
                        //console.log("API SERVICE RESPONSE DATA");
                        //console.log(response.data.data.BW);
                        await this.updateDatabase(response);
                        return { success: true, body: response.data};
                    });
            
        } catch(err){
            console.log(err);
            return {success: false, error: err};
        }
    }

    /**
     * @description Checks if the fetched states date is already in database represented
     */
    async updateDatabase(responseApi){
        const data = responseApi.data.data;
        const meta = responseApi.data.meta;

        await State.where({name: data.BW.name, date: meta.lastUpdate}).findOne((err, state) => {
            if (err) return handleError(err);
            // Document (with state & date) is already in database -> do nothing
            if (state){
                console.log("Document/s already in database");
                return;
            }
            // State with the date is not in DB yet -> add to DB
            else{
                const state = new State({
                    name: data.BW.name,
                    date: new Date(meta.lastUpdate),
                    weekIncidence: data.BW.weekIncidence
                });

                state.save()
                    .then((result) => {
                        console.log(result);
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
    }
}

module.exports = CoronaApiService;