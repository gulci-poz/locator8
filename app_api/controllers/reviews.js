var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.reviewsReadOne = function (req, res) {
    // odwoływanie się do zmiennych obiektu za pomocą kropki może nie działać

    if (req.params && req.params['locationid'] && req.params['reviewid']) {
        Loc
            .findById(req.params['locationid'])
            // nie potrzebujemy całego dokumentu, ograniczamy wyszukiwanie do nazwy i recenzji danej lokacji
            .select('name reviews')
            .exec(
                function (err, location) {
                    var response;
                    var review;

                    if (!location) {
                        sendJsonResponse(res, 404, {
                            "message": "locationid not found"
                        });
                        return;
                    } else if (err) {
                        sendJsonResponse(res, 404, err);
                        return;
                    }

                    // jeśli lokacja zawiera rezenzje
                    if (location.reviews && location.reviews.length > 0) {

                        // funkcja pomocnicza id(), wyszukuje subdokument po _id
                        review = location.reviews.id(req.params['reviewid']);

                        // III - rezenzja o podanym id nie istnieje
                        if (!review) {
                            sendJsonResponse(res, 404, {
                                "message": "reviewid not found"
                            });
                        } else {
                            response = {
                                location : {
                                    name: location.name,
                                    id: req.params['locationid']
                                },
                                review: review
                            };

                            sendJsonResponse(res, 200, response);
                        }
                    } else {
                        // II - w bazie nie ma recenzji
                        sendJsonResponse(res, 404, {
                            "message": "No reviews found"
                        });
                    }
            });
    } else {
        // I - nie podaliśmy locationid lub/i reviewid
        // musimy mieć podanene reviewid, żeby w ogóle wejść do tego kontrolera
        // nie mamy zdefiniowanej ścieżki /locations/:locationid/reviews z GET, będzie error
        // brak locationid wyłapie inny kontroler
        sendJsonResponse(res, 404, {
            "message": "Not found, locationid and reviewid are both required"
        });
    }
};

module.exports.reviewsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.reviewsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};
