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

function computeBarData(initialValue) {
    let barArray = [initialValue]
    const contrib = 1000
    const numYears = 20
    const ir = 0.0287
    for (var i = 0; i < numYears ; i++) {
        let oldVal = barArray[barArray.length-1]
        console.log(oldVal)
        let newVal = (oldVal+contrib)*(1+ir)
        barArray.push(newVal)
    }
    return barArray
}