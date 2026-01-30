function doGet(e) {
  return buildHTML_(
    e.parameter.spreadsheetId, 
    e.parameter.sheetName, 
    e.parameter.query);
}

function search(spreadsheetId, sheetName, query) {
  return doSearch(spreadsheetId, sheetName, query);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function buildJSON_(prefix, spreadsheetId, sheetName, query) {
  var result = doSearch(spreadsheetId, sheetName, query);
  return ContentService.createTextOutput(
    prefix + '(' + JSON.stringify(result) + ')')
  .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function buildHTML_(spreadsheetId, sheetName, query) {
  var template = HtmlService.createTemplateFromFile('Page');
  template.spreadsheetId = spreadsheetId;
  template.sheetName = sheetName;
  template.query = query;
  
  return template.evaluate().setSandboxMode(HtmlService.SandboxMode.IFRAME);
}