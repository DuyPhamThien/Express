//var con = require("../views/mysql");
var button1 = document.getElementsByClassName("okk");
for(var i=0 ; i < button1.length ; i++)
{
     button1[i].addEventListener("click", function(){
       var id = this.getAttribute('id');
       var query3 = `DELETE FROM article WHERE id=${id}`
       con.query(query3 , (err , results) =>{
        if(err){
          console.log(err);
        }
        else{
          console.log('success');
        }
      })
});
}
