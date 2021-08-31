const dropdownsArray = []; //Сюда будем...

//...собирать все выпадающие списки на странице
const dropdowns = Array.from(document.getElementsByClassName('dropdown'));

//создадим для каждого списка объект со всеми необходимыми ссылками
dropdowns.forEach((x) => {
    dropdownsArray.push({
        element: x,
        value: x.getElementsByClassName('dropdown__value').item(0),
        list: x.getElementsByClassName('dropdown__list').item(0),
        dropdownLinks: Array.from(x.getElementsByClassName('dropdown__link'))
    })
});

//После загрузки страницы назначим обработчики
window.onload = () => {
    
    dropdownsArray.forEach(elem => { //на заголовки списков
        elem.value.addEventListener('click', function() {
            if (elem.list.classList.contains('dropdown__list_active')){
                elem.list.classList.remove('dropdown__list_active');
            } else {    
                elem.list.classList.add('dropdown__list_active');
            }
        });
        elem.dropdownLinks.forEach(link => { //на поля для выбора
            link.addEventListener('click', function() {
                elem.value.textContent = this.textContent.trim();
                elem.list.classList.remove('dropdown__list_active');                
            })
        })
    });
};
    
