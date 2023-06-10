document.addEventListener('DOMContentLoaded', () => {
  const tableBody = document.getElementById('table-body')

  fetch('http://localhost:3000/dogs') 
    .then( res => res.json() )
    .then( dogs => {
      
      dogs.forEach(dog => {
        const inputForm = document.getElementById('dog-form')
        const row = document.createElement('tr')
        const name = document.createElement('td')
        const breed = document.createElement('td')
        const sex = document.createElement('td')
        const editDog = document.createElement('td')
        const btn = document.createElement('button')
        btn.textContent = 'Edit Dog'

        name.textContent = dog.name
        breed.textContent = dog.breed
        sex.textContent = dog.sex
        editDog.appendChild(btn)

        btn.addEventListener('click', () => {
          inputForm.name.value = dog.name
          inputForm.breed.value = dog.breed
          inputForm.sex.value = dog.sex
        })

        inputForm.addEventListener('submit', (e) => {
          e.preventDefault()
          
          fetch(`http://localhost:3000/dogs/${dog.id}`, {
            method: 'PATCH',
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              name: inputForm.name.value,
              breed: inputForm.breed.value,
              sex: inputForm.sex.value,
            }) 
          })
            .then( res => res.json() )
            .then( newDog => console.log(newDog))
        })

        row.append(name, breed, sex, editDog)
        tableBody.appendChild(row)
      });
    })
})

const handleSubmit = (e) => {
  e.preventDefault()
  
  fetch(`http://localhost:3000/dogs/${dog.id}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify() 
  })
    .then( res => res.json() )
    .then( newDog => console.log(newDog))
}