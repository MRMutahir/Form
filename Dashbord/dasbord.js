let privousData = localStorage.getItem('lOGINUSER');
let modifyData = JSON.parse(privousData)
let fullName = document.getElementById('fullName');
let email = document.getElementById('email');
let birthday = document.getElementById('birthday');
console.log(privousData, '==>>privousData');
console.log(modifyData, '=>>>modifyData')
console.log(modifyData.firstname, '=>>>');
let forminform = document.querySelector('.forminform');
Object.keys(modifyData).forEach(ele => {
        console.log(modifyData[ele]);
        let sumName = modifyData.firstname + " " + modifyData.lastname;
        let sumDateBir = modifyData.UserDate + modifyData.UserMonth + modifyData.UserYears;
        console.log(sumName);
        console.log(sumDateBir);
        fullName.innerText = sumName;
        email.innerText = modifyData.UserNumber;
        // birthday.innerHTML = `${sumDateBir}`;
    })
    // forminform.innerHTML = modifyData.firstname;
    // forminform.innerHTML = modifyData.lastname
    // forminform.innerHTML = modifyData.UserNumber
    // forminform.innerHTML = modifyData.UserYear
    // forminform.innerHTML = modifyData.UserMonth