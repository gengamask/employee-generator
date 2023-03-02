const ep = require('./employee');

class Manager extends ep{
    constructor(name, id, email, officeNumber){
    super(name, id, email)
    this.officeNumber = officeNumber;
    }

    getOffice(){
        return this.officeNumber;
    }

    getRole(){
        return 'Manager';
    }
}

module.exports = Manager;