const express = require('express');
//router = express.Router();
const router = express.Router();

router.get('/users', (req, res)=>{
    res.send("I am an API and i can see my router")
})

router.post('/addUser',(req,res)=>{
    let studentData = {
    
        idNumber:req.body.idNumber,
        fName:req.body.fName,
        sName:req.body.sName,
        cellNumber:req.body.cellNumber,
        surname:req.body.surname,
        email:req.body.email,
        Gender:req.body.Gender
        
       }; 


            var sql = "SELECT * FROM students where idNumber = ?";
            conn.query(sql,[studentData], function(err, result){
                if(result.length > 0){
                    res.send({
                        data : result,
                        code : 200,
                        massage : "The Id number is already registered"
                    })
                }
                else{
                    var sql = "INSERT INTO students set ?";
                    conn.query(sql,[studentData],function(err){
        
                    if(err)throw err;
        
                
                        else { 
                            conn.query('select * from students',function(err,result){
                                if (err) throw err;
                                    else{
                       
                                        return res.send({result})
                    }
                    
                })
            }
        })

                }

                

            })
            
 
           
})

module.exports = router;