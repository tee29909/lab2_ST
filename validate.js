


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
    
    }
}