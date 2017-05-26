class RestClient {
    _url: string;
    load: () => void; 

    constructor(url: string) {
        this._url = url;
    }

    read (load: (feedback : JSON)=>any ) {
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = () => {
            var r = JSON.parse(x.responseText);
            load(r);
        }
        x.send(null);
    }
}

var rest = new RestClient("/inst/");
rest.read(function(feedback)
{

});