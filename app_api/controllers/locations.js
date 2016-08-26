var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function (res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.locationsListByDistance = function (req, res) {
    Loc
        .find()
        .exec(function (err, locations) {
            sendJsonResponse(res, 200, locations);
        });
};

module.exports.locationsCreate = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsReadOne = function (req, res) {
    // parametry zawiera obiekt req.params
    // odwoływanie się do zmiennej obiektu za pomocą kropki może nie działać

    // API w każdym wypadku ma dawać odpowiedź
    // I pułapka - czy podaliśmy locationid (czy istnieje w parametrach), czy w ogóle istnieje obiekt parametrów
    if (req.params && req.params['locationid']) {
        Loc
            .findById(req.params['locationid'])
            .exec(function (err, location) {
                // II pułapka - mongoose nie zwraca lokacji (nie istnieje id)
                if (!location) {
                    sendJsonResponse(res, 404, {
                        "message": "locationid not found"
                    });
                    return;
                // III pułapka - mongoose zwraca błąd
                } else if (err) {
                    sendJsonResponse(res, 404, err);
                    return;
                }
                // parametr istnieje, powyższe warunki (mongoose nie zwraca lokacji lub zwraca błąd)
                // nie zachodzą, zwracamy otrzymane dane
                sendJsonResponse(res, 200, location);
            });
    } else {
        // nie dostaniemy tej odpowiedzi, ponieważ mamy inny kontroler, który przechwytuje ścieżkę /locations
        // jeśli w routingu skierowalibyśmy obsługę ścieżki /locations na ten kontroler,
        // to wtedy zobaczylibyśmy ten komunikat
        sendJsonResponse(res, 404, {
            "message": "No locationid in request"
        });
    }
};

module.exports.locationsUpdateOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.locationsDeleteOne = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

