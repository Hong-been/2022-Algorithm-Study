const fs = require('fs');

const DATE = new Date();
const TODAY = `22.${DATE.getMonth()+1}.${DATE.getDate()}`;
let startNum=0;

fs.readdir("leetcode/",function(err,files){
  startNum = files.length + 1;
});

fs.readFile('problems.txt', 'utf-8',function(err, d) {
  if(err) console.log(`something wrong: ${err}`);
  
  const output=[];
  const data = d.toString().split("\n");

  for(let i=0; i<data.length; i++){
    if(data[i].match(/leetcode/g)) {
      

      const title = data[i].match(/leetcode.com\/problems\/([\w\d-]+)/)[1].replaceAll("-"," ").replaceAll(/(\b\w)/g,x=>x.toUpperCase());

      if(i===0){
        output.push(`|  ${startNum}  | [${title}](${data[i]}) |[solution.js](./leetcode/${title.replaceAll(' ',"")}.js) | ${TODAY} |   |`);
        continue;
      }
      output.push(`|  ${++startNum}  | [${title}](${data[i]}) |[solution.js](./leetcode/${title.replaceAll(' ',"")}.js) | " |   |`);
    }
  }

  console.log(output.join('\n'));
});

