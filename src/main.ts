class RestClient {
    _url: string;
    res: JSON;
    constructor(url: string) {
        this._url = url;
    }


    read() {
        var x = new XMLHttpRequest();
        x.open("GET", this._url, true);
        x.onload = (e: Event) => {this.res = JSON.parse(x.responseText);}
        x.send(null);
    }
}

//let rest = new RestClient("inst");
//rest.read();