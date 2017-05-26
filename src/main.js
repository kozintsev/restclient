var RestClient = (function () {
    function RestClient(url) {
        this._url = url;
    }
    RestClient.prototype.read = function (load) {
        var _this = this;
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = function () {
            _this.res = JSON.parse(x.responseText);
            load(_this.res);
        };
        x.send(null);
    };
    return RestClient;
})();

var rest = new RestClient("inst");
rest.read(function (feedback) {
});
