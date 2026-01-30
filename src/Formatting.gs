function formatRow(row) {
  return sanitiseRow_(row);
}

function filterColumns(row) {
  var result = new Array();
  
  result.push(row[1]); // date
  result.push(generateCustomerString_(row[2], row[3])); // customer
  result.push(row[4]); // site
  result.push(row[6]); // material
  result.push(generateQtyString_(row[10], row[15])); // qty
  
  return result;
}

function generateCustomerString_(customer, branch) {
  return branch.length == 0 ? customer : customer + ' (' + branch + ')';
}

function generateQtyString_(tonnes, qty) {
  return tonnes.length == 0 ? '(' + qty + ')' : tonnes;
}

function sanitiseRow_(row) {
  var result = new Array();
  for(var i = 0; i < row.length; i++) {
    result.push(sanitiseCell_(row[i]));
  }
  return result;
}

function sanitiseCell_(data) {
  if(data instanceof Date) {
    return formatDate_(data);
  }
  else {
    return data.toString();
  }
}

function formatDate_(d) {
  // toLocaleDateString doesn't give desired results (works in console, not when called from Gscript)
  // return d.toLocaleDateString('en-GB');
  var day = '' + d.getDate(),
    month = '' + (d.getMonth() + 1),
      year = d.getFullYear().toString().substring(2);
  return [pad2(day), pad2(month), year].join('/');
}

function pad2(n) {
  if (n.length < 2) {
    return '0' + n;
  }
  else {
    return n;
  }
}