"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("the department is " + this.name);
    };
    Department.prototype.getName = function () {
        return this.name;
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(name) {
        return _super.call(this, name) || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("the meeting agends of " + _super.prototype.getName.call(this) + " are ....");
    };
    return AccountingDepartment;
}(Department));
var ScienceDepartment = (function (_super) {
    __extends(ScienceDepartment, _super);
    function ScienceDepartment(name) {
        return _super.call(this, name) || this;
    }
    ScienceDepartment.prototype.printMeeting = function () {
        console.log("the meeting agends of " + _super.prototype.getName.call(this) + " are ....");
    };
    return ScienceDepartment;
}(Department));
var Departments = (function () {
    function Departments() {
    }
    return Departments;
}());
exports.Departments = Departments;
var accountDepart = new AccountingDepartment("Accounting");
accountDepart.printMeeting();
