var number = function (busStops) {
    let totalSum = 0;
    busStops.forEach(element => {
        totalSum+=element[0];
        totalSum-=element[1];
    });
    return totalSum ;
}