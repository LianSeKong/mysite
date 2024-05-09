var validate = require("validate.js");

const rules = {
    a: {
        presence: true,
        type: 'integer',
    },
    b: {
        presence: {
            allowEmpty: false,
        }

    }

}

console.log(validate({a: ''}, rules));