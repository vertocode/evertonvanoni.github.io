let totalslides = 4
let currentslide = 0;

let slider = document.querySelectorAll('.slider--width')
let item = document.querySelectorAll('.slider--item')

//Avalia para saber se o slide vai voltar ou então avançar ao final.
function goprev()
{
    currentslide--;
    if(currentslide < 0)
    {
        currentslide = totalslides - 1;
    }
    updateMargin();
}
function goprev2()
{
    currentslide--;
    if(currentslide < 0)
    {
        currentslide = totalslides - 1;
    }
    updateMargin2(); 
}
function goprev3()
{
    currentslide--;
    if(currentslide < 0)
    {
        currentslide = totalslides - 1;
    }
    updateMargin3(); 
}
function goprev4()
{
    currentslide--;
    if(currentslide < 0)
    {
        currentslide = totalslides - 1;
    }
    updateMargin4(); 
}

//Avalia para saber se o slide vai avançar ou então voltar ao inicio.
function gonext()
{
    currentslide++;
    if(currentslide > (totalslides - 1))
    {
        currentslide = 0;
    }
    updateMargin();
}
function gonext2()
{
    currentslide++;
    if(currentslide > (totalslides - 1))
    {
        currentslide = 0;
    }
    updateMargin2();
}
function gonext3()
{
    currentslide++;
    if(currentslide > (totalslides - 1))
    {
        currentslide = 0;
    }
    updateMargin3();
}
function gonext4()
{
    currentslide++;
    if(currentslide > (totalslides - 1))
    {
        currentslide = 0;
    }
    updateMargin4();
}

//Função onde faz a imagem avançar.
function updateMargin()
{
    let sliderwidth = document.querySelector('.slider--item').clientWidth;
    let newmargin = (currentslide * sliderwidth);
    document.querySelector(".slider--width").style.marginLeft = `-${newmargin}px`
}
function updateMargin2()
{
    let sliderwidth = document.querySelector('.doisitem').clientWidth;
   let newmargin2 = (currentslide * sliderwidth);    document.querySelector(".doiswidth").style.marginLeft = `-${newmargin2}px`
}
function updateMargin3()
{
    let sliderwidth = document.querySelector('.tresitem').clientWidth;
   let newmargin3 = (currentslide * sliderwidth);    document.querySelector(".treswidth").style.marginLeft = `-${newmargin3}px`
}
function updateMargin4()
{
    let sliderwidth = document.querySelector('.quatroitem').clientWidth;
   let newmargin4 = (currentslide * sliderwidth);    document.querySelector(".quatrowidth").style.marginLeft = `-${newmargin4}px`
}

//Intervalos para avançar automaticamente.
setInterval(gonext, 4000)
setInterval(gonext2, 4000)
setInterval(gonext3, 4000)
setInterval(gonext4, 4000)