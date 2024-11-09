const nodemailer = require('nodemailer');

const http = require('http');


const Server = http.createServer((req,res)=>{
    const auth = nodemailer.createTransport({
        service:'gmail',
        secure:true,
        port:465,
        auth:{
            user:"rekhathapaliya12345@gmail.com",
            pass:"idzh ithc ucnm ddxt"
        }
      });
  const recciver = {
        form:"rekhathapaliya12345@gmail.com",
        to:"pragyanthapaliya027@gmail.com",
        subject:"hello i am testing node app ",
        text:"Hello brother i am creating mail sender from node js ."
    }

    auth.sendMail(recciver,(err,res)=>{
        if(err){
            throw err;
        }
        console.log('sucess!!!');
        response.end("hello sucess mail sent check your mail ");
    })


});
Server.listen(3000,()=>{
    console.log('Server is running on port 3000')
})