import {spawn} from "node:child_process";

const bashChildProcess = spawn("bash", ["script.sh"]);

bashChildProcess.stdout.on("data", (data)=>{
    process.stdout.write(data)
})
bashChildProcess.stderr.on("data", (data)=>{
    process.stderr.write(data)
})

bashChildProcess.stdout.on("close", (code)=>{
    if(code ===0){
        console.log("Script executed successfully!")
    }else{
        console.log("Script failed!")
    }
})