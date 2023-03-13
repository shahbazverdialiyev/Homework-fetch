const input=document.querySelector("input")
const btn= document.querySelector("button")
function Search(){
    if (btn.innerText=='search') {
        input.style.visibility='visible'
        btn.innerHTML=`<span class="material-symbols-outlined">
        close
        </span>`
    }
    else{
        input.style.visibility='hidden'
        btn.innerHTML=`<span class="material-symbols-outlined">
        search
        </span>`
    }
}