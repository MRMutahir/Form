let privousData = localStorage.getItem('lOGINUSER')
console.log(privousData);
let modifyData = JSON.parse(privousData);
console.log(modifyData)
Object.keys(modifyData).forEach(ele => {
        let forminform = document.querySelector('.forminform');
        console.log(forminform);
        console.log(modifyData[ele]);
        // forminform.innerHTML =

    })
    // forminform.innerHTML = modifyData.firstname;
    // forminform.innerHTML = modifyData.lastname
    // forminform.innerHTML = modifyData.UserNumber
    // forminform.innerHTML = modifyData.UserYear
    // forminform.innerHTML = modifyData.UserMonth