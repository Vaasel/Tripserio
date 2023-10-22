


const trip = require("../models/TripModel.js");
const ErrorHandler = require("../utils/ErrorHandler");
require("../db/conn.js");
//creating a factory function
const  TripController=()=>{
  return{
    //Function to get all the trips
  async GetAllTrips(req, res, next){
    try {
      const trips = await trip.find();
  
      res.status(200).json({ success: true, message: trips });
    } catch (error) {
      console.error(error);
     
      next(new ErrorHandler("Internal Server Error"), 500);
      return;
    }
  },
  //Function to add a trip
  async AddTrip (req, res, next){
    const { name, startingDate, endingDate, duration, price } = req.body;
    console.log(name, startingDate, endingDate, duration, price);
  
    if (!name || !startingDate || !endingDate || !duration || !price) {
      
      next(new ErrorHandler("Required fields are missing"), 400);
      return;
    }
    try {
      const trips = new trip({
        name: name,
        startingDate: startingDate,
        endingDate: endingDate,
        duration: duration,
        price: price,
      });
  
      await trips.save();
      res.status(200).json({ success: true, message: "Trip added successfully" });
    } catch {
      next(new ErrorHandler("Internal Server Error"), 500);
      return;
    }
  }}
}
module.exports=TripController