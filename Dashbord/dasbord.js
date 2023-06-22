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
    })
    // post.innerText = 'hi'
    // function posting(params) {
    //     let div = document.createElement('div');
    //     let textarea = document.createElement('textarea');
    //     console.log(textarea);
    //     post.appendChild(div);
    //     post.appendChild(textarea)
    //     div.className = 'divpost'
    //     console.log(div)


// }

// function upload(params) {
//     let img = document.createElement('div');
//     console.log(img)
// }