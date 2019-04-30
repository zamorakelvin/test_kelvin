const os = require('os');
const fs = require('fs');

let cpu = os.cpus();
let sistema = os.platform();
let usuario = os.hostname();

fs.appendFile('escrito.txt','practicade node.js y git', function(error){
    if (error){
        console.log('Error al crear el Archivo');
    }
});