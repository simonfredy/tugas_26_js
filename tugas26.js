function tugasDuaPuluhEnam() {
    
    var data = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    for (var i = 0; i < data.length; i++) {
        if (isFinite(data[i]) === true) {
            console.log("Angka ", data[i], "NOT Infinity");
        } else {
            console.log("Angka ", data[i], "Infinity");
        }  
    }

}
tugasDuaPuluhEnam();