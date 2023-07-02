let privousData = localStorage.getItem('lOGINUSER');
let modifyData = JSON.parse(privousData)
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let birthday = document.getElementById('birthday');
let birth1 = document.querySelector('.birth1');
let birth2 = document.querySelector('.birth2');
let birth3 = document.querySelector('.birth3');
let post = document.getElementById('post');
// console.log(privousData, '==>>privousData');
// console.log(modifyData, '=>>>modifyData')
// console.log(modifyData.firstname, '=>>>');
let forminform = document.querySelector('.forminform');
Object.keys(modifyData).forEach(ele => {
    // console.log(modifyData[ele]);
    let sumName = modifyData.firstname + " " + modifyData.lastname;
    fullName.innerText = sumName;
    email.innerText = modifyData.UserNumber;
    birth1.innerHTML = modifyData.UserDate;
    birth2.innerHTML = modifyData.UserMonth;
    birth3.innerHTML = modifyData.UserYears;
});

let textarea = document.getElementById('textarea');
let postUI = document.querySelector('.postUI');

let btn_1 = document.getElementById('btn_1');
btn_1.addEventListener('click', btn$1);
// let newarr = [];
// console.log(newarr);
// let textStorage = localStorage.setItem('postValue', JSON.stringify(newarr));

function btn$1() {
    // console.log(textarea.value);
    // let b = postUI.innerHTML = textarea.value;
    // console.log(textarr);
    let b = textarea.value;
    let div1 = document.createElement('div');
    document.body.appendChild(div1);
    div1.innerHTML = b;
    let setvalue = localStorage.setItem('valuepost', JSON.stringify(div1.innerHTML))
    textarea.value = '';


}