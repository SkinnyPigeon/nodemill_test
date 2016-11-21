/**
 * @name data
 * @example data/param
 */



/*
======Remove this block when you understand this API structure=======
CMS API:
========
API to get data from CMS table(s)
_db.getTables returns (via callback) all the data from those tables as an object:

{
  table1:[
    {record},
    {record},
    {record},
    {record}
  ],
  table2: {
    {record},
    {record},
    {record},
    {record}
  ]
}

Next:
=====
You can test your new API at http://localhost:3000/api/data
*/


exports.api=function(id, params, callback) {
  _db.getTables(['pictures'], function(err, data){
    if (err) {
      callback(err);
    } else {

      // feel free to manipulate the data object at this point...

      callback(null, {code:200}, data);  // Send the data back to output with headers
    }
  });
};
