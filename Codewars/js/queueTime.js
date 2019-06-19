function queueTime(customers, n) {
    let tile =[];
    const tileSize = Math.min(customers.length,n);
    if (customers.length===0) {
        return 0;
    }
    if (n>customers.length) {
        return Math.max(...customers)
    }
    for (let i = 0; i < tileSize; i++) {
        tile.push(customers.shift());
        
    }
    let total=0;
    while (tile.reduce((a, b) => a + b, 0)!=0) {
        tile = tile.map((i) => {
            return i-1;
        })
        for (let i = 0; i < tile.length; i++) {
            if (customers.length!=0) {
                if (tile[i]===0){
                    tile[i]=customers.shift();
                }
                
            }
        }
        total++;
    }
    console.log(total);
    return total;
  }
  queueTime([1,2,3,4,5], 100);