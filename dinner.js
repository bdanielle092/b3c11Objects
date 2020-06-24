allDinners = [
    {
        name: "spaghetti",
        type: "pasta",
        ethnicity: "italian"

    },
    {
        name: "biryani",
        type: "chicken",
        ethnicity: "indian"
    },
    {
        name: "tocas",
        type: "chicken",
        ethnicity: "mexican"
    }

]

const outputArticle = document.querySelector("#dinner")

outputArticle.innerHTML += "<h1>Dinner List</h1>"

allDinners.forEach(dinner => {
    outputArticle.innerHTML += "<hr/>"

    for (const entry of Object.entries(dinner)) {
        outputArticle.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`
    }
})

// const firstDinner = allDinners[0] 
// outputArticle.innerHTML += "<h1>Properties</h1>"
// for(const key of object.keys(firstDinner)) {
//     outputArticle.innerHTML += `<div>${key}</div>`
// }

// outputArticle.innerHTML += "<h1>Dinner List</h1>"
// allDinners.forEach(dinner => {
//     for(const value of Object.values(dinner)){
//         outputArticle.innerHTML += `<div>${value}</div>`
//     }
// })




