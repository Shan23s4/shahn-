let dis=document.getElementsByClassName("screenin");
let buttons=document.querySelector("button")
let btnArr=Array.from(buttons)
btnArr.forEach( (bt) => {
    bt.addEventListener('click',(e)=>{
        console.log(e.target)
    })
    
});
