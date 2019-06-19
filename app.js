//define object that I want to retrieve data from -- using hotelsJSON.
//automatically translated into a JS object

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


const higherOrLowerThanSix = () => {
    let selectedItems = Math.floor(Math.random() * (6)) + 1;
    let availableItems = 6;
    if (selectedItems <= availableItems) {
        return true
    } else {
        return false
    }
};


module.exports = {
    hotelObj,
    higherOrLowerThanSix
}