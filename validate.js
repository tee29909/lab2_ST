


module.exports = {
    isUserNameValid: function add(username){
        if(username.length <3 || username.length >15) {
            return false;
        }
        if(username.toLowerCase() !== username) {
            return false;
        }
        return true;
    
    }
}