console.log('%c HI', 'color: firebrick')


document.addEventListener('DOMContentLoaded', function fetchDogs(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(res => res.json())
    .then(dogData => renderDogs(dogData))

})

    function renderDogs(dogs) {
    dogs.message.forEach(dogUrl => {
        const 
        dogImg = document.createElement('img')
            dogImg.src = dogUrl

        dogImg.style.maxWidth = '400px'
       document.getElementById('dog-image-container').append(dogImg)

    })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

fetch(breedUrl)
.then(res => res.json())
.then(breedData => { 
    const breedArray = Object.keys(breedData.message)

    const breedContainer = document.querySelector('#dog-breeds')

    breedArray.forEach(text => {
        const newList = document.createElement('li')

        newList.textContent = text;

        breedContainer.append(newList)

        newList.addEventListener('click', e => {
            newList.style.color = 'green'
    })



    const breedDropdown = document.querySelector('select')

    breedDropdown.addEventListener('change', filterBreeds);
    
    function filterBreeds(event) {
       let letter = event.target.value

      let breedFiltered =  breedArray.filter((breed) => {
           return breed[0] === letter

        //  const ul = document.querySelector('ul')



       })

       console.log(breedFiltered)

       breedContainer.innerHTML = "";

       filterBreeds(breedFiltered)

    }}

    

       
       













    )}
   










)}
