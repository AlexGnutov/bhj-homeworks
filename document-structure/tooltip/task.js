class Additions {
    static hidePopup(linksArray) { //Блокирует всплытие title у ссылок
        linksArray.forEach(link => {
            link._title = link.title;
            link.onmouseover = function() {
                this.title = '';
            }
            link.onmouseout = function() {
                this.title = this._title;
            }
        })
    }

    static addPopupAdvice(linksArray) {//Добавим к каждой ссылке подсказку
        const tipsArray = [];
        linksArray.forEach(elm => {
            const tip = document.createElement('div');
            tip.textContent = elm.getAttribute('title');
            tip.className = 'tooltip';
            elm.insertAdjacentElement('afterend', tip);
            tipsArray.push(tip);
        });
        return tipsArray;
    }

    static addLinkClickHandlers(linksArray, tipsArray) { //Добавим всплытие по нажатию
        linksArray.forEach((elm, index) => {
            elm.addEventListener('click', function(e) {
                const currentTip = tipsArray[index];
                
                if (!currentTip.matches('.tooltip_active')) {
                    const remove = document.querySelector('.tooltip_active');
                    if (remove) {
                        remove.classList.remove('tooltip_active');
                    }
                }
    
                Additions.getTipCoords(elm, currentTip);
                currentTip.classList.toggle('tooltip_active');            
            });
        });
    }

    //Вычислим и зададим положение в зависимости от значения data-position
    static getTipCoords(elm, tip) { 
        const elmPos = elm.getBoundingClientRect();
        const linkTopBrd = elmPos.top;
        const linkLeftBrd = elmPos.left;
        const linkRightBrd = elmPos.right;
        const linkWidth = elmPos.height;
                
        const position = elm.dataset.position || 'bottom'; //Положение по умолчанию    

        switch (position) {
            case 'bottom': {
                    tip.style.left = linkLeftBrd + "px";
                    tip.style.top = linkTopBrd + linkWidth + "px";
                }; 
                break;
            case 'top': {
                    tip.style.left = linkLeftBrd + "px";
                    tip.style.bottom = window.innerHeight - linkTopBrd + "px";
                }; 
                break;
            case 'right': {
                    tip.style.left = linkRightBrd + "px";
                    tip.style.top = linkTopBrd + "px";
                }; 
                break;
            case 'left': {
                    tip.style.right = window.innerWidth - linkLeftBrd + "px";
                    tip.style.top = linkTopBrd + "px";
                }; 
                break;
        }        
    }
}

window.onload = () => {
    const linksWithTooltips = Array.from(document.querySelectorAll('.has-tooltip'));
    
    Additions.hidePopup(linksWithTooltips);
    const tips = Additions.addPopupAdvice(linksWithTooltips)

    Additions.addLinkClickHandlers(linksWithTooltips, tips);

    //Отключим все подсказки при прокрутке
    window.onscroll = () => {
        const remove = document.querySelector('.tooltip_active');
            if (remove) {
                remove.classList.remove('tooltip_active');
            }
    }  
}