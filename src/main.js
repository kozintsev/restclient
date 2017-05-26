var RestClient = (function () {
    function RestClient(url) {
        this._url = url;
    }
    RestClient.prototype.read = function (load) {
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = function () {
            var r = JSON.parse(x.responseText);
            load(r);
        };
        x.send(null);
    };
    return RestClient;
})();

var rest = new RestClient("/inst/");
rest.read(function (feedback) {
});
