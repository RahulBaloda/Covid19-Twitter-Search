    function genLink()
    {
        var beds = "";
        var oxygen = "";
        var food = "";
        var remdesivir = "";
        var Fabiflu = "";
        var ICU = "";
        var Ventilator = "";
        var tests = "";

        if(document.getElementById("beds").checked == true)
        {
            var beds = document.getElementById("beds").value
        }
        if(document.getElementById("oxygen").checked == true)
        {
            var oxygen = document.getElementById("oxygen").value
        }
        if(document.getElementById("food").checked == true)
        {
            var food = document.getElementById("food").value
        }
        if(document.getElementById("remdesivir").checked == true)
        {
            var remdesivir = document.getElementById("remdesivir").value
        }
        if(document.getElementById("Fabiflu").checked == true)
        {
            var Fabiflu = document.getElementById("Fabiflu").value
        }
        if(document.getElementById("tests").checked == true)
        {
            var tests = document.getElementById("tests").value
        }
        if(document.getElementById("Ventilator").checked == true)
        {
            var Ventilator = document.getElementById("Ventilator").value
        }
        if(document.getElementById("ICU").checked == true)
        {
            var ICU = document.getElementById("ICU").value
        }
        
        var parameters = document.getElementById("place").value+"%28+"+beds+"+"+oxygen+"+"+food+"+"+remdesivir+"+"+Fabiflu+"+"+Ventilator+"+"+tests+"+"+ICU;
        var url = "https://twitter.com/search?q=verified+"+parameters+"%29+-%22not+verified%22+-%22unverified%22+-%22needed%22+-%22need%22+-%22needs%22+-%22required%22+-%22require%22+-%22requires%22+-%22requirement%22+-%22requirements%22&f=live";
      
            if(document.getElementById("place").value != "")
        {
            document.getElementById("link").setAttribute("href", url);
            document.getElementById("overview").style.transform = "";
            document.getElementById("alert").style.visibility = "hidden";
        }
        else
        {
            document.getElementById("dataset-info").style.visibility = "visible";
            document.getElementById("alert").style.visibility = "visible";
            document.getElementById("overview").style.transform = "translateY(101%)";
            // setTimeout(function(){
            //     document.getElementById("dataset-info").style.visibility = "hidden";
            // },5000)
        }
        };
    