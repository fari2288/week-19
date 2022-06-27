class Validator {
    
    static isEmail(email) {
        email = document.querySelector('#email').value;
        let isEmail = false;
        if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
            isEmail = true;
        return isEmail;
    }
    
    static isDomain(domain) {
        domain = document.querySelector('#domain').value;
        let isDomain = false;
        if (/^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}\.(xn--)?([a-z0-9\-]{1,61}|[a-z0-9-]{1,30}\.[a-z]{2,})$/.test(domain))
            isDomain = true;
        return isDomain;
    }
    
    static isDate(date) {
        let isDate = false;
        date = document.querySelector('#date').value;
        if (/^(([1-9]|1[012])[-/.]([1-9]|[12][0-9]|3[01])[-/.](19|20)\d\d)|((1[012]|0[1-9])(3[01]|2\d|1\d|0[1-9])(19|20)\d\d)|((1[012]|0[1-9])[-/.](3[01]|2\d|1\d|0[1-9])[-/.](19|20)\d\d)$/.test(date))
            isDate = true;
        return isDate;
    }
    
    static isPhone(phone) {
        let isPhone = false;
        phone = document.querySelector('#phone').value;
        if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone))
            isPhone = true;
        return isPhone;
    }
}


document.querySelector('button').addEventListener('click', () => {
    if (Validator.isEmail(email),
        Validator.isDomain(domain),
        Validator.isDate(date),
        Validator.isPhone(phone)
    ) {
        console.log(Validator.isEmail(email));
        console.log(Validator.isDomain(domain));
        console.log(Validator.isDate(date));
        console.log(Validator.isPhone(phone))
    } else {
        console.log(Validator.isEmail(email));
        console.log(Validator.isDomain(domain));
        console.log(Validator.isDate(date));
        console.log(Validator.isPhone(phone))
    }
})