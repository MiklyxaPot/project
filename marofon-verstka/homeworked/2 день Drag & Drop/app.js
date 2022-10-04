const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for(const placeholder of placeholders){
   placeholder.addEventListener('dragover', dragover);
   placeholder.addEventListener('dragenter', dragenter);
   placeholder.addEventListener('dragleave', dragleave); 
   placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event){
   /*event.target.innerHTML = "";*/
   // event.target.innerHTML += `<div class="item" draggable="true">Ай, больно, отпусти!!!</div>`;
   item.textContent = 'Ай, больно, отпусти!!!';
   event.target.classList.add('hold');
   setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event){
   item.textContent = 'Перетащи меня';
   /*event.target.innerHTML = "";
   event.target.innerHTML += `<div class="item" draggable="true">Перетащи меня</div>`;*/
	event.target.classList.remove('hold', 'hide');
}

function dragover(event){
   event.preventDefault();
}

function dragenter(event){
   event.target.classList.add('hovered');
}

function dragleave(event){
   event.target.classList.remove('hovered');
}

function dragdrop(event){
   event.target.classList.remove('hovered');
   event.target.append(item);
}