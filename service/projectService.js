var RSVP = require('rsvp');


var project = require('../dao/project');

var projectObj = new project();

function projectService() { }
module.exports = projectService;

projectService.prototype.postProject = function (myObj) {
    return new RSVP.Promise(function (fulfill, reject) {
        var responseProject = new Object();
        // console.log(myObj);
        projectObj.postProjectInfo(myObj).then(function (data) {
            if (data.length == 0) {
                responseProject.success = "false";
                reject(responseProject)
            }
            else {
                responseProject.success = "true";
                responseProject.data = { "projectId": data };
                responseProject.msg = 'Added Successful'
                fulfill(responseProject);
            }
        },
            function (err) {
                responseProject.success = "false";
                responseProject.msg = err;

                reject(responseProject);
            }
        )
    })
}





projectService.prototype.getProject = function () {

    return new RSVP.Promise(function (fulfill, reject) {
        var responseProject = new Object();
        projectObj.getProjectInfo().then(function (data) {
            if (data.length == 0) {
                responseProject.success = "false";
            

                reject(responseProject);
            } else {
                responseProject.success = "true";
                responseProject.data = data;

                fulfill(responseProject);
            }
        }, function (err) {
            responseProject.success = "false";
            responseProject.msg = err;

            reject(responseProject);
        });
    });
};


