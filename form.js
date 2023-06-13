let f_name = document.getElementById('f_name');
let f_password = document.getElementById('f_password');
let login = document.getElementById('login');
// console.log(f_name, f_password, login);

//   ye phela function hen abhi joson m koi value nh hen .
login.addEventListener('click', () => {
    f_name.value === '' ? alert('Invalid username or password') : console.log('very good');
    f_password.value === '' ? alert('Create a new account') : console.log('very good');
    f_name.value = '';
    f_password.value = '';
});


// Newname  ; lastName :number_email :newPassword :male :female :custom

let Newname = document.getElementById('Newname');
let lastName = document.getElementById('lastName');
let number_email = document.getElementById('number_email');
let newPassword = document.getElementById('newPassword');
let male = document.getElementById('male');
let female = document.getElementById('female');
let custom = document.getElementById('custom');
let brith_date = document.getElementById('brith_date');
let brith_month = document.getElementById('brith_date');
let brith_years = document.getElementById('brith_date');
let spac_date = document.querySelector('.spac_date');
// console.log(Newname, lastName, number_email, newPassword, male, female, custom, brith_date, brith_month, brith_years);
// a.addEventListener('click', () => {
//     console.log('hi')
// })
function handleSelectChange(event) {
    let a = event.target.value;
    console.log(a)
}

function formSub() {
    console.log('Newname=>>  ' + Newname.value)
    console.log('lastName=>>  ' + lastName.value)
    console.log('number_email=>>  ' + number_email.value)
    console.log('newPassword=>>  ' + newPassword.value)
        // console.log('male=>>  ' + male.value)
        // console.log('female=>>  ' + female.value)
        // console.log('custom=>>  ' + custom.value)
    handleSelectChange(event)
    obj()
}

function obj() {
    let formObj = {
        firstname: Newname.value,
        lastname: lastName.value,
        UserNumber: number_email.value,
        UserNewpassword: newPassword.value,
        date: brith_date.value,
        month: brith_month.value,
        years: brith_years.value
    }
    console.log(formObj)
}
let formData = []

// date(6)