class Tabber {
    constructor(tabBlock) {
        this.name = tabBlock;
        this.tabs = Array.from(tabBlock.getElementsByClassName('tab'));
        this.contents = Array.from(tabBlock.getElementsByClassName('tab__content'));        
    }
}

const tabersArray = [];

Array.from(document.getElementsByClassName('tabs')).forEach(tab => {
    tabersArray.push(new Tabber(tab));
});

tabersArray.forEach((tabber) => {
    tabber.tabs.forEach((tab, index) => {
        tab.addEventListener('click', function(e) {
            if (tab.classList.contains('tab_active')) {
                return;
            } else {
                const activeTab = tabber.name.getElementsByClassName('tab_active').item(0);
                const activeContent = tabber.name.getElementsByClassName('tab__content_active').item(0);
                activeTab.classList.remove('tab_active');
                activeContent.classList.remove('tab__content_active');

                tab.classList.add('tab_active');
                tabber.contents[index].classList.add('tab__content_active');
            }
        });
    })
});