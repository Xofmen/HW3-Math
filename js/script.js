let arr = [9.9, 4, -0.95, 7.004, -4, -7.004]//индекс q
for(let q = 0; q < arr.length; q++){
    console.log(
    Math.round(arr[q]),' ', 
    Math.floor(arr[q]),' ',
    Math.ceil(arr[q])
    );
    console.log(Math.pow(Math.round(arr[q]), 3));
    console.log(Math.pow(Math.floor(arr[q]), 3));
    console.log(Math.pow(Math.ceil(arr[q]), 3));
        let sum =  Math.pow(Math.round(arr[q]), 3) + Math.pow(Math.floor(arr[q]), 3) + Math.pow(Math.ceil(arr[q]), 3)
        console.log(sum.toString()); 
}

















