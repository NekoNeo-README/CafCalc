let total_caf = 0
let total_alc = 0

//JSON data
let coffee_types = {
    "coffee-types": [
    {
        "name":"espresso",
        "caffeine":75,
        "alcohool":0
    },
    {
        "name":"doppio",
        "caffeine":150,
        "alcohool":0
    },
    {
        "name":"americano",
        "caffeine":154,
        "alcohool":0
    },
    {
        "name":"cappucino",
        "caffeine":154,
        "alcohool":0
    },
    {
        "name":"latte",
        "caffeine":128,
        "alcohool":0
    },
    {
        "name":"mocha",
        "caffeine":152,
        "alcohool":0
    },
    {
        "name":"flat-white",
        "caffeine":150,
        "alcohool":0
    },
    {
        "name":"macchiato",
        "caffeine":90,
        "alcohool":0
    },
    {
        "name":"con-panna",
        "caffeine":0,
        "alcohool":0
    },
    {
        "name":"affogato",
        "caffeine":75,
        "alcohool":0
    },
    {
        "name":"irish-coffee",
        "caffeine":111,
        "alcohool":0.03,
        "cooldown":2
    }
]
}



let consumed_drinks = [{}];
let selection_element = document.querySelector("#coffee-types-id");
let results_element = document.querySelector("#result-caf");
let element_list = document.querySelector("#drink-list-id");
let results_alc_element = document.querySelector("#result-alc");

function search_in_json(coffe_type_search){

   
    coffee_types["coffee-types"].forEach(element => {
        if(element.name == coffe_type_search)
            {
                total_alc+=element.alcohool;
                total_caf+=element.caffeine;
            }
            
    });
    
}
function add_drink(){
    let selection_value = selection_element.options[selection_element.selectedIndex].value;
    
    let new_element = document.createElement('li'); //creaza un element de item din lista
    new_element.appendChild(document.createTextNode(String(selection_value))); //ii da o valoare
    element_list.appendChild(new_element); //il adauga listei

    search_in_json(selection_value);
    
}

function submit_form(){
    
    //TODO: get result-caf a var lol
    document.querySelector("#result-caf").innerHTML = ''; 
    let new_element = document.createElement('p'); 
    
    new_element.appendChild(document.createTextNode(String("Amount of caffeine consumed: " + total_caf + " mg"))); 
    results_element.appendChild(new_element); 
    if(total_caf >= 400)
        document.querySelector("#result-caf").style.color = "#cc3300";
    else if (total_caf <= 400 && total_caf >= 300)
        document.querySelector("#result-caf").style.color = "orange";
    else if ( total_caf >= 10000)
            document.querySelector("#result-caf").style.color = "black";
    else
    document.querySelector("#result-caf").style.color = "#339900";


    document.querySelector("#result-alc").innerHTML = ''; 
    let new_alc_element = document.createElement('p'); 
    new_alc_element.appendChild(document.createTextNode(String("Amount of alcohol consumed: " + total_alc + " mg"))); 
    results_alc_element.appendChild(new_alc_element); 
    if(total_alc >= 0.3)
        document.querySelector("#result-alc").style.color = "#cc3300";
    else if (total_alc < 0.3 && total_alc >= 0.06)
        document.querySelector("#result-alc").style.color = "orange";
    else if ( total_alc >= 0.5)
            document.querySelector("#result-alc").style.color = "black";
    else
    document.querySelector("#result-alc").style.color = "#339900";
    
}