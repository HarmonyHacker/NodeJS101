const fs = require("fs");

// const space_project_path = "./space_project";
// const log_txt_path = "./space_project/log.txt";
// const update_txt_path = "./space_project/update.txt";

// que-1
// fs.mkdirSync(space_project_path);

// que-2
// const data2 = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft."; 
// fs.writeFileSync(log_txt_path,data2);

// que-3
// const data3 = "ISRO has started working on Gaganyaan.";
// fs.writeFileSync(log_txt_path, data3);

//que-4
// const data4 = "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// fs.appendFileSync(log_txt_path, data4);

//que-5
// fs.renameSync(log_txt_path,update_txt_path);

//que-6
// fs.readFile(update_txt_path,(err, data)=>{
//     console.log(Data in ${update_txt_path} is => ${data.toString()});
//     console.log("We are excited");
//   });

//que-7
// fs.unlinkSync(update_txt_path);

  
//que-8
// fs.rmdirSync(space_project_path);


// question 1 Asynchronous
// fs.mkdir("space_project",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("File created")
//     })
    

// question 2 Asynchronous
// data = "ISRO is planning Gaganyaan mission, ie an Indian crewed orbital spacecraft.";
// fs.writeFile("./space_project/log.txt",data,(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("File created and line added.")
//     });



// question 3 Asynchronous
// data = "ISRO has started working on Gaganyaan.";
// fs.writeFile("./space_project/log.txt",data,(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("Data replaced")
//     })
    


// question 4 Asynchronous
// data = "The current Aditya-L1 team of scientists is mentoring new talent for working on the Gaganyaan mission.";
// fs.appendFile("./space_project/log.txt",data,(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("line appended")
//     })
    



// question 5 Asynchronous
// fs.rename("./space_project/log.txt","./space_project/update.txt",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("file renamed")
//     })
    


// question 6 Asynchronous  
// let x = fs.readFileSync("./space_project/update.txt")
// fs.readFile("./space_project/update.txt",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log(x.toString())
//     })
//     console.log("We are excited")
    




// question 7 Asynchronous  

//  fs.unlink("./space_project/update.txt",(err=>{
//         if(err){
//             throw err
//         }
//         console.log("File deleted Successfully")
//     }))




// question 8 Asynchronous 

// fs.rmdir("space_project",(err)=>{
//         if(err){
//             throw err
//         }
//         console.log("Folder deleted Successfully")
//     })