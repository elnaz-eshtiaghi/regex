// .....eye-move.....

let _main = document.getElementsByTagName('main')[0]
let _eyes = document.getElementsByClassName('eye')

_main.addEventListener('mousemove', (e) => {
    let x = ((e.clientX) - 25) / 100
    let y = ((e.clientY) - 25) / 100
    _eyes[0].children[0].style.transform = 'translate(' + x + 'px , ' + y + 'px)'
    _eyes[1].children[0].style.transform = 'translate(' + (-x) + 'px , ' + (y) + 'px)'

})




let inp = document.getElementsByTagName('input')
let l = document.getElementsByTagName('label')
let _span = document.getElementsByTagName('span')[0]
let _strong = document.getElementsByTagName('strong')
let icn = document.querySelectorAll('span>i')
let _form = document.getElementsByClassName('form')[0]
let _chance = 0

// .....pass..... 

// .....icon.....

let i = 1

_span.addEventListener('click', (e) => {

    if (i % 2) {
        icn[0].classList.add('bi-eye-slash-fill')
        inp[1].setAttribute('type', 'text')

    }
    else {
        icn[0].classList.remove('bi-eye-slash-fill')
        inp[1].setAttribute('type', 'password')
    }
    i++

})

// .....regex.....

let chance = 0



inp[1].addEventListener('keyup', (e) => {
    _strong[1].style.display = 'block'
    e.target.style.borderBottomColor = '#eb3370'
    inp[0].style.borderBottomColor = 'rgb(92, 92, 92)'
    _strong[0].style.display = 'none'
    _form.style.transform = 'translatey(-60px)'

    chance = 0
    let _value = e.target.value
    l[1].style.display = 'none'
    if (_value.length >= 8) {
        inp[1].style.borderBottomColor = 'orange'
        

        if (
            (_value.search(/[a-z]/i)) >= 0
        ) {
            chance++
        }

        if (
            (_value.search(/[0-9]/)) >= 0
        ) {
            chance++
        }

        if (
            (_value.search(/[!@#$%^&*()_+~`=-|}{?><}]/)) >= 0
        ) {
            chance++
        }
        let w = 0
        let colorNAme = ''
        switch (chance) {
            case 0: bg = 'orange', tx= 'your password is good'; break;
            case 1:  bg = 'yellow', tx= 'your password is good'; break;
            case 2:  bg = 'green', tx= 'your password is strong'; break;
            case 3: bg = 'blue',tx= 'your password is very strong'; break;
        }
        
        inp[1].style.borderBottomColor = bg
        l[1].style.display = 'block'
        l[1].style.color = bg
        l[1].innerHTML = tx


    }
    else {
        inp[1].style.borderBottomColor = '#eb3370'
        l[1].style.display = 'block'
        l[1].style.color = 'red'
        
        
    }




})

// .....email.....

inp[0].addEventListener('keyup', (e) => {
    _strong[0].style.display = 'block'
    _strong[1].style.display = 'none'
    e.target.style.borderBottomColor = '#eb3370'
    inp[1].style.borderBottomColor = 'rgb(92, 92, 92)'
    _form.style.transform = 'translatey(0)'

    let _value = e.target.value
    if (
        (_value == '') ||
        (_value == null) ||
        ((_value.search(/\s/)) == 0) ||
        ((_value.search(/<script/)) >= 0) ||
        ((_value.search(/[ا-ی]/)) >= 0)) {

        l[0].style.display = 'block'
        l[0].style.color = 'red'

    }
    else{
        if(
            // (val.search(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/))>= 0

            ((_value.search(/[@]/))>=3)&&
            ((_value.search(/\s/))==-1)&&
            ((_value.search(/[.]/))>=0)&&
            (((_value.lastIndexOf('.'))+2)<=(_value.length))


        ){
            l[0].style.display = 'none'

        }else{
            
        l[0].style.display = 'block'
        l[0].style.color = 'red'
        }
    }



})

// .....error.... 

function _send(e) {
    if (chance < 3) {
        

    }
    else {

    }
}





