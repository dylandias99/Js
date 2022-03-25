connection = new Mongo('localhost:27017');
db = connection.getDB('Cruise1');
collection = db.getCollection('Cruises');

//Q1
//Add Cruise 1
doc = ({cruiseID: "1", destination: "Dubrovnik", shipName: "Spirit of the Sea", 
	Passenger: [{passengerID: "10",name:"Sue Smith",departDate: "20190502", returnDate:"20190513"},
			{passengerID : "20",name:"Fran Jones", departDate:"20190502", returnDate:"20190513"}]})

collection.insert(doc)

//Add Cruise 2
doc = ({cruiseID: "2", destination: "Saint Croix", shipName: "Windjammer", 
	Passgener: [{passengerID: "20",name:"Fran Jones",departDate: "20190520", returnDate:"20190525"},
			{passengerID : "30",name:"George Jungle", departDate:"20190502", returnDate:"20190525"}]})

collection.insert(doc)

//Add Cruise 3
doc = ({cruiseID: "3", destination: "Alaska", shipName: "Pacific Princess", 
	Passgener: [{passengerID: "30",name:"George Jungle",departDate: "20190502", returnDate:"20190620"}]})

collection.insert(doc)


//Q2

print("\nThis is the original document\n");
cursor = collection.find()
while (cursor.hasNext()) {
	doc = cursor.next();
	printjson(doc);
}