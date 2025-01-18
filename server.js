
const express= require ('express');
const app=express();
app.listen(3000, () => {
   console.log("server started at port no : 3000,0099")
});

app.get('/',(req,res) => {
 console.log("hello ji ,kaise ho sb ");
})