//import dictionary
$.get('/dictionary.txt',{},function(content){
      lines = content.split('\n');
       console.log(`"file.txt" contains ${lines.length} lines`);
      console.log(`First line : ${lines[0]}`);

      letters = "ridosharfdym";
      // console.log(`"file.txt" contains ${lines.length} lines`)
      // console.log(`First line : ${lines[0]}`)
      const filteredDic = [];
      //filter dictionary
      for (line in lines) {
          if (line.length > 2) {

              includeWord = true;
              for (const i = 0; i < line.length; i++) {
                  if (!letters.includes(line.charAt(i))) {
                      includeWord = false;
                  }
              }
              if (includeWord) {
                  console.log("here");
                  filteredDic.push(line);
              }
          }
      }
      console.log(`"file.txt" contains ${filteredDic.length} lines`);
      console.log(`First line : ${filteredDic[0]}`);
});



//? what to store new dict in>?
