const fs = require("fs");

function cleanFile(filePath){
    return new Promise(function(resolve){
        fs.readFile(filePath,"utf-8",function(err, data){
            data = data.trim();
            // console.log(data);
            fs.writeFile(filePath,data,function(){
                resolve();
            })
        })
    })
}

async function main(){
    await cleanFile("a.txt");
    console.log("done cleaning file");
}
main()




// const fs = require("fs");
// function cleanFile(filePath, cb) {
//   return new Promise(function (resolve) {
//     fs.readFile(filePath, "utf-8", function (err, data) {
//       data = data.trim();
//       fs.writeFile(filePath, data, function () {
//         resolve();
//       });
//     });
//   });
// }

// async function main() {
//   await cleanFile("a.txt");
//   console.log("Done cleaning file");
// }

// main();
