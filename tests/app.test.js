const app = require('../app.js');

/*
Testing whether my first function will work in my webpage. I am testing each index'
facilities to make sure that when the user selects a hotel, the strings will retrieve 
the correct template literals for my object.
Method used: toContain(), because I look to identify the strings contained in the .facilities array.
*/

test('should contain the strings found in hotelObj[0].facilities', () => {
    expect(app.hotelObj[0].facilities).toContain("Gym", "Pool", "Italian Restaurant")
});

test('should contain the strings found in hotelObj[1].facilities', () => {
    expect(app.hotelObj[1].facilities).toContain("Car Park", "Gym")
});

test('should contain the strings found in hotelObj[2].facilities', () => {
    expect(app.hotelObj[2].facilities).toContain("Car Park")
});

test('should contain the strings found in hotelObj[3].facilities', () => {
    expect(app.hotelObj[3].facilities).toContain("Pool", "Gym", "Room Service")
});
