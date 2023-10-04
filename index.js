// algorithm

//test cases





function createEmployeeRecord(employeeArray) {
     
        const employeeRecord = {
            firstName:employeeArray[0],
            familyName:employeeArray[1],
            title:employeeArray[2],
            payPerHour:employeeArray[3],
            timeInEvents:[],
            timeOutEvents:[]
        }

return employeeRecord 
    }

 
function createEmployeeRecords(employeeRecords) {
    return employeeRecords.map(employeeRecord => {
        return createEmployeeRecord(employeeRecord)
    }) 
}

function createTimeInEvent(employeeRecord, timeIn) {

    let dateStamp = timeIn.split(" ")
    let timeInEvent = {
        type:"TimeIn",
        date:dateStamp[0], 
        hour:parseInt(dateStamp[1])  
    }

 employeeRecord.timeInEvents.push(timeInEvent)
 return employeeRecord
    }

function createTimeOutEvent(employeeRecord, timeOut) {
    
    let dateStamp = timeOut.split(" ") 
    let timeOutEvent = {
        type:"TimeOut",
        date:dateStamp[0],
        hour:parseInt(dateStamp[1])
    }   
employeeRecord.timeOutEvents.push(timeOutEvent)
return employeeRecord

}

function hoursWorkedOnDate(employeeRecord, dateStamp) { 
    
    let timeInObject = employeeRecord.timeInEvents.find(timeInEvent => timeInEvent.date === dateStamp)
    let timeOutObject = employeeRecord.timeOutEvents.find(timeOutEvent => timeOutEvent.date === dateStamp)
    let hoursWorked = (timeOutObject.hour - timeInObject.hour)/100

return hoursWorked
}

function wagesEarnedOnDate(employeeRecord, dateStamp) {
    
    let wagesEarned = hoursWorkedOnDate(employeeRecord, dateStamp) * employeeRecord.payPerHour
    return wagesEarned
   
}


function allWagesFor(employeeRecord) {
    
    let allDatesEmployee = employeeRecord.timeInEvents.map((dateObject) => { 
        return dateObject.date 
    });

   let allWagesEmployee = allDatesEmployee.reduce((totalWages, dateString)=> {
        return totalWages + wagesEarnedOnDate(employeeRecord, dateString)
   }, 0) 

   return allWagesEmployee 
}  
//    console.log('allWagesEmployee:', allWagesEmployee)
//     // console.log(employeeRecord)
//     console.log('dates:', allDatesEmployee) 

function calculatePayroll(allEmployeeRecords) {
    
    let payroll = allEmployeeRecords.reduce((accumulator, employeeObject) => {
        return accumulator + allWagesFor(employeeObject)
    }, 0)
return payroll
    // console.log('payroll:', payroll)
    // console.log(allEmployeeRecords)

}

   


// allWagesFor({
//     firstName: 'Simba',
//     familyName: '',
//     title: 'King',
//     payPerHour: 100,
//     timeInEvents: [
//       { type: 'TimeIn', date: '2019-01-01', hour: 900 },
//       { type: 'TimeIn', date: '2019-01-02', hour: 1000 }
//     ],
//     timeOutEvents: [
//       { type: 'TimeOut', date: '2019-01-01', hour: 1300 },
//       { type: 'TimeOut', date: '2019-01-02', hour: 1300 }
//     ]
//   }
//   )
// in my own word
// build a time card and payroll application using the record-oriented approach.
// employees arrive and insert their time card check in
// employees to depart insert their time card check out
// we want to record the number of hours worked for each employee according to their time card and pay them.


// //Big O Notation

// const array1 = [1, 4, 9, 16];

// Pass a function to map
// const map1 = array1.map((x) => {
//     debugger
//     return x * 2
// });

// console.log(map1);
// Expected output: Array [2, 8, 18, 32]
