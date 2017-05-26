//Our TypeScript class now with Callbacks

class HelloWorld {
    
    //A variable of type HTMLElement
    element: HTMLElement;

    //A Consctructor that accepts an element
    constructor (e: HTMLElement) { 
        this.element = e;
    }

    //A public method. See notify paramter is now taking a Function Type
    sayHello(message: string, notify: (feedback : string)=>any ) {
        alert(message);
        //Do some other complex stuff here
        notify("completed sayHello");
    }

}

window.onload = () => {
    var e = document.getElementById('content');

    //Initiate HelloWorld Class
    var hello = new HelloWorld(e);
    hello.sayHello("Hello World", function (feedback) {
            alert(feedback);
        }
    );
};