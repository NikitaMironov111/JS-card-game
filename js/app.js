let cards = document.querySelectorAll('.cards');
let win = document.querySelector('.win_window');
let control = document.querySelectorAll('.control__panel > p');
let moves = document.querySelector('#info1');
let count = document.querySelector('#info2');


let bool = true;
document.querySelector('.button').addEventListener('click', start);

function start() {
    document.querySelector('.field__container').addEventListener('click', showCard);
    let val1 = [];
    let val2 = [];
    let targets;
    let move = 0;
    let overLap = 0;
    if(bool === true) {
        bool = false;
        win.classList.add('hide');
        count.innerHTML = overLap;
        moves.innerHTML = move;
        
        for(el of control) {
            el.classList.remove('hide');
        }
        function getRandom() {
            return Math.trunc(Math.random() * (9 - 1) + 1)
        }
        
        do{
            let randNum = getRandom();
            if(val1.includes(randNum)) {
                randNum = getRandom();
            }else {
                val1.push(randNum);
            }
        }while(val1.length != cards.length / 2);

        do{
            let randNum = getRandom();
            if(val2.includes(randNum)) {
                randNum = getRandom();
            }else {
                val2.push(randNum);
            }
        }while(val2.length != cards.length / 2);

        val1 = [...val1, ...val2];

        setTimeout(function() {
            for(let i = 0; i < cards.length; i++) {
                cards[i].style.backgroundImage = `url(img/img${val1[i]}.png)`;
                cards[i].style.visibility = 'visible';
                cards[i].classList.add(`${val1[i]}`);
            }
        }, 1000);
        setTimeout(function() {
            for(let i = 0; i < cards.length; i++) {
                cards[i].style.backgroundImage = `url(img/cards_fon.png)`;
            }
        }, 3000);
    }
    

    function showCard(e) {
        let arr = Array.from(e.target.classList);
        move += 0.5;
        if(arr.includes('1')) {
            e.target.style.backgroundImage = `url(img/img${1}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('2')) {
            e.target.style.backgroundImage = `url(img/img${2}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('3')) {
            e.target.style.backgroundImage = `url(img/img${3}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('4')) {
            e.target.style.backgroundImage = `url(img/img${4}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('5')) {
            e.target.style.backgroundImage = `url(img/img${5}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('6')) {
            e.target.style.backgroundImage = `url(img/img${6}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('7')) {
            e.target.style.backgroundImage = `url(img/img${7}.png)`;
            e.target.classList.add('check');
        }else if (arr.includes('8')) {
            e.target.style.backgroundImage = `url(img/img${8}.png)`;
            e.target.classList.add('check');
        }
        if(move % 1 == 0) {
            moves.innerHTML = move;
        }

        targets = document.querySelectorAll('.check');

        function check() {
            if(targets[0].style.backgroundImage == targets[1].style.backgroundImage){
                targets[0].style.visibility = 'hidden';
                targets[1].style.visibility = 'hidden';
                targets[0].classList.add('hidden');
                targets[1].classList.add('hidden');
                targets[1].classList.remove('check');
                targets[0].classList.remove('check');
                overLap += 1;
                count.innerHTML = overLap;
            }else {
                targets[0].style.backgroundImage = `url(img/cards_fon.png)`;
                targets[1].style.backgroundImage = `url(img/cards_fon.png)`;
                targets[1].classList.remove('check');
                targets[0].classList.remove('check');
            }
            let hidden = document.querySelectorAll('.hidden');
            if(hidden.length === cards.length) {
                win.classList.remove('hide');
                bool = true;
            }
        }
         if(targets.length == 2) {
            setTimeout(check, 1000);
        }
    }
}
