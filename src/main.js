import { render, zk_creatElement, Component } from "./react";
class MyCon extends Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      b: 2,
    };
  }
  render() {
    return (
      <div>
        <h1>这是一个组件函数</h1>
        <h2>{this.state.a.toString()}</h2>
        <h2>{this.state.b.toString()}</h2>
        <button
          onclick={() => {
            this.setState({ a: this.state.a+1 });
          }}
        >
          add
        </button>
        {this.childRen}
      </div>
    );
  }
}
console.log((<MyCon></MyCon>).v_dom)
// var a = zk_creatElement("div", {
//     id: "root",
//     "class": "root"
//   }, "222", zk_creatElement("div", {
//     name: "child"
//   }), zk_creatElement("div", {
//     name: "child"
//   }), zk_creatElement("div", {
//     name: "child"
//   }));
// let a = <div id="root" class="root">222<div name="child"></div><div name="child"></div><div
// a由babel后会变成上图的形式，会自动对子节点递归进行creatElement函数，因此只需要定义一个createElement函数即可。此函数只需要最终最终能将属性添加到dom上并且，能够将子节点也添加进去即可（无需递归）。
render(
  <MyCon name="main" class="my-con">
    <div>child 1</div>
  </MyCon>,
  document.body
);
