const RENDER_TO_DOM = Symbol("render");
class ElementWrapper {
  constructor(type) {
    this.dom = document.createElement(type);
  }
  setAttribute(key, value) {
    if (key.match(/^on([\s\S]+)$/)) {
      this.dom.addEventListener(
        RegExp.$1.replace(/^[\s\S]/, (c) => c.toLocaleLowerCase()),
        value,
        false
      );
    } else {
      this.dom.setAttribute(key, value);
    }
  }
  appendChild(child) {
    let range = document.createRange();
    range.setStart(this.dom, this.dom.childNodes.length);
    range.setEnd(this.dom, this.dom.childNodes.length);
    child[RENDER_TO_DOM](range);
  }
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.dom);
  }
}
class TextWrapper {
  constructor(content) {
    this.dom = document.createTextNode(content);
  }
  [RENDER_TO_DOM](range) {
    range.deleteContents();
    range.insertNode(this.dom);
  }
}
export class Component {
  constructor(type) {
    this.props = Object.create(null);
    this.childRen = [];
    this._dom = null;
    this._range = null;
  }
  setAttribute(key, value) {
    this.props[key] = value;
  }
  appendChild(child) {
    this.childRen.push(child);
  }
  [RENDER_TO_DOM](range) {
    this._range = range;
    this.render()[RENDER_TO_DOM](range);
  }
  reRender() {
    this._range.deleteContents();
    this[RENDER_TO_DOM](this._range);
  }
  setState(new_state) {
    if (this.state == null || typeof this.state !== "object") {
      this.state = new_state;
      this.reRender();
      return;
    }
    let merge = function (old_state, new_state) {
      for (let i in new_state) {
        if (old_state[i] !== null || typeof old_state[i] !== "object") {
          old_state[i] = new_state[i];
        } else {
          merge(old_state[i], new_state[i]);
        }
      }
    };
    merge(this.state, new_state);
    this.reRender();
  }
  // get dom() {
  //     if (!this._dom) {
  //         this._dom = this.render().dom
  //     }
  //     return this._dom不能添加else,拿到以后必须返回dom,改为将render_to_dom方法写到textWrapper和textWrapper

  // }
}
export function zk_creatElement(tagName, options, ...childRen) {
  let e;
  if (typeof tagName === "string") {
    e = new ElementWrapper(tagName);
  } else {
    e = new tagName();
  }
  for (let i in options) {
    e.setAttribute(i, options[i]);
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
        i = new TextWrapper(i);
      }
      if (Array.isArray(i)) {
        insert(i);
      } else {
        e.appendChild(i);
      }
    }
  };
  insert(childRen);
  return e;
}
export function render(component, parentDom) {
  let range = document.createRange();
  range.setStart(parentDom, 0);
  range.setEnd(parentDom, parentDom.childNodes.length);
  component[RENDER_TO_DOM](range);
}
