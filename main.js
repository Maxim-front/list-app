import items from "./models/items.js";

import CreateButton from "./components/CreateButton.js";
import Results from "./components/Results.js";
import Search from "./components/Search.js";
import RemoveButton from "./components/RemoveButton.js";
import EditElement from "./components/EditElement.js";

const createButton = new CreateButton("#create");

const results = new Results("#results", items);
const removeButton = new RemoveButton("#results")
const editElement = new EditElement('#results')

const search = new Search("#search", (text) => {
    results.searchItems(text);
    if (results.items.includes(search.value) || text === "") {
        createButton.disabled = true;
    } else {
        createButton.disabled = false;
    }
});

createButton.onClick = () => {
    results.addItem(search.value);
    search.clear();
    createButton.disabled = true;
};

removeButton.onClick = () => {
    results.removeElement(removeButton.value)
}

editElement.onClick = () => {

}