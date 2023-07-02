let privousData = localStorage.getItem('lOGINUSER');
let modifyData = JSON.parse(privousData);
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let birthday = document.getElementById('birthday');
let birth1 = document.querySelector('.birth1');
let birth2 = document.querySelector('.birth2');
let birth3 = document.querySelector('.birth3');
let post = document.getElementById('post');
let ui = document.getElementById('ui');
// console.log(ui);


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

let clock = document.getElementById('clock');
clock.innerHTML = new Date().toLocaleString()
let textarea = document.getElementById('textarea');
let mainpost = document.querySelector('.mainpost');

let btn_1 = document.getElementById('btn_1');
btn_1.addEventListener('click', btn$1);

function btn$1() {
    let b = textarea.value;
    let div1 = document.createElement('div');
    // mainpost.appendChild(div1);
    mainpost.prepend(div1);
    // <i style="position: absolute; right: 280px; top: 780px;" class="fa-solid fa-caret-down"></i>
    div1.innerHTML = ` 
    <div id="ui" style="position: relative;">
    <i style=""class="fa-solid fa-caret-down"></i>
${b}
    </div>   <div class="like">
    <li> <i class="fa-regular fa-heart"></i>like</li>
    <li><i class="fa-regular fa-comment"></i>comment</li>
    <li> <i class="fa-regular fa-share-from-square"></i>share</li>
</div>`;
    let divHTML = div1.innerHTML
    let divsetvalue = localStorage.setItem('uivalues', divHTML);
    // console.log(divsetvalue);

    let privousDiv = localStorage.getItem('divHTML');
    console.log(privousDiv);
    // let modifyDiv = JSON.parse(privousData);




}