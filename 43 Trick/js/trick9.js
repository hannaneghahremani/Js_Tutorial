let startAt = performance.now();
for(let i = 0 ; i < 1500 ; i++)
{
    console.log(i);
}
let endAt = performance.now();
console.log(endAt-startAt);
