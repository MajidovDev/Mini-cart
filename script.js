window.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll('.card'),
        buttons = document.querySelectorAll('.btn'),
        container = document.querySelector('.container')
        viewCart = document.querySelector('.view-cart');

    function createCart() {
        let cart = document.createElement('div'),
            field = document.createElement('div'),
            heading = document.createElement('h2'),
            closeBtn = document.createElement('button');

        cart.classList.add('cart')
        cart.style.display = 'none'
        field.classList.add('cart-field')
        field.style.display = 'flex' 
        field.style.flexWrap = 'wrap'
        closeBtn.classList.add('view-cart')
        closeBtn.classList.add('closeCart')

        heading.textContent = 'Cart Products'
        closeBtn.textContent = 'Close'

        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(closeBtn)

    }
    createCart()

    let cart = document.querySelector('.cart')
    viewCart.addEventListener('click', function(){
        cart.style.display = 'block'
        viewCart.style.display = 'none'
        container.style.opacity = 0.5
    })

    let closeBtn = document.querySelector('.closeCart')
    closeBtn.addEventListener('click', function(){
        cart.style.display = 'none'
        viewCart.style.display = 'block'
        container.style.opacity = 1
    })

    let field = document.querySelector('.cart-field')

    buttons.forEach(function(item, i ){
        item.addEventListener('click', function(){
            let cloneItem = products[i].cloneNode(true),
                btn = cloneItem.querySelector('.btn');
            btn.remove()
            field.appendChild(cloneItem)
            cloneItem.classList.add('col-lg-3')
            products[i].remove()
        })
    })
})