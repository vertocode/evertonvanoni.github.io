const nome = window.prompt(`Qual é o seu nome? 😊`)
if (nome == "" || nome == null)
{
    html.innerHTML = `Olá, tudo bem contigo? `
}
else
{
    const html = document.querySelector('.name')
    html.innerHTML = `Olá ${nome}, tudo bem contigo? ` 
}
