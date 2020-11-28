var db;
db=new PouchDB("contact_db");
alert("Welcome to Password collector !");
alert("DB Created!!");


function addPasswords(){

var username=document.getElementById("username").value;
var pword=document.getElementById("Password").value;
}
var Passwords ={
	_id:new Date().toISOString(),
	name:username,
	Password:Password,
   };
    db.put(Password,function callback(err,result)
    {
	if(!err)
	{
		console.log('Sucessfully Saved a Password!');
		alert("Record added!!");
	}
});

function showPasswords()
	  {
		  db.allDocs({include_docs:true}, function(err,docs)
			  {
				  if(err)
				  {
					  return console.log(err);
				  }
				  else
				  {
					  var num_records=docs.total_rows;
					  var display_records="";
					  for(var i=0; i<num_records;i++)
					  {
						  display_records=display_records+docs.rows[i].doc.name+"<br/>" + docs.rows[i]+"<hr/>";
					  }
					  document.getElementById("Passwords_list").innerHTML=display_records;
				  }
			  });
              
			  db.get('pword',function(err,doc){ 
				  if(err){
					  return console.log(err);
				  }
				  else{
					  console.log(doc); 
				  }
			  });
			 doc={
				 password:pword,
				 _rev:'',
			 }
			 db.put(doc);
			 
			 db.remove('pword','',function(err){
				 if(err){
					 return console.log(err);
				 }
				 else{
					 console.log("Document delete sucessfully");
				 }
			 });
	  }