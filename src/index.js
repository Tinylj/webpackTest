import './component/lh-css.css'
import '../static/img/1.png'
import printMe from './component/print.js';

function fn() {
    console.log("aaaa")
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = "hahaha";
    btn.innerHTML = "按钮";
    btn.onclick = printMe;
    element.appendChild(btn);
    return element;
}
document.body.appendChild(fn());
if(module.hot) { // 监听模块热更新
    module.hot.accept('./component/print.js', function(){
        console.log("print.js更新了");
        printMe();
    })
}