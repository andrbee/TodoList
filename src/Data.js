/**
 * Created by Andrey on 18.03.2018.
 */

function Data() {
    const name = 'TodoList';
    this.name = name;
    return {
        saveData : function (items) {
            const json = JSON.stringify(items);
            localStorage.setItem(name, json);
        },
        loadData : function() {
            const data = localStorage.getItem(name);
            return JSON.parse(data);
        }
    };
}

export default Data;