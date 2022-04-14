const coffee_result = document.getElementById('coffee-result')
const coffee_btn =  document.getElementById('coffee_btn')


coffee_btn.addEventListener('click',getRandomCoffee)


function getRandomCoffee() {
    const choice = document.querySelector('input').value
    const url = 'https://xkcd.com/info.0.json'+choice
  
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
             
         
    });
}
