var TestView = yapp.View.extend({
    tagName: "div",

    className: "component-testview",

    template: "views/test",

    events: {
        "click .button": "open"
    }
});