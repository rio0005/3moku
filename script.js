const item = document.querySelectorAll('.item');

let count = 0;



for (let i = 0; i < 9; i++){
    item[i].addEventListener('click', () => {
        count++;
        // 奇数、偶数の判定
        if (count%2===1) {
            item[i].textContent = '〇'
            item[i].classList.add('maru')
        } else {
            item[i].textContent = '×'
            item[i].classList.add('batu')
        }
        if (item[0].textContent === '〇'&&
            item[1].textContent === '〇'&&
            item[2].textContent === '〇'
        ){
            console.log('〇の勝ち！')
        }
        if (item[0].textContent === '〇'&&
            item[3].textContent === '〇'&&
            item[6].textContent === '〇'
        ){
            console.log('〇の勝ち！')
        }
        if (item[0].textContent === '〇'&&
            item[4].textContent === '〇'&&
            item[8].textContent === '〇'
        ){
            console.log('〇の勝ち！')
        }
        if (item[3].textContent === '〇'&&
            item[4].textContent === '〇'&&
            item[5].textContent === '〇'
        ){
            console.log('〇の勝ち！')
        }
    });
};




