var RSVP = require('rsvp');
///var logger = require('../config/logger');
var mongoClient = require('mongodb').MongoClient;
//var auth = require('../config/auth');
ObjectId = require('mongodb').ObjectID;


function project() { }
module.exports= project;

project.prototype.postProjectInfo = function(myObj){
    return new RSVP.Promise(function(fulfill, reject){
      
        mongoClient.connect('mongodb+srv://user:user@cluster0.mgsdm.mongodb.net/?retryWrites=true&w=majority',function(err,db){
            if(err){
                console.log('Error in  Database Connection');
                reject(err);
            }
            var dbs = db.db('User');
            projectObj = myObj;

            dbs.collection('details').insertOne(projectObj,function(err,result){
                if (err) {
                    console.log('Error in  Database Query');
                    
                    reject(err);
                }
                dbs.collection('details').find(myObj).toArray(function (err,result){
                    if (err) {
                        console.log('Error in  Database Query');
                        
                        reject(err);
                    }
                    responseProject = new Object();
                    responseProject = result;
                    
                    fulfill(responseProject);
                })

            })
        })
    })
}


project.prototype.getProjectInfo = function () {

    return new RSVP.Promise(function (fulfill, reject) {

        mongoClient.connect('mongodb+srv://user:user@cluster0.mgsdm.mongodb.net/?retryWrites=true&w=majority', function (err, db) {
            if (err) {
                console.log('Error in  Database Connection');
               
                reject(err);
            }
            var dbs = db.db('User');
            dbs.collection("details").find({}).toArray(function (err, result) {
                responseProject = new Object();
                if (err) {
                    console.log('Error in  Database Query');
                    
                    reject(err);
                }
                
                responseProject = result;
                
                fulfill(responseProject);
            });
        });


    });
}

