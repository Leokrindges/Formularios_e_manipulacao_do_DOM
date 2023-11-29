const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    const nameEl = document.getElementById('name').value
    const addressEl = document.getElementById('address').value
    const cityEl = document.getElementById('city').value
    const stateEl = document.getElementById('state').value
    const chargeEl = document.querySelector('input[name="charge"]:checked').value
    const curriculum = document.getElementById('curriculum').value

    console.log(nameEl);
    console.log(addressEl);
    console.log(cityEl);
    console.log(stateEl);
    console.log(chargeEl);
    console.log(validCheckBox());
    console.log(curriculum);

})

function validCheckBox() {
    const interestEl = document.querySelectorAll('input[name="interest"]:checked')
    const interest = []
    interestEl.forEach((e) => interest.push(e.value))

    if (interest.length === 0) {
        alert("Selecione uma ou mais áreas de interesse")
    } else {
        return interest
    }
}