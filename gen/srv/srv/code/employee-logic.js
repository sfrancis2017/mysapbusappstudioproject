/**
 * 
 * @On(event = { "CREATE" }, entity = "dEVTESTPROJECTSrv.Employee")
 * @param {cds.Request} request - User information, tenant-specific CDS model, headers and query parameters
 * @param {Function} next - Callback function to the next handler
 */
module.exports = async function(request, next) {
    const { Employee } = cds.entities;

    // Get the highest salary by employee ID and employee name
    const highestSalaryEmployee = await SELECT.one.from(Employee)
        .orderBy({ ref: ['employeeSalary'], sort: 'desc' });

    if (highestSalaryEmployee) {
        console.log(`Highest Salary Employee: ID = ${highestSalaryEmployee.employeeID}, Name = ${highestSalaryEmployee.employeeName}, Salary = ${highestSalaryEmployee.employeeSalary}`);
    } else {
        console.log('No employees found.');
    }

    return next();
}