
/*
 * GET users listing.
 */

 var faker = require('faker');
faker.locale = 'zh_CN'; // set language


exports.list = function (req, res, next) {
  var body = [],
      i = 0;
  var count = (req.method === 'GET') ? req.query.count : req.body.count; 
  for ( ; i < count; i++ ) {
    body.push({
      'name': faker.name.findName(),
      'domain': faker.internet.domainName(),
      'ip': faker.internet.ip(),
      'latitude': faker.address.latitude(),
      'longitude': faker.address.longitude()
    });
  }
  res.json(200, body);
}