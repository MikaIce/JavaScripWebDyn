window.alert("Hello World");
            alert("Hello World");
            
            var text = "Variable Gobale ";
            (function()
            {
                var text = "variable locale";
                alert(text);
                alert(window.text);
            })();
            
            (function()
            {
                text = "variable accessible";
            })();
            alert(text);

var divs = document.getElementsByTagName("div");
for(var i = 0, c = divs.length ; i < c ; i++)
    {
        alert("element n " + (i + 1) + " : " + divs[i]);
    }

var query = document.querySelector("#menu .item span"),
    queryAll = document.querySelectorAll("#menu .item span");

alert(query.innerHTML);

alert(queryAll.length);
alert(queryAll[0].innerHTML + " - " + queryAll[1].innerHTML);