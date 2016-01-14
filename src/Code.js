function doGet(e) {
  return buildHTML_(
    doSearch_(
      e.parameter.spreadsheetId, 
      e.parameter.sheetName, 
      e.parameter.query));
}

function doSearch_(spreadsheetId, sheetName, query) {
  var data = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName).getDataRange().getValues();
  var rows = getRowsMatching_(data, query);
 
  // assume the first row is headers, and add to the output 
  if(rows.length > 0) {
    rows.unshift(data[0]);
  }

  return rows;  
}

function buildHTML_(rows) {
  var result = "";
  result += "<p>Rows matching:</p>";
  result += "<table>";
  for(i in rows) {
    result += buildHTMLRow_(rows[i]);
  }
  result += "</table>";
      
  return HtmlService.createHtmlOutput(result);
}

function buildHTMLRow_(row) {
  var result = "<tr>";
  for(j in row) {
    result += "<td>" + row[j] + "</td>";
  }
  result += "</tr>";
  return result;
}

function getRowsMatching_(data, query) {
  var result = new Array();
  for(i in data) {
    var row = data[i];
    for(j in row) {
      var cellValue = row[j].toString();
      if(cellValue.indexOf(query) != -1) {
        result.push(row);
        break;
      }
    }
  }
  return result;
}