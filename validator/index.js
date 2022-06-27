class Validator {
    constructor(email, domain, date, phone) {
        this.email = email;
        this.domain = domain;
        this.date = date;
        this.phone = phone;
    }

    
    
    
    isEmail(email) {
        let isEmail = false;
        email = document.querySelector('#email').value;
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            isEmail = true;
        return isEmail;
    }
    isDomain(domain) {
        domain = document.querySelector('#domain').value;
        let isDomain = false;
        if (/^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(domain))
            isDomain = true;
        return isDomain;
    }

    isDate(date) {
    date = document.querySelector('#date').value;
        let isDate = false;
        if (/^(([1-9]|1[012])[-/.]([1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d)|((1[012]|0[1-9])(3[01]|2\d|1\d|0[1-9])(19|20)\d\d)|((1[012]|0[1-9])[-/.](3[01]|2\d|1\d|0[1-9])[-/.](19|20)\d\d)$/.test(date))
            isDate = true;
        return isDate;
    }
    isPhone(phone) {
        let isPhone = false;
        phone = document.querySelector('#phone').value;
        if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone))
            isPhone = true;
        return isPhone;
    }
}

let validator = new Validator(email, domain, date, phone)

document.querySelector('button').addEventListener('click', () => {

    if (validator.isEmail(email),
        validator.isDomain(domain),
        validator.isDate(date),
        validator.isPhone(phone)
    ) {
        console.log(validator.isEmail(email));
        console.log(validator.isDomain(domain));
        console.log(validator.isDate(date));
        console.log(validator.isPhone(phone))
    } else {
        console.log(validator.isEmail(email));
        console.log(validator.isDomain(domain));
        console.log(validator.isDate(date));
        console.log(validator.isPhone(phone))
    }
})