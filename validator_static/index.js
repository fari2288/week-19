class Validator {
    email = document.querySelector('#email').value;
    static isEmail(email) {
        let isEmail = false;
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value))
            isEmail = true;
        return isEmail;
    }
    domain = document.querySelector('#domain').value;
    static isDomain(domain) {
        let isDomain = false;
        if (/^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(domain.value))
            isDomain = true;
        return isDomain;
    }

    date = document.querySelector('#date').value;
    static isDate(date) {
        let isDate = false;
        if (/^(([1-9]|1[012])[-/.]([1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d)|((1[012]|0[1-9])(3[01]|2\d|1\d|0[1-9])(19|20)\d\d)|((1[012]|0[1-9])[-/.](3[01]|2\d|1\d|0[1-9])[-/.](19|20)\d\d)$/.test(date.value))
            isDate = true;
        return isDate;
    }
    phone = document.querySelector('#phone').value;
    static isPhone(phone) {
        let isPhone = false;
        if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone.value))
            isPhone = true;
        return isPhone;
    }
}


document.querySelector('button').addEventListener('click', () => {
    if (Validator.isEmail(email),
    Validator.isDomain(domain),
    Validator.isDate(date),
    Validator.isPhone(phone)
    ){
        console.log(Validator.isEmail(email));
        console.log(Validator.isDomain(domain));
        console.log(Validator.isDate(date));
        console.log(Validator.isPhone(phone))
    }
    else
    {
        console.log(Validator.isEmail(email));
        console.log(Validator.isDomain(domain));
        console.log(Validator.isDate(date));
        console.log(Validator.isPhone(phone))}
})