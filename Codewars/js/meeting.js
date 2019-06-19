function meeting(s) {
    s=s.toUpperCase().split(";");
    let array =[];
    s.forEach(element => {
        const i= element.split(":");
        array.push(i[1]+", "+i[0]);
    });
    array=array.sort();
    let str ="";
    array.forEach(element => {
        str=str+`(${element})`
    });
    return str;
}
