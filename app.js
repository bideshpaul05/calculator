let previousText = document.querySelector('.previous')
let cuurentText = document.querySelector('.current')
let numbtn = document.querySelectorAll('.num')
let operationbtn = document.querySelectorAll('.operation')
let equalbtn = document.querySelector('.equals')
let clearbtn= document.querySelector('.delete')
let Allclearbtn = document.querySelector('.clear')

let currentOpperand = ""
let previousOpperand = ""
let operation = undefined
function handlebtn()
{
    numbtn.forEach(btn=>{
        btn.addEventListener('click',()=>{
        currentOpperand===0?currentOpperand="":''
        if(btn.textContent ==='.'&& currentOpperand.includes('.')) return
        currentOpperand= `${currentOpperand}${btn.textContent}`
        updateDisplay()
    })
})
        operationbtn.forEach(btn=>{
            btn.addEventListener('click',()=>{
                if(currentOpperand==="")return
                operation = btn.textContent
                operate()
                updateDisplay()
            })
        })

        Allclearbtn.addEventListener('click',()=>{
            currentOpperand=0
            previousOpperand=""
            operation=null
            updateDisplay()
        })
    clearbtn.addEventListener('click',()=>{
        currentOpperand = currentOpperand.toString().slice(0,-1)
        updateDisplay()
    })
    equalbtn.addEventListener('click',()=>{
        calculate()
        updateDisplay()
    })
}
function calculate(){
    const curr = parseFloat(currentOpperand)
    const prev = parseFloat(previousOpperand)
    let results;

    if( isNaN(prev)  ||  isNaN(curr) ) return 
      operation === '+' ? results = prev  + curr
    : operation === '-' ? results =  prev - curr
    : operation === '*' ? results = prev * curr
    : operation === '÷' && curr === 0 ? results = "You Can't divide by 0"
    : operation === '÷' ? results = prev / curr 
    : '';
    //Math.round((results + Number.EPSILON) * 100) / 100;
    currentOpperand = results
    operation = undefined
    previousOpperand = ''

}
function operate()
{
if(currentOpperand==='')return
if(previousOpperand!==''){
    calculate()
}
previousOpperand = `${currentOpperand}${operation}`
currentOpperand=''
}
function updateDisplay()
{
    cuurentText.textContent=currentOpperand
    previousText.textContent=previousOpperand

}


handlebtn()