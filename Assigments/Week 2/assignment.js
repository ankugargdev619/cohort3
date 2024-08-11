// Requirements
const fs = require("fs");

// Promisified Async functions

// Promisify setTimeout
function promisifySetTimeout(time){
    return new Promise(
        resolve => setTimeout(()=>{
            console.log("Time out of "+time);
            resolve();
        },time)
    );
}

promisifySetTimeout(1000).then(result=>{console.log("Timeout complete")});

// fetch
function promisifyFetch(url){
    return new Promise((onResolve,onReject)=>
        fetch(url)
            .then(value=>{
                console.log("Promise fulfilled");
                onResolve(value);
            })
            .catch(error=>{
                console.log("Promise not fulfilled");
                onReject(error);
            })

    )
};
promisifyFetch("https://dog.ceo/api/breeds/list/al")
    .then(value=>{
       console.log(value);
    })

// readFile

function promisifyReadFile(path,encoding) {
    return new Promise((onResolve,onReject)=>{
        fs.readFile(path,encoding,(err,data)=> {
            if(err){
                onReject(err);
            } else {
                onResolve(data);
            }
        })
    })
}

promisifyReadFile("a.txt","utf-8")
    .then(value=>{
        console.log("Promise fulfilled");
        console.log(value);
    })
    .catch(error=>{
        console.log("Promise rejected");
        console.log(error);
    });