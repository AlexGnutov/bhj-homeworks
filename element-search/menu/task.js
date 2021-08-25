
const submenus = document.querySelectorAll('.menu_sub');
const menusWithSubs = Array.from(submenus).map(x => x.closest('.menu__item'));
const menusWithSubsLinks = menusWithSubs.map(x => x.getElementsByClassName('menu__link').item(0));

// console.log(submenus);
// console.log(menusWithSubs);
// console.log(menusWithSubsLinks);

menusWithSubsLinks.forEach((x, index) => {
    x.onclick = () => {
        document.querySelectorAll('.menu_active').forEach(x => x.classList.remove('menu_active'));
        submenus.item(index).classList.add('menu_active');
    };
});

