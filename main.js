const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

  allDoctorBills= [
 {
     officeName: "triStar southern hills",
     streetAddress: "391 wallace rd",
     doctorName: "Dr. Lee",
     patientName: "Daneille",
     visitDate: "05-23-2020",
     amountBill: "50.00",
     dueDate: "06-23-2020"
 },
 {
    officeName: "triStar southern hills",
    streetAddress: "391 wallace rd",
    doctorName: "Dr. Lee",
    patientName: "Daneille",
    visitDate: "06-23-2020",
    amountBill: "75.00",
    dueDate: "07-23-2020"
 },
 {
    officeName: "triStar southern hills",
    streetAddress: "391 wallace rd",
    doctorName: "Dr. Lee",
    patientName: "Daneille",
    visitDate: "09-23-2020",
    amountBill: "100.00",
    dueDate: "10-23-2020"
 }
]

const outputElement = document.querySelector("#doctorBills")
   allDoctorBills.forEach(doctorBill => {
    for(const value of Object.values(doctorBill)){
        outputElement.innerHTML += `<div>${value}</div>`
    }
})


const firstDoctorBill = allDoctorBills[0]

// Now iterate its keys
outputElement.innerHTML += "<h1>Properties</h1>"
for (const key of Object.keys(firstDoctorBill)) {
  outputElement.innerHTML += `<div>${key}</div>`
}

// outputElement.innerHTML += "<h1>Doctor Bill List</h1>"

// allDoctorBills.forEach(doctorBill => {
//     outputElement.innerHTML += "<hr/>"

//     for (const entry of Object.entries(doctorBill)) {
//         outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
//     }
// })
// Iterate the array of cars. Individual objects stored in `car`.
// outputElement.innerHTML += "<h1>Doctor Bill List</h1>"
// allDoctorBills.forEach(doctorBill => {

    // Iterate all of the values of the current car
//     for (const value of Object.values(doctorBill)) {
//       outputElement.innerHTML += `<div>${value}</div>`
//     }
// })



