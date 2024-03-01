const express = require('express');

const app = express();

app.get('/api/sum/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.send(`The summary of ${num1} and ${num2} is ${sum}`);
});

app.get('/api/sub/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if(num1>num2){
        const sum = num1 - num2;
        res.send(`The subtraction of ${num1} and ${num2} is ${sum}`);
    }
    else{
        res.send(`${num1} is smaller of ${num2}. This procces is not possible.`);

    }   
   
});

app.get('/api/mul/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 * num2;
    res.send(`The multiplication of ${num1} and ${num2} is ${sum}`);
});

app.get('/api/div/:num1/:num2', (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    if(num1 == 0 && num2 == 0){      
        res.send(`The division of ${num1} and ${num2} is infinite. This process is not possible.`);
    }
    else if(num1 != 0 && num2 == 0){
        res.send(`The division of ${num1} and ${num2} is not possible.`);
    }
    else{
        const sum = num1 / num2;
        res.send(`The division of ${num1} and ${num2} is ${sum}`);
    }
    
    
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
