fork the project

run **npm install** through command line(command line must be pointing to the folder)

run mongoose server first ,EX : **mongod.exe --dbpath="your_db_storage_path_location"**( again through command line and it must to pointing to db location)

run **node src/index.js** (command line must to ponting to backend folder)

Add some of dummy data through : http://127.0.0.1:3001/ngo/create (POST Method), I prefer postman for this

Format of Data : 


    {
    "name":"Saksham Manocha",
    "registrationDate":"31 November 2012",
    "recievedFunding":true,
    "mail":"saksham@gmail.com",
    "address":"Param Puri,Uttam Nagar,New Delhi",
    "status":false,
    "logo":"image_address"
    }

