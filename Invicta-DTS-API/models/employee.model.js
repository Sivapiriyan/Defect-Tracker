const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    employeeId: { type: Number },
    employeeFirstName: { type: String, required: true },
    employeeLastName: { type: String, required: true },
    employeeDOB: { type: String, required: true },
    employeeNIC: { type: String, required: true },
    employeeAddress: { type: String, required: true },
    employeeEmail: { type: String, required: true },
    employeeMobileNumber: { type: String, required: true },
    employeeDepartment: { type: String, required: true },
    employeePosition: { type: String, required: true }
}, {
    timestamps: true,
});
const employees = mongoose.model('employees', employeeSchema);

module.exports = employees;