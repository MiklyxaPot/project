const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');
//получаем доступ к элементу

item.addEventListener('dragstart', dragstart);
//два события когда начали тянуть  и когда закончили, когда это событие происходит тогда выполнится функция, эти функции передаются вторым аргументом
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
   //на каждую итерацю(placeholders ) создаю переменную 
   placeholder.addEventListener('dragover', dragover);
   placeholder.addEventListener('dragenter', dragenter);
   placeholder.addEventListener('dragleave', dragleave); 
   placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event){
event.target.classList.add('hold');
//event это весь элемент item к которому появляется доступ вовремя сробатывания события
//во время этого события добовляем к эдементу класс hold, чтобы выделить
setTimeout(() => event.target.classList.add('hide'), 0);
//чтобы элемент удалялся при перетягивание, но оставался в мышке, нужно поставить задержку. callback функцию написать добавить класс hide
}

function dragend(event){
   // event.target.classList.remove('hold');
   //удаляем класс чтобы элемент ввернулся в изначальное состояние
   // event.target.classList.remove('hide');
   // event.target.classList.remove('hold','hold');
   event.target.className = 'item';
   //все эти записи делают одно и тоже: приводят элемент в изначальное состояние

}

function dragover(event){
   event.preventDefault();
   //сообшает браузеручто не надо дуйствовоть по умолчанию, 

}

function dragenter(event){
   event.target.classList.add('hovered');
   //показать визуальночто наведен и куда можно сбрасывать 
}

function dragleave(event){
   event.target.classList.remove('hovered');
   //чтобы не оставались наведение когда отводим перетаскивание
}

function dragdrop(event){
   event.target.classList.remove('hovered');
   event.target.append(item);
   //этот append вставляет строку с кодом в другое место в html. елемент становится в новом месте
}