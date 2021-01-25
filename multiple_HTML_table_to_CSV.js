function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }


  function HTMLtablesToCSV(){

    var text = "";

    //select all tables in the html
    var panel = document.querySelectorAll(".panel-body");

    //one interaction for each table in the html
    for (var i = 0; i < panel.length ; i++){

        var name = panel[i].querySelector("h3");
        var description = panel[i].querySelector("label");
        var rows = panel[i].querySelectorAll("tr");
        var cols = panel[i].querySelectorAll("th")

        text = text + name.textContent +"\n";
        text = text + description.textContent +"\n";

        //one interaction for each line in the table
        for(var j = 0; j < rows.length ; j++){
            for(var k = 0; k < cols.length ; k++){
                text = text + rows[j].querySelectorAll("td, th")[k].textContent + ";";
            }
            text = text + "\n";
        }
        text = text + "\n \n \n";

    }

    download("tablesCSV.csv",texto);
  }
  
