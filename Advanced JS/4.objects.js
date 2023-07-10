// iterate through objects

let obj = {
    key1 : 'name1',
    key2: 'name2',
    key3: 'name3',
    key4: 'name4'
}

// Object.keys() and Object.values()

let keys = Object.keys(obj)
let values = Object.values(obj)
// console.log(keys)
// console.log(values)

keys.forEach((key)=>{
console.log(obj[key])
})