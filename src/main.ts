class RestClient {
    
    _url: string;
    res: JSON;
    load: () => void; 

    constructor(url: string) {
        this._url = url;
    }

    read (load: (feedback : JSON)=>any ) {
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = () => {
            this.res = JSON.parse(x.responseText);
            load(this.res);
        }
        x.send(null);
    }
}

var rest = new RestClient("/inst/");
rest.read(function(feedback)
{

});