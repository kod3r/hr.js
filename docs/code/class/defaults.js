var Person = yapp.Class.extend({
    defaults: {
        firstname: "",
        lastname: "nobody"
    }
});

var nobody = new Person();
alert(nobody.options.lastname);