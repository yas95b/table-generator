// function to make table
function makeTable() {
    //getting number of rows 
    var numberOfRows = document.getElementById('numrows').value;

    //getting number of columns 
    var numberOfCols = document.getElementById('numcols').value;

    //table header
    var tableHeader = '<table border="4">\n';  //creates tableborder
    var tableBody = '';

    //making rows and cells of table in each loop iteration
    for (var i = 1; i <= numberOfRows; i++) {
        tableBody = tableBody + '<tr>';
        for (var j = 1; j <= numberOfCols; j++) {
            tableBody = tableBody + '<td>';
            tableBody = tableBody + i + ',' + j;
        }
    }

    //outputting result 
    document.getElementById('result').innerHTML = tableHeader + tableBody;

}
