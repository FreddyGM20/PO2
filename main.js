const express = require('express');
const upload = require("express-fileupload");
const app = express();
const csv = require("csvtojson");
let Esquema = null;



app.use(upload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/connect",(req,res)=>{
    Esquema = require('./database');
    return res.send("OK");
});
app.post("/create",async(req,res)=>{
    if(Esquema!=null){
        const {name,password,id_event} = req.body;
        console.log(req.body);
        const user = await Esquema.findOne({name,password,id_event});
        if(user) return res.send("NOK");
        await new Esquema({name,password,id_event}).save();
        res.send("OK");
    }else{
        res.send("Ejecute la ruta + /connect");
    }
    
});

app.post("/csvFile",async(req,res)=>{
    if(Esquema!=null){
        const {userList} = req.files;
        console.log(userList);
        const arreglo=await csv().fromFile(userList.tempFilePath);
        arreglo.forEach(async(obj)=>{
            console.log(obj.name);
            const user = await Esquema.findOne({name:obj.name,password:obj.password,id_event:obj.id_event});
            if(!user) await new Esquema({name:obj.name,password:obj.password,id_event:obj.id_event}).save();
        })
        res.send("OK");
    }else{
        res.send("Ejecute la ruta + /connect");
    }
   
   
});

app.get("/delete",async(req,res)=>{
    if(Esquema!=null){
        await Esquema.remove();
        res.send("OK");
    }else{
        res.send("Ejecute la ruta + /connect");
    }
    
})

app.get('/check/:name/:password/:id_event',async(req,res)=>{
    
    if(Esquema!=null){
        const usuario = await Esquema.findOne(req.params);
        if(usuario){
            console.log(usuario);
            res.send(`id:\t${usuario._id}`);
        }else{
            res.send("NOK");
        }

    }else{
        res.send("Ejecute la ruta + /connect");
    }
})

app.listen(4000,()=>{
    console.log('listenning');
})
