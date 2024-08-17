import { consolas } from "./classes/catalogo";
import fs from 'fs';

function writeIt(){
    fs.writeFile('./public/catalogos/consolas/consolasestoesretro.json', JSON.stringify(consolas), function(err){
        if(err){
            console.log("OK hubo un error: ", err);
        }
    });
}

writeIt()


// function txt() {
//     fs.writeFile('file.txt', 'I am cool 3!', function (err) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("File created!");
//     });
// }

// // writeIt();
// txt();

