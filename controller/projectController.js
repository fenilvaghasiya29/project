

var projectService = require('../service/projectService');
var projectSerObj = new projectService();

module.exports = {

    postProject: function (request, response) {

        var myObj = {
            username: request.body.username,
            gender: request.body.gender,
            email: request.body.email,

        }

        projectSerObj.postProject(myObj).then(function (result) {

            response.json(result);
        }, function (err) {

            response.json(err);
        });
    },
    getProject: function (request, response) {

        projectSerObj.getProject().then(function (result) {

            response.json(result);
        }, function (err) {

            response.json(err);
        });
    },


}
