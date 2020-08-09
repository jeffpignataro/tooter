let form = document.querySelector('form');
form.addEventListener("submit", formSubmit);

async function formSubmit(event) {
    event.preventDefault();

    let message = form.querySelector('textarea').value
    let data = await Get('http://localhost:5000/');
    console.log(data.message);

    await Post('http://localhost:5000/', { 'data': message });
}