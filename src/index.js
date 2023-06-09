document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('table-body')

    fetch('http://localhost:3000/dogs')
      .then( res => res.json() )
      .then( dogs => {
        
        dogs.forEach(dog => {
            const row = document.createElement('tr')
            const name = document.createElement('td')
            const breed = document.createElement('td')
            const sex = document.createElement('td')
            const editDog = document.createElement('td')
            const btn = document.createElement('btn')
            btn.textContent = 'Edit Dog'

            name.textContent = dog.name
            breed.textContent = dog.breed
            sex.textContent = dog.sex
            editDog.appendChild(btn)

            row.append(name, breed, sex, editDog)
            tableBody.appendChild(row)
        });
      })
})

const createData = () => {
    document.createElement('td')
}