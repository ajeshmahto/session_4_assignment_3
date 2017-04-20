abstract class Department {
    public name:string;
    constructor(name){
        this.name=name;
    }
    printName():void {
        console.log("the department is "+ this.name);
    }
    abstract printMeeting():void;

    getName(){
        return this.name;
    }
}

 class AccountingDepartment extends Department{
    constructor(name:string){
        super(name);
    }

    printMeeting(){
       console.log("the meeting agends of " + super.getName() + " are ....");
    }
}


 class ScienceDepartment extends Department{
    constructor(name:string){
        super(name);
    }

    printMeeting(){
        console.log("the meeting agends of " + super.getName()+ " are ....");
    }
}

export class Departments {
    
   

}
 
let  accountDepart = new AccountingDepartment("Accounting");
accountDepart.printMeeting();