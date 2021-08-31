
const menusArr = [];

Array.from(document.getElementsByClassName('menu_main')).forEach(x =>
    menusArr.push({menu: x})
);

menusArr.forEach(menuObj => {
    menuObj.subs = Array.from(menuObj.menu.getElementsByClassName('menu_sub'));
    menuObj.links = (menuObj.subs).map(sub => sub.closest('.menu__item').getElementsByClassName('menu__link').item(0));
})

menusArr.forEach((menuObj)=> {
    menuObj.links.forEach((link, i) => {
        link.onclick = () => {
            if(menuObj.subs[i].classList.contains('menu_active')) {
                menuObj.subs[i].classList.remove('menu_active'); 
            } else {
                const activeSub = menuObj.menu.getElementsByClassName('menu_active').item(0); 
                if(activeSub) {
                    activeSub.classList.remove('menu_active');
                }                
                menuObj.subs[i].classList.add('menu_active');                    
            };
        } 
    });
});


