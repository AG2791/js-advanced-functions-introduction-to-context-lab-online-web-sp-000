// Your code here
let createEmployeeRecord = function(employee){
    return {
        firstName: employee[0], familyName: employee[1],  title: employee [2], payPerHour: employee [3],  timeInEvents: [],  timeOutEvents: []
    }
}      


let createEmployeeRecords = function(employeeRecord) {
    return employeeRecord.map(function(employee){
        return createEmployeeRecord(employee)
    })
}



let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')
    
    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}


let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}