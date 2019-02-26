function parseData(myInput) {
    // Convert object of objects into array of objects
    let newArray = []
    for (var key in myInput) {
        if (myInput.hasOwnProperty(key)) {
            const newRow = Object.assign({"date": new Date(key)}, {"close": parseFloat(myInput[key]["4. close"])})
            newArray.push(newRow)
        }
    }
  
    return newArray
  }