const router = require('express').Router();
let employees = require("./../models/employee.model");

router.route('/').get((req, res) => {
    employees.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {  
   const employeeId=req.body.employeeId;
   const employeeFirstName=req.body.employeeFirstName;
   const employeeLastName =req.body.employeeLastName;
   const employeeDOB=req.body.employeeDOB;
   const employeeNIC=req.body.employeeNIC;
   const employeeAddress=req.body.employeeAddress;
  const employeeEmail = req.body.employeeEmail;
  const employeeMobileNumber = req.body.employeeMobileNumber;
  const employeeDepartment = req.body.employeeDepartment;
  const employeePosition=req.body.employeePosition;

  const newEmployees = new employees({  
    employeeId,
    employeeFirstName,
    employeeLastName,  
    employeeDOB,  
    employeeNIC,
    employeeAddress,
    employeeEmail,
    employeeMobileNumber,
    employeeDepartment,
    employeePosition
  });
  newEmployees
    .save()
    .then(() => res.json("Added Suucessfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route('/:id').get((req, res) => {
    employees.findById(req.params.id)
    .then(defects => res.json(employees))
    .catch(err => res.status(400).json('Error' +err));
});

router.route('/:id').delete((req, res)=>{
    employees.findByIdAndDelete(req.params.id)
    .then(()=> res.json('employees Deleted'))
    .catch(err => res.status(400).json('Error: '+err))
});

router.route('/update/:id').put((req, res) => {
    employees.findById(req.params.id)
    .then(employees => {        
        employees.employeeFirstName=req.body.employeeFirstName;
        employees.employeeLastName =req.body.employeeLastName;
        employees.employeeDOB=req.body.employeeDOB;
        employees.employeeNIC=req.body.employeeNIC;
        employees.employeeAddress=req.body.employeeAddress;
        employees.employeeEmail = req.body.employeeEmail;
        employees.employeeMobileNumber = req.body.employeeMobileNumber;
        employees.employeeDepartment = req.body.employeeDepartment;
        employees,employeePosition=req.body.employeePosition;

        employees.save()
        .then(()=> res.json('employees Updated'))
        .catch(err => res.status(400).json('Error: ' +err));
    })
    .catch(err => res.status(400).json('Error: ' +err));
})

module.exports = router;