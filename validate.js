


module.exports = {
    isUserNameValid: function add(username){
        if(username.length <3 || username.length >15) {
            return false;
        }
        if(username.toLowerCase() !== username) {
            return false;
        }
        return true;
    
    },



    isAgeValid: function add(age){
        if(isNaN(age)) {
            return false;
        }
       
        if(age <= 17) {
            return false;
        }
        if(age >= 101) {
            return false;
        }
       
        return true;
    
    },


    isPasswordValid: function add(password){
        var check = /(?=.*\d)(?=.*[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/])(?=.*[0-9]{3,})(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if(!password.match(check)) {
            return false;
        }
       
        return true;
    
    },
    isDateValid: function add(day,month,year){
        if(!(day>0&&day<=31)) {
            return false;
        }
        if(!(month>0&&month<=12)) {
            return false;
        }

        if(!(year>1969&&year<=2020)) {
            return false;
        }
        switch (month) {
            case 1:
                if(day >31){
                    return false;
                }
                
              break;
            case 2:
                    if(year%100==0&&year%400==0){
                        if(day >29){
                            return false;
                        }
                        
                    }
                    else{
                        if(day >28){
                            return false;
                        }
                    }
              break;
            case 3:
                    if(day >31){
                        return false;
                    }
              break;
            case 4:
                    if(day >30){
                        return false;
                    }
              break;
            case 5:
                    if(day >31){
                        return false;
                    }
              break;
            case 6:
                    if(day >30){
                        return false;
                    }
              break;
            case 7:
                    if(day >31){
                        return false;
                    }
                    break;
              case 8:
                    if(day >31){
                        return false;
                    }
                    break;
              case 9:
                    if(day >30){
                        return false;
                    }
                    break;
              case 10:
                    if(day >31){
                        return false;
                    }
                    break;
              case 11:
                    if(day >30){
                        return false;
                    }
                    break;
              case 12:
                    if(day >31){
                        return false;
                    }
                    break;
          }
        
        
        return true;
    
    }
}