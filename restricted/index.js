function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

function log() {
    let name = prompt("Name:")
    let pass = prompt("Password:");
    if (name=="voodoo" & pass=="magic") {
        window.alert("Logged!")
        window.location.replace("http://www.google.com");
    } else if (name=="cat" & pass=="cat") {
        window.alert("")
        window.location.replace("/assets/ca.png");
    } else {
        window.alert("Incorrect Name or Password!")
    }
}

if (getQueryVariable("log")) {
    log()
}