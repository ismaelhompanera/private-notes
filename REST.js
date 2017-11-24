var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;
    router.get("/",function(req,res){
        res.json({"Message" : "Welcome to the apppnotes api"});
    });

    router.get("/notes",function(req,res){
        var query = "SELECT * FROM ??";
        var table = ["note"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json(rows);
            }
        });
    });

    router.get("/note/:note_id",function(req,res){
        var query = "SELECT * FROM ?? WHERE ??=?";
        var table = ["note", "NoteId", req.params.note_id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json(rows);
            }
        });
    });

    router.post("/note/:note_id/:note",function(req,res){
        var query = "INSERT INTO ??(??,??) VALUES (?,?)";
        var table = ["note", "NoteId", "Note",req.params.note_id, req.params.note];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Message" : "Note Added !"});
            }
        });
    });

    router.delete("/note/:id",function(req,res){
        var query = "DELETE from ?? WHERE ??=?";
        var table = ["note", "NoteId", req.params.id];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Message" : "Deleted the note with id "+req.params.id});
            }
        });
    });
}

module.exports = REST_ROUTER;
