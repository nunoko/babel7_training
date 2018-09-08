// Higher order function is function and return function
const add = x => y=> x+y
const add2 = add(2) // x=2
console.warn(add2(5))
function run(f){
    console.warn('start...')
    f()
    console.warn('end...')
}
run(()=> console.warn('yay'))