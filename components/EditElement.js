import Component from "./Component.js";

export default class EditElement extends Component {

    _value = ""


    constructor(selector) {
        super(selector)
        this.$element = document.querySelector(selector)
        console.log(this.$element)
    }

    set onClick(handler) {
        this.$element.addEventListener("click", ({ target }) => {
            if (target.id === "edit") {
                this._value = target.closest("li").querySelector("div").setAttribute("contenteditable", "true")
                this._value = target.closest("li").querySelector("div").classList.add('background');
                handler()
            }
        })
    }

    inputElement(selector) {
        const $inputElement = document.querySelector(selector)
        $inputElement.value = this._value
        return $inputElement.value
    }

    get value() {
        return this._value
    }
}