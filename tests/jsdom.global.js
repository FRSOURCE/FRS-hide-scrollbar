/*window.addEventListener('click', function (ev) {
  console.log('window click', ev.target.constructor.name,
    ev.currentTarget.constructor.name);
});

document.addEventListener('click', function (ev) {
  console.log('document click', ev.target.constructor.name,
    ev.currentTarget.constructor.name);
});*/

/*
console.log('not bubbling');

var event = new window.Event('click');
document.dispatchEvent(event);

console.log('bubbling');

event = new window.Event('click', {bubbles: true});
document.dispatchEvent(event);*/
