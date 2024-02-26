
console.log('client-side js running...')


const weatherForm = document.querySelector('form ')
const search =  document.querySelector('input')
const message1 = document.querySelector('#message-one')
const message2 = document.querySelector('#message-two')


weatherForm.addEventListener('submit',(e) => {
    
    e.preventDefault()

    const address = search.value
    console.log(address)

    message1.textContent = 'Loading...'
    // message2.textContent = ''
    


    
    fetch('http://localhost:3000/weather?address='+ address).then((res) => {
        res.json().then((data) => {

            if (data.e) {
                message1.textContent = data.e
            } else {
                message1.textContent = data.forecast.title
                // message2.textContent =  data.forecast.longitude
                console.log(data)
                // console.log(data.forecast.longitude)
            }
        })
    })
})