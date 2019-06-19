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

//no need for the else as it's a dropdown menu


//   2nd function  -- display data according to checked boxes
// function to print filtered hotels according to id="facilities"


