/**
 * Created by Andrey on 13.03.2018.
 */
import Event from './Event'
import Data from './Data'

class Model extends Event{
    constructor(state) {
        super();
        this.items = state || [];

        this.data = new Data();
    }

    getItems() {
        return this.items;
    }

    getItem(id) {
        return this.items.find(item => item.id == id);
    }

    addItem(item){
        this.items.push(item);

        this.data.saveData(this.items);

        return item;
    }

    updateItem(data){
        const item = this.getItem(data.id);
        Object.keys(item).forEach(key =>item[key] = data[key]);

        this.data.saveData(this.items);

        return item;
    }

    removeItem(id){
        const index = this.items.findIndex(item => item.id == id);
        if(index  > -1){
            this.items.splice(index,1);
        }
        this.data.saveData(this.items);
    }

}

export default Model;