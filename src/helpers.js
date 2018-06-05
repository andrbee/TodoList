/**
 * Created by Andrey on 13.03.2018.
 */


function createElement(type, props, ...children){
    const elem = document.createElement(type);
    Object.keys(props).forEach(key => {
        if(key.indexOf('data-',0) === 0){
            elem.setAttribute(key,props[key]);
        }
        elem[key] = props[key]
    });

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }
        elem.appendChild(child);
    });

    return elem;
}

export default createElement;