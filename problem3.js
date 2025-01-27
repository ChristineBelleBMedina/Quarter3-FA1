
var nickname = "Christine";
var height = 60;
var weight = 51; 

var feet = (height / 12); 
var inches = height % 12;          
var pounds = (weight * 2.205);

var bruh = confirm("Do you agree to share your personal information with our site?");


if (bruh) {
    console.log(`Name: ${nickname}\nHeight: ${feet}'${inches}"\nWeight: ${pounds} lbs`);
}
 else {
    console.log("User does not wish to share his/her information.");
}
