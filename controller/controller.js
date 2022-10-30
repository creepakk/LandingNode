exports.index = function (req, res) {
    res.render('index', {
        title: 'Home'
    });
};

exports.guides = function (req, res) {
    res.render('guides', {
        title: 'Guides'
    });
};

exports.flights = function (req, res) {
    res.render('flights', {
        title: 'Flights'
    });
};

exports.about = function (req, res) {
    res.render('about', {
        title: 'About Us'
    });
};

exports.contact = function (req, res) {
    res.render('contact', {
        title: 'Contact'
    });
};

exports.success = function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    res.render('success', {
        title: 'Success',
        data: req.body ,
    });
};
