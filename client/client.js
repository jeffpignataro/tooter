let form = document.querySelector('form');
let btn = form.querySelector('button')

form.addEventListener("submit", formSubmit);

async function formSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:5000/').then(response =>{
        console.log(response.json());
    });
    alert(form['txtMessage'].value);
}