// SAMPLE employee Record
// const jimEmpRec = {
//     firstName: 'jim',
//     lastName: 'mith',
//     title: 'ceo',
//     payPerHour: '31.40',
//     timeInEvents: [{type: "TimeIn", hour: 0800, date: "2021-01-01",}, {type: "TimeIn", hour: 0800, date: "2021-01-02",}, {type: "TimeIn", hour: 0800, date: "2021-01-03",}],
//     timeOutEvents: [{type: "TimeOut", hour: 1800, date: "2021-01-01",},{type: "TimeOut", hour: 1800, date: "2021-01-02",}, {type: "TimeOut", hour: 1800, date: "2021-01-03",}],
// }

// // SAMPLE employee array
// const timEmpArray = ['tim', 'smith', 'cfo', 28]



/* Your Code Here */
function createEmployeeRecord(employeeInfoArray) {
    let empRecObj = {
        firstName: employeeInfoArray[0],
        familyName: employeeInfoArray[1],
        title: employeeInfoArray[2],
        payPerHour: employeeInfoArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return empRecObj
}

function createEmployeeRecords(arrayOfEmpInfoArrays) {
    let arrayOfEmpRecObj = arrayOfEmpInfoArrays.map(createEmployeeRecord)
    return arrayOfEmpRecObj
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createTimeInEvent(dateStamp) {
    const timeInDate = dateStamp.split(' ')[0]
    const timeInHour = parseInt(dateStamp.split(' ')[1])
    let timeInEventObj = {
        type: "TimeIn",
        hour: timeInHour,
        date: timeInDate,
    }
    this.timeInEvents.push(timeInEventObj)
    return this
}

function createTimeOutEvent(dateStamp) {
    const timeOutDate = dateStamp.split(' ')[0]
    const timeOutHour = parseInt(dateStamp.split(' ')[1])
    let timeOutEventObj = {
        type: "TimeOut",
        hour: timeOutHour,
        date: timeOutDate,
    }
    this.timeOutEvents.push(timeOutEventObj)
    return this
}

function hoursWorkedOnDate(dateStamp) {
    let timeIn = this.timeInEvents.filter(workday => workday.date === dateStamp).map(obj => obj.hour)
    let timeOut = this.timeOutEvents.filter(workday => workday.date === dateStamp).map(obj => obj.hour)
    let hoursWorked = (timeOut - timeIn)/100
    return hoursWorked
}

function wagesEarnedOnDate(dateStamp) {
    let dailyWages = hoursWorkedOnDate.call(this, dateStamp) * this.payPerHour
    return dailyWages
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find(empRecObj => empRecObj.firstName === firstName)
}

function calculatePayroll(empRecObjArray) {
    return empRecObjArray.reduce((total, empRec) => {
        return total += allWagesFor.call(empRec)
    }, 0)
}