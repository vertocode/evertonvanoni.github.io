let totalslides = 4
let currentslide = 0;
let currentslide2 = 0;
let currentslide3 = 0;
let currentslide4 = 0;
let currentslide5 = 0;
let currentslide6 = 0;

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
    currentslide2--;
    if(currentslide2 < 0)
    {
        currentslide2 = totalslides - 1;
    }
    updateMargin2(); 
}
function goprev3()
{
    currentslide3--;
    if(currentslide3 < 0)
    {
        currentslide3 = totalslides - 1;
    }
    updateMargin3(); 
}
function goprev4()
{
    currentslide4--;
    if(currentslide4 < 0)
    {
        currentslide4 = totalslides - 1;
    }
    updateMargin4(); 
}
function goprev5()
{
    currentslide5--;
    if(currentslide5 < 0)
    {
        currentslide5 = totalslides - 1;
    }
    updateMargin5(); 
}
function goprev6()
{
    currentslide6--;
    if(currentslide6 < 0)
    {
        currentslide6 = totalslides - 1;
    }
    updateMargin6(); 
}
//Avalia para saber se o slide vai avançar ou então voltar ao inicio.
function gonext()
{
    currentslide++;
    if(currentslide > (totalslides - 1))
    {
        currentslide = 0;
    }
    updateMargin1();
}
function gonext2()
{
    currentslide2++;
    if(currentslide2 > (totalslides - 1))
    {
        currentslide2 = 0;
    }
    updateMargin2();
}
function gonext3()
{
    currentslide3++;
    if(currentslide3 > (totalslides - 1))
    {
        currentslide3 = 0;
    }
    updateMargin3();
}
function gonext4()
{
    currentslide4++;
    if(currentslide4 > (totalslides - 1))
    {
        currentslide4 = 0;
    }
    updateMargin4();
}
function gonext5()
{
    currentslide5++;
    if(currentslide5 > (totalslides - 1))
    {
        currentslide5 = 0;
    }
    updateMargin5();
}
function gonext6()
{
    currentslide6++;
    if(currentslide6 > (totalslides - 1))
    {
        currentslide6 = 0;
    }
    updateMargin6();
}
//Função onde faz a imagem avançar.
function updateMargin1()
{
    let sliderwidth1 = document.querySelector('.umitem').clientWidth;
    let newmargin1 = (currentslide * sliderwidth1);
    document.querySelector(".umwidth").style.marginLeft = `-${newmargin1}px`
}
function updateMargin2()
{
    let sliderwidth2 = document.querySelector('.doisitem').clientWidth;
   let newmargin2 = (currentslide2 * sliderwidth2);    
   document.querySelector(".doiswidth").style.marginLeft = `-${newmargin2}px`
}
function updateMargin3()
{
    let sliderwidth3 = document.querySelector('.tresitem').clientWidth;
   let newmargin3 = (currentslide3 * sliderwidth3);   
    document.querySelector(".treswidth").style.marginLeft = `-${newmargin3}px`
}
function updateMargin4()
{
    let sliderwidth4 = document.querySelector('.quatroitem').clientWidth;
   let newmargin4 = (currentslide4 * sliderwidth4);    
   document.querySelector(".quatrowidth").style.marginLeft = `-${newmargin4}px`
}
function updateMargin5()
{
    let sliderwidth5 = document.querySelector('.cincoitem').clientWidth;
   let newmargin5 = (currentslide5 * sliderwidth5);   
   document.querySelector(".cincowidth").style.marginLeft = `-${newmargin5}px`
}
function updateMargin6()
{
    let sliderwidth6 = document.querySelector('.seisitem').clientWidth;
   let newmargin6 = (currentslide6 * sliderwidth6);   
   document.querySelector(".seiswidth").style.marginLeft = `-${newmargin6}px`
}

//Intervalos para avançar automaticamente.
setInterval(gonext, 5000)
setInterval(gonext2, 5000)
setInterval(gonext3, 5000)
setInterval(gonext4, 5000)
setInterval(gonext5, 5000)
setInterval(gonext6, 5000)