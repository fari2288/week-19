class Cat {
    constructor(nickname, breed, food, gender) {
        this.nickname = nickname;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
    }
}

let button_ok = document.querySelector('#button_ok');

button_ok.addEventListener('click', (evt) => {
    evt.preventDefault();

    const nickname = document.querySelector('#nickname').value;
    const breed = document.querySelector('#breed').value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;

    let food = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (i = 0; i < checkboxes.length; i++) {
        food.push(checkboxes[i].value);
    }

    const cat = new Cat(nickname, breed, food, gender);
    console.log(nickname, breed, food, gender);
});



// class Cat {
// constructor(nickname, breed, food, gender ){
//     this.nickname= nickname;
//     this.breed= breed;
//     this.food=food;
//     this.gender=gender;
// }
// }

// document.querySelector('#button_ok').addEventListener('click', ()=>{

// const nickname=document.querySelector('#nickname').value;
// const breed=document.querySelector('#breed').value;

// const gender=document.querySelector('[name="gender"]:checked')?.value;

// let food=[];
// let checkboxes=document.querySelectorAll('[type="checkbox"]:checked')
// for(i=0;i<checkboxes.length;i++){
//     food.push(checkboxes[i].value);
// }
// // const cat1=new Cat(nickname, breed, food, gender)
// console.log(cat1);
// })