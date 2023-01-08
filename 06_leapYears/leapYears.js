function leapYears(year) {
    
    if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
     ///if (year % 4 == 0) {
    return true;   
        
    //return true;
    } else {
        return false;
    }
}
leapYears();

// Do not edit below this line
module.exports = leapYears;
