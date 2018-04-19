function printer(){

    var fetchText=document.getElementById("geoInput1").value;
    var fetchText2=document.getElementById("geoInput2").value;
    var fetchText3=document.getElementById("geoInput3").value;
    var allText=fetchText + ' ' + fetchText2 + ' ' + fetchText3;
    var request = new XMLHttpRequest();
    var res = allText.split(" ");
    var requestFormatted=res.join(',+');

    request.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?address='+requestFormatted+'&key='+Api_key_here, true);

    request.onload = function () {
        var data = JSON.parse(this.response);

        if(data.status=="OK" )
        {
            var lat = data.results[0].geometry.location.lat;
            var long = data.results[0].geometry.location.lng;
            document.getElementById("outputText").innerHTML = "Latitude is :" + lat + "<br><br>" + "Longitude is : "+long;
        }
        else{
           document.getElementById("outputText").innerHTML = "Unable to locate this address";
       }
    }

    request.send();
}
