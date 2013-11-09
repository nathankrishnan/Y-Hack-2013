function serverRequest(recordID){
    $.ajax({
        url: 'http://dry-bayou-7910.herokuapp.com/renderjson/' + recordID + '?callback=jsoncallback',
        type: "GET",
        dataType: 'jsonp',
        
        timeout: 5000,
        success: function(data){

            alert(data.name + " | " + data.growth_conditions)

        },
        error: function(){
            console.log('There was an error loading the data.');
        }
    });
}

function barcodeScanner(){
    // Temporarily disabiling alert test since scanner is working
    // alert("clicked");
    var scanner = cordova.require("cordova/plugin/BarcodeScanner");

    scanner.scan(
        function (result) {

            scanResult = result.text;
            alert(scanResult);

            serverRequest(scanResult);


        }, 
        function (error) {
            alert("Scanning failed: " + error);
        }
    );
}

/////////////////////////////////////////////////////////////

var appid = "64ba9eac";
var appkey = "fdb2032513e161995ee9a20b03a33104";

function apiRequest(phrase, max, cal_max, allergen_contains_milk, allergen_contains_eggs, allergen_contains_fish, allergen_contains_shellfish, allergen_contains_tree_nuts, allergen_contains_peanuts, allergen_contains_wheat, allergen_contains_soybeans, allergen_contains_gluten){

        var apiURL = 'https://api.nutritionix.com/v1_1/search/' + phrase + '?results=0%3A' + max + '&cal_min=0&cal_max=' + cal_max + '&fields=*&allergen_contains_milk=' + allergen_contains_milk + '&allergen_contains_eggs=' + allergen_contains_eggs + '&allergen_contains_fish=' + allergen_contains_fish + '&allergen_contains_shellfish=' + allergen_contains_shellfish + '&allergen_contains_tree_nuts=' + allergen_contains_tree_nuts + '&allergen_contains_peanuts=' + allergen_contains_peanuts + '&allergen_contains_wheat=' + allergen_contains_wheat + '&allergen_contains_soybeans=' + allergen_contains_soybeans + '&allergen_contains_gluten=' + allergen_contains_gluten + '&appId=64ba9eac&appKey=fdb2032513e161995ee9a20b03a33104';

            alert(apiURL);

        $.ajax({
            url: apiURL,
            type: 'GET',
            dataType: 'json',
            success: function(data){
                console.log(data);
                return data;
            }
        });
    
}

function generateList(){
        
        location.href='#list';

        var timerange = $('#timerange').val();
        var calorieintake = $('#calorieintake').val()*3;

        console.log(timerange);
        console.log(calorieintake);

        apiRequest('salad', timerange, calorieintake, false, false, false, false, false, false, false, false, false);


}










