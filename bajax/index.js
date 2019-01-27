var api = require('./getApi');
var express = require('express');
var path = require ('path');
var router = express();
var getApi = "http://localhost:8000/";
var token = "";

router.set('view engine','ejs');

console.log(__dirname);

router.use(express.static(__dirname + '/file'));

router.get('/home', function (req, res) {
    news = api.allNews(getApi);
    console.log(news.success);
    res.render('guest/home', { title : "Bajax - Barudak Jaringan Komputer"});
});

//news
router.get('/news', function (req, res) {
    res.render('guest/news', { title : "Bajax - News"});
});

router.get('/news/:id_news', function (req, res) {
   res.send('detail berita '+req.param('id_news'));
});

//pencarian
router.get('/search/:search', function (req, res) {
   res.render('guest/search', { search:req.param('search') ,title : "Bajax - "+req.param('search')});
});

//scan web
router.get('/webscan', function (req, res) {
   res.send('check web');
});

router.get('/webscan/:id', function (req, res) {
   res.send('detail hasil '+req.param('id'));
});

// --------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------- //
// --------------------------------------------------------------------------------- //

//admin artikel
router.get('/admin/news', function (req, res) {
   res.send('semua artikel');
});

router.get('/admin/news/edit/:id_edit', function (req, res) {
   res.send('edit ' +req.param('id_edit'));
});

router.get('/admin/news/delete/:id_delete', function (req, res) {
   res.send('delete ' +req.param('id_delete'));
});

router.get('/admin/news/create', function (req, res) {
   res.send('new');
});

//admin kategori
router.get('/admin/kategori', function (req, res) {
   res.send('kategori');
});

router.get('/admin/kategori/edit/:id_edit_kategori', function (req, res) {
   res.send('edit kategori ' +req.param('id_edit_kategori'));
});

router.get('/admin/kategori/delete/:id_delete_kategori', function (req, res) {
   res.send('delete kategori '+req.param('id_delete_kategori'));
});

router.get('/admin/kategori/create_kategori', function (req, res) {
   res.send('new kategori');
});


//admin user
router.get('/admin/user', function (req, res) {
   res.send('user');
});

router.get('/admin/user/create_user', function (req, res) {
   res.send('new user');
});

router.get('/admin/user/user_edit/:id_edit_user', function (req, res) {
   res.send('edit user '+req.param('id_edit_user'));
});

router.get('/admin/user/user_delete/:id_delete_user', function (req, res) {
   res.send('delete user '+req.param('id_delete_user'));
});

//admin auth
router.get('/admin/login', function (req, res) {
   res.send('login admin');
});

router.get('/admin/logout', function (req, res) {
   res.send('logout admin');
});



var server = router.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example router listening at http://%s:%s", host, port)
});