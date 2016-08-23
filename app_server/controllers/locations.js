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
    res.render('location-info', {
        title: 'Starcups',
        pageHeader: { title: 'Starcups' },
        sidebar: {
            context: 'is on locator8 because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: { lat: 51.455041, lng: -0.9690884 },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'gulci',
                rating: 5,
                timestamp: '19 August 2016',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'James Bond',
                rating: 3,
                timestamp: '11 November 1962',
                reviewText: 'It was ok. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};

module.exports.addReview = function (req, res) {
    res.render('location-review-form', {
        title: 'Review Starcups on locator8',
        pageHeader: { title: 'Review Starcups' }
    });
};
