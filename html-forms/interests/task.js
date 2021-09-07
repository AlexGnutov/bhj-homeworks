window.onload = () => {

    const checkboxes = document.querySelectorAll('.interests .interest__check');
    
    checkboxes.forEach(x => {
        x.addEventListener('change', function(e) {
            
            //вниз по дереву
            const cbTree = Array.from(x.closest('.interest').getElementsByClassName('interest__check'));
            if (x.checked === true) {
                cbTree.forEach(cb => {
                    cb.checked = true;
                    cb.indeterminate = false;
                })
            } else {
                cbTree.forEach(cb => {
                    cb.checked = false;
                })
            }

            //вверх по дереву
            const parentChain = [];
            let parent = x.closest('ul .interests');

            while (parent) {
                parentChain.push(parent);
                parent = parent.closest('li .interest');
                if (!parent) {break};
                parent = parent.closest('ul');
            }

            parentChain.forEach(p => {
                const innerCb = Array.from(p.querySelectorAll('.interest__check'));
                const prevCb = p.previousElementSibling.querySelector('.interest__check');

                if (innerCb.every(x => x.checked === true)) {
                    prevCb.indeterminate = false; 
                    prevCb.checked = true;        
                } else if (innerCb.every(x => x.checked === false)) {
                    prevCb.indeterminate = false; 
                    prevCb.checked = false;   
                } else {
                    prevCb.indeterminate = true;   
                }
            });
        })
    });
}