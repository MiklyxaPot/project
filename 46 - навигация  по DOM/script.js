// console.log(document.body);
// console.log(document.documentElement);
console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-first="1"]').nextElementSibling);

for(let node of document.body.childNodes){
   if (node.nodeName == '#text'){
      break;}
      console.log(node);
}