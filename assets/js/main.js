console.log("test");

/* 

Date()

*/


let date1 = 0 ;

date1 = new Date("September 2, 2019 09:00:00");
console.log(date1);
document.write(date1);

date1 = new Date();
console.log(date1); // aktuelle Datum und Zeit
document.querySelector("body").innerHTML += (date1 + "<br>"); // += damit write() von oben nicht überschrieben wird 

date1 = new Date(0);
console.log(date1); // Thu 1.1.1970 00:00:00:00
document.write(date1 + "<br>");

date1 = new Date(31556909900);
console.log(date1); // 
document.write(date1 + "<br>");

date1 = new Date(86400000);
console.log(date1); // 
document.write(date1 + "<br>");