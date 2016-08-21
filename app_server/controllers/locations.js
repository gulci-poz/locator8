module.exports.homeList = function (req, res) {
    res.render('locations-list', {
        title: 'locator8 - find a place to work with wifi',
        pageHeader: {
            title: 'locator8',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: 'Looking for wifi and a seat? locator8 helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let locator help you find the place you\'re looking for.',
        locations: [{
            name: 'Starcups',
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '100m'
        }, {
            name: 'Cafe Hero',
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            distance: '200m'
        }, {
            name: 'Burger Queen',
            adress: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium wifi'],
            distance: '250m'
        }]
    });
};

module.exports.locationInfo = function (req, res) {
    res.render('location-info', { title: 'Location info' });
};

module.exports.addReview = function (req, res) {
    res.render('location-review-form', { title: 'Add review' });
};
