let Newname = document.getElementById('Newname');
let lastName = document.getElementById('lastName');
let number_email = document.getElementById('number_email');
let newPassword = document.getElementById('newPassword');
let brith_date = document.getElementById('brith_date');
let brith_month = document.getElementById('brith_Month');
let brith_years = document.getElementById('brith_years');

let getDATA = localStorage.getItem('datasignup');
let datasignup = getDATA ? JSON.parse(getDATA) : [];
// console.log(datasignup)

// console.log(existemail);
function formSub() {
    let existemail = datasignup.some(existEmail => {
        return existEmail.UserNumber === number_email.value
    })
    if (Newname.value == '' || lastName.value == '' || number_email.value == '' || newPassword.value == '' || brith_date.value == '' || brith_month.value == '' || brith_years.value == '') {
        alert('Form incorrect');
    } else if (existemail) {
        alert('This email is aready');
        Newname.value = '';
        lastName.value = '';
        number_email.value = '';
        newPassword.value = '';
    } else {
        console.log("else working")
        let formObj = {
            firstname: Newname.value,
            lastname: lastName.value,
            UserNumber: number_email.value,
            UserNewpassword: newPassword.value,
            UserDate: brith_date.value,
            UserMonth: brith_month.value,
            UserYears: brith_years.value,
        };
        // console.log(datasignup.UserNumber)
        console.log(formObj, "form obj")

        datasignup.push(formObj);
        localStorage.setItem('datasignup', JSON.stringify(datasignup));
        // Clear form fields
        Newname.value = '';
        lastName.value = '';
        number_email.value = '';
        newPassword.value = '';
        console.log('Form submitted successfully');
    }
}

let f_name = document.getElementById('f_name');
let f_password = document.getElementById('f_password');
let login = document.getElementById('login');
login.addEventListener('click', function() {
    let loggedInUser = datasignup.find(function(itemValue) {
        return (
            itemValue.UserNumber === f_name.value &&
            itemValue.UserNewpassword === f_password.value
        );
    });

    if (loggedInUser) {
        localStorage.setItem('lOGINUSER', JSON.stringify(loggedInUser));
        window.location.href = './Dashbord/index.html';
        console.log('Login successful');
        f_name.value = '';
        f_password.value = '';
    } else {
        alert('Invalid username or password');
        f_name.value = '';
        f_password.value = '';
    }
});