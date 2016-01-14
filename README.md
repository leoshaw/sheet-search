# sheet-search

Search a Google sheet by vising a URL.

Once published, visit the script's URL with these parameters
 * spreadsheetId - the spreadsheet's drive id, visible in the URL when editing, e.g. the `1PsWi...aEA` part in `https://docs.google.com/spreadsheets/d/1PsWi1ELsN7pVPLb1NtkjdXJYZfRHsNmnINb0Ke33aEA/edit#gid=0`
 * sheetName - the name of the sheet in the spreadsheet (appears at the bottom of the sheet, like a tab)
 * query - the search term (case sensitive)

E.g. https://script.google.com/a/macros/leoshaw.co.uk/s/AKfycbwZqkArpvfyozjbEpEus0Aw9fnwgdu1cEq-prKg9uY/dev?spreadsheetId=1PsWi1ELsN7pVPLb1NtkjdXJYZfRHsNmnINb0Ke33aEA&sheetName=Sheet1&query=bob
