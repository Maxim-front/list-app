import Component from "./Component.js";

export default class RemoveButton extends Component {
    _onClick = () => {

    };
    constructor(selector) {
        super(selector);
        this.$element = document.querySelector(selector);

    }

    set onClick(handler) {
        this._onClick = handler
        this.$element.addEventListener("click", this._onClick);
    }


    removeElement(string, searchResults) {
        const index = searchResults.indexOf(string)
        searchResults.splice(index, 1)
    }
}