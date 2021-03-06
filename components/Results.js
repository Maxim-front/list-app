import Component from "./Component.js";

export default class Results extends Component {
    constructor(selector, items = []) {
        super(selector);
        this._items = items;
        this._searchResults = items;
        this.render();
    }

    searchItems(text) {
        this._searchResults = this._items.filter((item) =>
            item.toLowerCase().includes(text)
        );
        this.render();
    }

    get items() {
        return this._items;
    }

    addItem(item) {
        this._items.push(item);
        this._searchResults = this._items;
        this.render();
    }

    removeElement(value) {
        const index = this._searchResults.indexOf(value)
        this._searchResults.splice(index, 1)
        this.render()
    }

    render() {
        this.$element.innerHTML = this._searchResults.reduce((result, item) => {
            const newElement = `<li>
          <div>${item}</div>
          <span>
            <button id="edit">&#9998;</button>
            <button id="remove">&#10006;</button>
          </span>
        </li>`;
            result += newElement;
            return result;
        }, "");
    }
}