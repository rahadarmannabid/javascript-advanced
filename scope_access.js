let bonus=20;
function sum(first, second)
{
    let result = first + second+ bonus;
    if (result > 9)
    {
        const mood= "happy";
        console.log(mood);
    }
    return result;

}

const output = sum(3,7);
console.log(bonus);
console.log(output);


function stopWatch(){
    let count = 0
    return function(){
        count++;
        return count;
    }
}


const clock1 =stopWatch();
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

