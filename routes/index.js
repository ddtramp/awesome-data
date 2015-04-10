
/*
 * GET home page.
 */

exports.index = function(req, res){
  // res.render('index', { title: 'Express' }); / no jade, only enable

  res.json(200, [{
  	'title': 'now you see it!',
  	'author': 'jack<wangxichao001@gmail.com',
  	'note': 'please see the api doc or contact author to get request method and uri address',
  	'time': '04-10-2015 17:24'
  }])
};