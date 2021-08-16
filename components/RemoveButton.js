import Component from "./Component.js";

export default class RemoveButton extends Component {

    _value = ""

    constructor(selector) {
        super(selector);
        this.$element = document.querySelector(selector);
    }

    set onClick(handler) {

        this.$element.addEventListener("click", ({ target }) => {

            if (target.id === "remove") {
                this._value = target.closest("li").querySelector("div").textContent
                handler()
            }
        });
    }

    get value() {
        return this._value
    }

}