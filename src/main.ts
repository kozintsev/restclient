class RestClient {
    url: string;
    load: () => void;
    xhr: XMLHttpRequest;

    constructor(url: string) {
        this.url = url;
        var xhr = new XMLHttpRequest(); 
    }

    read (load: (feedback : JSON)=>any ) {
        this.xhr.open("GET", this.url, true);
        this.xhr.onload = () => {
            var r = JSON.parse(this.xhr.responseText);
            load(r);
        }
        this.xhr.send(null);
    }

    create (params: JSON){
        this.xhr.open("POST", this.url, true);
	    this.xhr.setRequestHeader('Content-Type', 'application/json');
	    this.xhr.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			//alert(this.responseText);
		    }
	    }
	    this.xhr.send(params);
    }
}

var rest = new RestClient("/inst/");
rest.read(function(feedback)
{

});

rest = new RestClient("/inst/");

var o = "{name: 1, age: 2}";

rest.create(JSON.parse(o));