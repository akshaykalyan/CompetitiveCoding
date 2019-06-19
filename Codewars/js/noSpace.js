function noSpace(x){
    let total = "";
    for (let i = 0; i < x.length; i++) {
        if (x[i]!=" ") {
            total+=x[i];
        }
    }
    return total;
}