class NewsController {
    //GET/news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('NEW LẬP TRÌNH THÌ SAO');
    }
}

module.exports = new NewsController();
