class ElementWrapper {
    constructor(type) {
        this.dom = document.createElement(type)
    }
    setAttribute(key, value) {
        this.dom.setAttribute(key, value)
    }
    appendChild(child) {
        this.dom.appendChild(child.dom)
    }
}
class TextWrapper {
    constructor(content) {
        this.dom = document.createTextNode(content)
    }

}
export class Component {
    constructor(type) {
        this.props = Object.create(null)
        this.childRen = []
        this._dom = null
    }
    setAttribute(key, value) {
        this.props[key] = value
    }
    appendChild(child) {
        this.childRen.push(child)
    }
    get dom() {
        if (!this._dom) {
            this._dom = this.render().dom
        }
        return this._dom//不能添加else,拿到以后必须返回dom

    }
}
export function zk_creatElement(tagName, options, ...childRen) {
    let e
    if (typeof tagName === "string") {
        e = new ElementWrapper(tagName)
    } else {
        e = new tagName
    }
    for (let i in options) {
        e.setAttribute(i, options[i])
    }
    // for(let i of childRen){
    //     if(typeof i=="string"){
    //         i=new TextWrapper(i)
    //     }
    //     e.appendChild(i)
    // }未考虑数组的情况,即<MyCon><div></div></MyCon>,最后{this.children}，此时jsx会把this.children收集到当前的children数组，会出现就会出现appendChild(child)的情况。
    let insert = (children) => {
        for (let i of children) {
            if (typeof i == "string") {
                i = new TextWrapper(i)
            }
            if (Array.isArray(i)) {
                insert(i)
            }
            else{e.appendChild(i)}
        }
    }
    debugger
    insert(childRen)
    return e;
}
export function render(component, parentDom) {
    parentDom.appendChild(component.dom)
}