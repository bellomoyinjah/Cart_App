// EXERCISE 1
var rows: number | string | null = prompt(
    "How many rows for your multiplication table?"
  );
  var cols: number | string | null = prompt(
    "How many columns for your multiplication table?"
  );
  if (rows === "" || rows === null) {
    rows = 10;
  } else {
    rows = parseInt(rows, 10);
  }
  if (cols === "" || cols === null) {
    cols = 10;
  } else {
    cols = parseInt(cols, 10);
  }
  
  function createTable(rows: number, cols: number): void {
    var j = 1;
    var output = "<table border='1' width='500' cellspacing='0'cellpadding='5'>";
    for (let i = 1; i <= rows; i++) {
      output = output + "<tr>";
      while (j <= cols) {
        output = output + "<td>" + i * j + "</td>";
        j = j + 1;
      }
      output = output + "</tr>";
      j = 1;
    }
    output = output + "</table>";
    document.write(output);
  }
  
  createTable(rows, cols);
  