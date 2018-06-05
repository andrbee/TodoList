/**
 * Created by Andrey on 15.03.2018.
 */

class Event {
    constructor() {
        this.events = {};
    }

    on(type, callback){
        this.events[type] = this.events[type] || [];
        this.events[type].push(callback);
    }

    trigger(type, arg){
        if(this.events[type]) {
            this.events[type].forEach(callback => callback(arg));
        }
    }
}

export default Event;