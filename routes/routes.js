var projectController = require('../controller/projectController');


module.exports = function (app) {
   
    
    app.get('/restapi/projects', projectController.getProject);



     app.post('/restapi/project', projectController.postProject);




}
