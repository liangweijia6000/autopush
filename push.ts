import * as __exec from "child_process";
const { exec } = require('child_process') as typeof __exec;

function main() {
    console.log("autopush start");
    push();
    setInterval(push, 60000);
}

function push() {
    console.log("func push");

    exec("./tools.sh", function(error, stdout, stderr){
        if(error) {
            console.error('error: ' + error);
            //return;
        }
        console.log('stdout: ' + stdout);
        //console.log('stderr: ' + typeof stderr);
    });

    let w = Date.now();
    let cmd = "echo " + String(w) + " >> 1.log";
    console.log("cmd:", cmd);
    exec(cmd);
}

main();