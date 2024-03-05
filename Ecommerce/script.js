const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const productContainer = document.getElementById('productContainer');

        let scrollAmount = 0;

        prevBtn.addEventListener('click', () => {
            scrollAmount = Math.max(scrollAmount - 300, 0);
            productContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        });

        nextBtn.addEventListener('click', () => {
            scrollAmount = Math.min(scrollAmount + 300, productContainer.scrollWidth - productContainer.clientWidth);
            productContainer.scrollTo({
                top: 0,
                left: scrollAmount,
                behavior: 'smooth'
            });
        });