var cors = require('cors')
var express= require('express')

var fs = require('fs')
var app = express()
app.use(cors())
var mongojs= require('mongojs')

var db=mongojs('company',['empList'])

app.get('/',function(req,res){
    db.empList.find({},function(err,data){
                       res.send(data)
                     })

})

app.get('/deleteRecord/:id',function(req,res){
	var id= parseInt(req.params.id);
	console.log(id);
    db.empList.remove({_id: id},1,function(err,data){
                      res.send(data);
                     })
})

app.get('/addRecord/:data',function(req,res){
	var max= 2000,min=3000;
	var id= Math.floor(Math.random()*(max-min+1)+min);
	var data= JSON.parse(req.params.data);
	data._id= id;
    db.empList.insert(data);
})

app.get('/updateRecord/:user',function(req,res){
	var user = JSON.parse(req.params.user);
    db.empList.update({_id:user._id},user);

})

app.listen(3000)
