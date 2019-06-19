const sequenceSum = (begin, end, step) => {
    if ((end-begin>0 && step<0) || (end-begin<0 && step>0)) {
        return 0;
    }
    const n=Math.floor((end-begin)/step)+1;
    return (n/2)*((2*begin)+((n-1)*step));
}
