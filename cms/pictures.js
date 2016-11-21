/*
======Remove this block when you understand what this file does======
This is a page controller for the CMS and describes a single table in table and edit mode




*/

exports.getPage=function(callback) {
  var tableName='pictures';

  var fields = {
    name: {type : 'string', title : 'Name'},
    active: {type : 'boolean', title : 'Active', defaultValue: true},
    description: {type : 'string', rows: 8, title : 'Description'},
    image: {type : 'image', title : 'Image', width: 400, height: 400},
    location: {type : 'location', title : 'Location'}
  };

  var tableColumns = { 
    name: {title : 'Name'},
    active: {title : 'Active'},
    image: {title : 'Image'},
    location: {title : 'Location'}
  };

  callback(null, {fields: fields, tableColumns: tableColumns, tableName: tableName});    
}

