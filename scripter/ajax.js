var text1=document.getElementById("title");
var text2=document.getElementById("text1");
var text3=document.getElementById("text2");

var btn1=document.getElementById("btn_1");
var btn2=document.getElementById("btn_2");
var btn3=document.getElementById("btn_3");
var btn4=document.getElementById("btn_4");
var btn5=document.getElementById("btn_5");

var body=document.getElementsByTagName("body")[0];

btn1.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/contents/content1.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();

});

btn2.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/contents/content2.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();

});

btn3.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/contents/content3.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
});



btn4.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/contents/content4.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();
});

btn5.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', '/contents/content5.json');
    ourRequest.onload = function() {
        if (ourRequest.status >= 200 && ourRequest.status < 400) {
            var ourData = JSON.parse(ourRequest.responseText);
            renderHTML(ourData);
        } else {
            console.log("We connected to the server, but it returned an error.");
        }

    };

    ourRequest.onerror = function() {
        console.log("Connection error");
    };

    ourRequest.send();

});


function renderHTML(data) {
    var title = "";
    var text_1="";
    var text_2="";
    var image="";

    for (i = 0; i < data.length; i++) {
        title += " " + data[i].title;
        text_1 += " " + data[i].content1;
        text_2 += " " + data[i].content2;
        image+=data[i].background;
    }

    body.style.backgroundImage='url('+image+')';

    text1.innerHTML=title;
    text2.innerHTML=text_1;
    text3.innerHTML=text_2;
}

