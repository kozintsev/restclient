var RestClient = (function () {
    function RestClient(url) {
        this._url = url;
    }
    RestClient.prototype.read = function () {
        var _this = this;
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = function (e) {
            _this.res = JSON.parse(x.responseText);
        };
        x.send(null);
    };
    return RestClient;
})();
//let rest = new RestClient("/inst/");
//rest.read();
