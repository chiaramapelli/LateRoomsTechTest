//need to: declare object about hotels
// create first function for website (general search)
// create second function which filters resultds (filtered search)


let hotelObj = [{
        "name": "Hotel Armani",
        "starRating": 5,
        "facilities": ["Gym", "Pool", "Italian Restaurant"]
    },
    {
        "name": "Premier Inn Manchester",
        "starRating": 3,
        "facilities": ["Car Park", "Gym"]
    },
    {
        "name": "Hotel Marie",
        "starRating": 3,
        "facilities": ["Car Park"]
    },
    {
        "name": "Hotel Plaza",
        "starRating": 5,
        "facilities": ["Pool", "Gym", "Room Service"]
    }
];

let array = [];


//      1st function      --  function to display data according to client's submission

function displayData() {
    let message = document.getElementById('welcomemessage');
    let hotels = document.getElementById('namesOfHotels');
    if (hotels.value == 'armani') {
        message.innerHTML = `Welcome to Armani Hotel! Our rating is ${hotelObj[0].starRating}, and we have the following facilities: ${hotelObj[0].facilities}!`
    } else if (hotels.value == 'premierInn') {
        message.innerHTML = `Welcome to Premier Inn! Our rating is ${hotelObj[1].starRating}, and we have the following facilities: ${hotelObj[1].facilities}!`
    } else if (hotels.value == 'marie') {
        message.innerHTML = `Welcome to Hotel Marie! Our rating is ${hotelObj[2].starRating}, and we have the following facilities: ${hotelObj[2].facilities}!`
    } else if (hotels.value == 'plaza') {
        message.innerHTML = `Welcome to the Hotel Plaza! Our rating is ${hotelObj[3].starRating}, and we have the following facilities: ${hotelObj[3].facilities}!`
    }
};


//   2nd function  -- display data according to checked boxes
// function to print filtered hotels according to id="facilities"

function printChecked() {
    let items = document.getElementsByName('box');
    let selectedItems = []
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox' && items[i].checked == true)
            selectedItems.push(items[i].value);
    }
    
    let a = 0;
    let facility = 0;

    for (let j = 0; j < hotelObj.length; j++) {

        array = hotelObj[j].facilities
        selectedItems.forEach(function (selectedItem) {
            while (a < array.length) {

                if (selectedItem === array[a]) {
                    facility++
                    console.log('true') //if checked box is found in original array, print true
                    console.log(facility + " facility")
                } else {
                    console.log('false') //if checked but not found in original array, print false
                }
                a++
            }
            a = 0
            if (facility == selectedItems.length) {
                filter.innerHTML += `Then an option for you would be ${hotelObj[j].name}! <br>` //main aim: if facility is found in original array and within length of selected items, print name of the hotel 
                facility = 0;
            }
        })
    }
};

//all beautified - functionality ok