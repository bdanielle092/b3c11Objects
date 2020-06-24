// const dateVisited = "visitDate"
// const owed = "amountBilled"
// const patient = "patientName"

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
        outputElement.inner += `<div>${value}</div>`
    }
})