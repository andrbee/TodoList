/**
 * Created by Andrey on 13.03.2018.
 */
import Event from './Event'
import createElement  from './helpers';

class View extends Event{
    constructor() {
        super();

        this.app = document.getElementById('todo_app');
        this.todoList = document.getElementById('todo__list');
        this.todoForm = document.getElementById('todo__form');
        this.input = document.getElementById('todo__form__input');

        this.todoForm.addEventListener('submit', this.handleAddItem.bind(this));
    }

    createListElement(item) {
        const label = createElement('label',{className: 'todo__item__text'},item.name);
        const textarea = createElement('textarea',{className: 'todo__item__area hidden'});
        const todoItem = createElement('li',{className: 'todo__item', 'data-id': item.id }, label, textarea);
        return this.addEventsListener(todoItem);
    }

    handleAddItem(event) {
        event.preventDefault();
        const title = this.input.value;
        if(!title){
            alert('Введите в поле текст !');
            return;
        }
        this.trigger('add', title);
    }

    addEventsListener(item) {
        const label = item.querySelector('.todo__item__text');
        const textarea = item.querySelector('.todo__item__area');
        label.addEventListener('click',this.editItem.bind(this));
        textarea.addEventListener('blur',this.changeItem.bind(this));
        return item;
    }
    editItem(event){
        const label = event.target;
        const parent = label.parentNode;
        const textarea = parent.querySelector('.todo__item__area');
        textarea.value = label.innerHTML;
        label.classList.add('hidden');
        textarea.classList.remove('hidden');
        textarea.focus();
    }
    changeItem(event) {
        event.preventDefault();
        const textarea = event.target;
        const title = textarea.value;
        const parent = textarea.parentNode;
        const id = parent.getAttribute('data-id');
        this.trigger('update', {id, title});
    }
    updateItem(item) {
        if(!item){alert('Не удалось сохранить Todo!'); return;}
        const parent = this.todoList.querySelector('[data-id="'+ item.id+'"]');
        const label = parent.querySelector('.todo__item__text');
        const textarea = parent.querySelector('.todo__item__area');
        label.innerHTML = item.name;
        textarea.classList.add('hidden');
        label.classList.remove('hidden');
        this.trigger('getAll');        
    }
    addItem(item) {
        const todo = this.createListElement(item);
        this.input.value = '';
        this.todoList.appendChild(todo);
    }
    
    getItems(items) {
        // console.clear();
        // console.table(items);
    }

    show(items) {
        items.forEach(item => {
            this.todoList.appendChild(this.createListElement(item));
        })
    }
}

export default View;