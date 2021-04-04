const State = require('../models/state');
const CoronaApiService = require('./CoronaApiService');

const CoronaApiServiceInstance = new CoronaApiService();

class DatabaseService{

    constructor(){
        
    }

    /**
     * @description checks if database has the newest state statistics
     *              and else updates the database
     */
    async updateDatabase(){
        // Database is updated an just returns the daily state stats
        if(this.isDatabaseStateUpdated()){
            this.getStateStatsOfDate(new Date("2021-02-10"));
        }
        // Database is not updated and should update the missing states to db
        else{
            // Get daily stats
            const allStates = await CoronaApiServiceInstance.getDailyStateStats();
            console.log("All States:");
            console.log(allStates);
        }
    }

    /**
     * @description Checks, if database has the newest state of today
     * @returns is database up to date
     */
    async isDatabaseStateUpdated(){
        //const newestState = await this.getNewestStateDate();
        var updated;

        var query = this.getNewestStateDate();
        query.exec(function(err, state){
            if(err)
                return console.log(err);
            //console.log("jooooo", today != state.date);
            console.log("newest date in DB:", state.date);
            updated = new Date() == state.date;
        });

        console.log("Current date: ", new Date());
        console.log("updated: ", updated);
        if(updated){
            console.log('Database is up to date!');
        }else{
            console.log('Database must be updated!');
        }
        // TODO
        
        return updated;
    }

    /**
     * @description This method gets the newest state based on 'date'
     * @returns Date newest date
     */
    getNewestStateDate(){
        var query = State.findOne().sort({date: -1});
        return query;
    }

    /**
     * @description get all stats of states of the given day 
     * @param {*} date 
     * @returns list of states
     */
    async getStateStatsOfDate(date){
        //console.log("getting daily state stats of db");
        //console.log('GetStatesWithDate: ', date);
        const states_test = await State.find({ date: date }).exec();
        console.log('States: ', states_test);

        
        return State.find({date: date}).
        then(states => {
            console.log(states);
            for(state in states){
                console.log(state);
            }
        });
    }
    
    async 

    /**
     * @description Gets all the states in the database
     * @returns a query with all documents
     */
    async getAllStates(){
        return State.find();
    }

    

    /**
     * @description This method adds a new state to the database
     * @param {*} state The state that should be added to db
     */
    async createNewState(state){
        state.save()
            .then((result) => {
                console.log("Created and added new state to db:", result);
            })
            .catch((err) => {
                console.log(err);
            });
    }

}

module.exports = DatabaseService;