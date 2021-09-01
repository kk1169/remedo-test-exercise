const testArray = [40,30,90,20,60,70,100,10];

// Sorting in ascending order
const ascSortedArray = testArray.sort((x, y)=>{
    return x-y;
})

console.log('Sorted Array in Ascending Order: ');
console.log(ascSortedArray);

// Sorting in descending order
const descSortedArray = testArray.sort((x, y)=>{
    return y-x;
})
console.log('Sorted Array in Desending Order: ');
console.log(descSortedArray);

