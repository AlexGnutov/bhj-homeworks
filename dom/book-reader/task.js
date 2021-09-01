window.onload = () => {

    const book = document.getElementById('book');
    
    const fontControls = document.getElementsByClassName('book__control_font-size').item(0);
    const colorControls = document.getElementsByClassName('book__control_color').item(0);
    const bkcolorControls = document.getElementsByClassName('book__control_background').item(0);
    
    const fontLinks = fontControls.children;
    const colorLinks = colorControls.children;
    const bkcolorLinks = bkcolorControls.children;

    
    for (const link of fontLinks) {
        link.addEventListener('click', function(e) {
    
            if (!e.target.matches('.font-size_active')) {
                fontControls.getElementsByClassName('font-size_active').item(0).classList.remove('font-size_active'); 
                e.target.classList.add('font-size_active');
            }

            ['book_fs-small', 'book_fs-big'].forEach(x => {
                if (book.classList.contains(x)) {
                    book.classList.remove(x);
                }
            });

            if (e.target.dataset.size) {
                book.classList.add(`book_fs-${e.target.dataset.size}`);
            }
        });
    }

    for (const link of colorLinks) {
        link.addEventListener('click', function(e) {

            if (!e.target.matches('.color_active')) {
                colorControls.getElementsByClassName('color_active').item(0).classList.remove('color_active'); 
                e.target.classList.add('color_active');
            }

            ['book_color-gray', 'book_color-whitesmoke', 'book_color-black'].forEach(x => {
                if (book.classList.contains(x)) {
                    book.classList.remove(x);
                }
            });

            if (e.target.dataset.textColor) {
                book.classList.add(`book_color-${e.target.dataset.textColor}`);
            }
        });
    };

    for (const link of bkcolorLinks) {
        link.addEventListener('click', function(e) {

            if (!e.target.matches('.color_active')) {
                bkcolorControls.getElementsByClassName('color_active').item(0).classList.remove('color_active'); 
                e.target.classList.add('color_active');
            }

            ['book_bg-gray', 'book_bg-white', 'book_bg-black'].forEach(x => {
                if (book.classList.contains(x)) {
                    book.classList.remove(x);
                }
            });

            if (e.target.dataset.bgColor) {
                book.classList.add(`book_bg-${e.target.dataset.bgColor}`);
            }
        });
    };
}