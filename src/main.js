var RestClient = (function () {
    function RestClient(url) {
        this.url = url;
        var xhr = new XMLHttpRequest();
    }
    RestClient.prototype.read = function (load) {
        var _this = this;
        this.xhr.open("GET", this.url, true);
        this.xhr.onload = function () {
            var r = JSON.parse(_this.xhr.responseText);
            load(r);
        };
        this.xhr.send(null);
    };

    RestClient.prototype.create = function (params) {
        this.xhr.open("POST", this.url, true);
        this.xhr.setRequestHeader('Content-Type', 'application/json');
        this.xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //alert(this.responseText);
            }
        };
        this.xhr.send(params);
    };
    return RestClient;
})();

var rest = new RestClient("/inst/");
rest.read(function (feedback) {
});

rest = new RestClient("/inst/");

var o = "{name: 1, age: 2}";

rest.create(JSON.parse(o));
