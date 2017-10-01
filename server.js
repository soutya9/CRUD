var express = require('express');
var path = require('path');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('rambo', ['dime','rambo', 'login', 'productDetails']);/*collections in rambo*/
var bodyParser = require('body-parser');/*used to clean data, restructure*/
app.use(express.static(__dirname ));/*apart from src, other file paths will be there so keep __dirname 2 times*/
app.use(express.static(__dirname + '/src'));/*running server n take direcory name as src/path*/

app.use(bodyParser.json());/*use restructured data*/
app.use(bodyParser.urlencoded({ extended: false }));


var mongoose = require('mongoose');
var schema = require('./db');/*validation schemas for additem*/
var registerschema = require('./dbs');/*validation schemas for register. create and edit schema file(eg. dbs) manually*/
mongoose.connect('mongodb://localhost:27017/rambo');/*connect to mongodb*/
var DonorForm = mongoose.model("DonorForm",schema,'dime');/*for additem*/
var NewReg = mongoose.model("NewReg",registerschema,'rambo');/*for registration*/


app.post('/login',function(req,res,next){/*posting data to db*/
var user=req.body;/*get rid of junk data in body parser n save to user. mandatory*/
console.log(user);
/*comparing db data with user data*/
db.rambo.findOne({
    username:user.username,
/*lhs: db data, rhs: user data*/
    password:user.password
},function(err,docs){
    if(err){
        console.log(err)
    }
    else{
        /*send response to loginservice.ts*/
        res.json(docs);
        console.log(docs)
    }
});

});


app.post('/api/newuser', function(req, res) {
    var reg = new NewReg(req.body);
    console.log(req.body);
    reg.save(function(err, result) {
        if (err) {
            res.json({
                'err':"Error"
            })
        }
         res.json(reg); 
    });
});


app.get('/api/users', function(req, res) {
/*console.log(req.body);
  console.log(res.body); */ 
    db.dime.find(function(err, result) {
        if (err) {
            res.json({
                'err':"Error"
            })

        }
        else{
            res.json(result);

          
        }
    });
});

app.post('/api/user', function(req, res) {
/*console.log(req.body);
console.log(res.body);*/
  //store data
    var form = new DonorForm(req.body);
    console.log(req.body);
    form.save(function(err, result) {
        if (err) {
            res.json({
                'err':"Error"
            })

        }
        
         res.json(form); 
    });
});


app.delete('/api/delete/:id', function(req, res, next){
    var id=req.params.id;
    console.log(id);
   db.dime.remove({

        _id: mongojs.ObjectId(id)
    }, function(err,docs){


    res.json(docs)

});
});



app.get('/api/get/:id', function(req, res, next){
    var id=req.params.id;
    console.log(id);
   db.dime.findOne({

        _id: mongojs.ObjectId(id)
    }, function(err,docs){


    res.json(docs)

});
});



/*app.post('/book/:id',function(req,res,next){
var id=req.params.id;

db.dime.findByIdAndUpdate({

_id:mongojs.ObjectId(id)
},function(err,docs){


    res.json(docs)

});

});
*/
app.post('/book/', function(req, res, next) {
    var id=req.params.id;
    var whitelist =['isbn','title'];
    var edit = req.body;
    console.log(edit);
    var updater = {};
    for (var ix in whitelist) {
        var field = whitelist[ix];
        if (edit.hasOwnProperty(field)) {
            updater[field] = edit[field];
        }
    }
    db.dime.update({ _id: mongojs.ObjectId(edit._id) },{ $set: updater }, function(err, updated) {
        if (err || !updated) console.log("User not updated");
        else console.log("User updated");
    });
    /*db.userData.findOne({ _id: mongojs.ObjectId(edit._id) }, function(err, docs) {
        console.log(docs);
    });*/
    res.status(200).send('Profile has been updated');
});

app.listen(8000, function() {

    console.log("Listening at 8000");
});