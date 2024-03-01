const fs = require("fs"); 
const express = require("express"); 
const app = express();
const data = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
const dataObj=JSON.parse(data);

//js içinde değiştirilen dataları json içinde de değiştirme
//buse olan isim x olarak değiştirildi ve json dosyasında da bu şekilde işlendi
dataObj.name = "X";
const newData = JSON.stringify(dataObj);
fs.writeFileSync(`${__dirname}/data.json`, newData);


console.log(dataObj);

app.get("/student", (req, res) =>{
    res.status(200).json({
        status:"success",
        data : dataObj
    });
});



app.listen(3000, () => {
    console.log('Server running on port 3000');
});  // The server object listens on port 3000