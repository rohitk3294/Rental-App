const Rental = require('./models/rental');
const User =require('./models/user')


class FakeDb {

  constructor() {
    ﻿this.rentals = [{
      title: "Nice view on ocean",
      city: "Noida",
      street: "Main street",
      category: "condo",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 4,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 43
      },
      {
      title: "Modern apartment in center",
      city: "New Dehli",
      street: "Time Square",
      category: "apartment",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 1,
      shared: false,
      description: "Very nice apartment in center of the city.",
      dailyRate: 11
      },
      {
      title: "Old house in nature",
      city: "Agra",
      street: "Banicka 1",
      category: "house",
      image: "https://booksync-jerga-prod.s3.amazonaws.com/uploads/rental/image/5/image.jpeg",
      bedrooms: 5,
      shared: true,
      description: "Very nice apartment in center of the city.",
      dailyRate: 23
}]
  this.users =[{
  username: "TestUser1",
  email: "rohitkumar@gmail.com",
  password: "testtest"
  }];
}


 /* function for Remove already exist data Now use deleteMany instead of remove */
async cleanDb(){
  await User.deleteMany({}); 
  await Rental.deleteMany({});
}

  pushDataToDb() {
  const user= new User(this.users[0]);
    this.rentals.forEach((rental) => {
      const newRental = new Rental(rental);

      newRental.user= user;

      user.rentals.push(newRental);
      newRental.save();
    });
    user.save();
  }


  async seedDb() {
   await this.cleanDb();
    this.pushDataToDb();
  }
}

module.exports = FakeDb;
