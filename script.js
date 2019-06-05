//Formatting to add Leading Zeros
let pad = (num, size) => {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}

$.get('src/ledger.csv',{},function(content){
      let log = content.split('\n');
      let arr = [];

      //Turn into 2D array
      log.forEach(function(line){
          const entry = line.split(",");
          arr.push(entry);
      });


      //FUNCTIONS TO DISPLAY IN CONSOLE
      const info = () => console.log(`"ledger.csv" contains ${log.length} lines`);
      const printAll = () => log.forEach(function(line){console.log(line);});

      const table = document.querySelector('table');

      //PRINT LOG TO WEBPAGE TABLE
      for(i = 0; i < arr.length-1; i++){
              //Format serial number to add leading zeros
              arr[i][0] = pad(arr[i][0],3);
              //Create Table Row Element
              tr = document.createElement("tr");
              table.appendChild(tr);
              //Create cell for Serial No. and populate
              let createCell = (column) => {
                  let td = document.createElement("td");
                  let txt = document.createTextNode(arr[i][column]);
                  tr.appendChild(td);
                  td.appendChild(txt);
              }
              createCell(0);
              createCell(1);
              //createCell(2);
          }

      //TESTER


});
