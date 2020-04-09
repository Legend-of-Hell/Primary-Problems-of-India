//const fs = require('fs');
function validateName(){
    document.getElementById("namediv").classList.remove('has-error');
    uname = document.form1.name.value;
    
    if(! /^[a-zA-Z ]+$/.test( uname)){
        document.getElementById("namediv").classList.remove('has-success');
        document.getElementById("namediv").classList.add('has-error');
        return false
    }
    else{
        document.getElementById("namediv").classList.remove('has-error');
        document.getElementById("namediv").classList.add('has-success');
        return true
    }
}
function validateAge(){
    document.getElementById("agediv").classList.remove('has-error');
    age = document.form1.age.value;
    
    if(! /^\S[0-9]{0,1}$/.test( age)){
        document.getElementById("agediv").classList.remove('has-success');
        document.getElementById("agediv").classList.add('has-error');
        return false
    }
    else{
        document.getElementById("agediv").classList.remove('has-error');
        document.getElementById("agediv").classList.add('has-success');
        return true
    }
}
function getData(){
    console.log("addData");
    if(validateName() && validateAge()){
        uname = document.form1.name.value;
        age = document.form1.age.value;
        gender = document.form1.gender.value;
        problem = document.form1.problem.value;
       

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
              }

            function showPosition(position) {
                latitude =  position.coords.latitude;
                longitude = position.coords.longitude;
                console.log(latitude,longitude)
               }  
            console.log(uname,age,gender,problem);
            //call add data 
            //addData()
        //at the end
        document.getElementById("tab1").click();
    }
    
  /*if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } */
 
}

function addDate(){
    
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Mal',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student);

  //read data
/*fs.readFile('delete.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});*/

//add data
let obj = {
    table: [
        {"name":"qw",
        "age":2e3,
        "gender":"Malse",
        "department":"Enaglish",
        "car":"Haonda"
    }]
};

fs.exists('delete.json', function(exists) {

    if (exists) {

        console.log("yes file exists");
        fs.readFile('delete.json', (err, data) => {
            if (err) throw err;
            
            obj.table.push(JSON.parse(data));
            let json = JSON.stringify(obj.table);
            fs.writeFile('delete.json', json, function (err) {
                if (err) {
                   console.log(err);
                }
                console.log("done");
              });
            });
    } 
    else{

fs.writeFile('delete.json', data, function (err) {
    if (err) {
       console.log(err);
    }
    console.log("done");
  });

    }
});
}


function updateMap() {
    // I have given my loc we have to update it with json file
    latitude = '19.1430656';
    longitude = '72.8891392';
    problem = 'Electricity'
    if(problem == 'Electricity'){
        color="red"
    }
    /*
    Water
    Pollution
    Road
   Curruption
    Education System
    Basic Sanitation
    Healthcare System  */
    // Mark on the map
    new mapboxgl.Marker({
        draggable: false,
        color: color
    }).setLngLat([longitude, latitude])
        .addTo(map);
}
let interval = 20000;
setInterval( updateMap, interval); 