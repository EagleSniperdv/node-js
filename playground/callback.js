// setTimeout(() => {
// console.log('yeah')
// },4000)

// const names = ['Andrew','Peter','Paul']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })

// console.log(shortNames)

// const geocode = (address,callback) => {
//     setTimeout(() => {
//         const data ={
//             longitude:0,
//             latitude:0
//         }
//         callback(data)
//         // return data
//     },2000)
// }

// geocode('Philadelphia', (d) => {

//     console.log(d)
// })


const add = (num1,num2,callback) => {
    
    setTimeout(() => {
        callback(num1 + num2)
    },2000)
}
add(1, 4, (sum) => {
    console.log(sum)
})