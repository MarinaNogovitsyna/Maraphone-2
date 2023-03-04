const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    // Элемент находится над placeholder, в который хотим поместить:
    placeholder.addEventListener('dragover', dragover);
    // Находится в этой области:
    placeholder.addEventListener('dragenter', dragenter);
    // Вышли из этой области:
    placeholder.addEventListener('dragleave', dragleave);
    // Отпустили элемент:
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    // console.log('drag start', event.target);
    // Добавляем стиль, когда элемент начинают тянуть
    event.target.classList.add('hold');
    // Сделать так, чтобы первоначальный элемент не оставался при перетаскивании:
    setTimeout(() => event.target.classList.add('hide'), 0)
    
}

function dragend(event){
    // console.log('drag end');
    // Убираем стиль, когда элемент отпускают
    // event.target.classList.remove('hold');
    // event.target.classList.remove('hide');
    // То же самое:
     event.target.className = 'item'
}

function dragover(event) {
    event.preventDefault()
    console.log('drag over');
}

function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter');
}

function dragleave(event){
    event.target.classList.remove('hovered')
    console.log('drag leave');
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    console.log('drag drop');
    event.target.append(item)
}

