/**
 * Created by Andrey on 13.03.2018.
 */

class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;

        view.on('add', this.addItem.bind(this));
        view.on('update', this.updateItem.bind(this));
        view.on('getAll',this.getItems.bind(this));

        view.show(this.model.getItems());
    }
    
    addItem(title) {
        const item = this.model.addItem({
            id: Date.now(),
            name: title,
            completed: false
        });
        
        this.view.addItem(item);
        this.getItems();
    }

    updateItem({id,title}) {
        const item = this.model.updateItem({
            id: id,
            name: title,
            completed: false
        });

        this.view.updateItem(item);
        this.getItems();
    }

    getItems() {
        const items = this.model.getItems();
        this.view.getItems(items);
    }
}
export default Controller;