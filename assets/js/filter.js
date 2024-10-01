const filterBtns = document.querySelectorAll('.filterbar__btn')
const products = document.querySelectorAll('.catalog-card')

let filterCategory = 'all'

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(btn => {
            btn.classList.remove('active')
        })
        btn.classList.add('active')

        filterCategory = btn.getAttribute('data-filter')

        products.forEach(product => {
            product.style.display = 'flex'

            if (filterCategory != 'all' && product.getAttribute('data-category') != filterCategory) {
                product.style.display = 'none'
            }
        })
    })
})
