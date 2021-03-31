const { render } = require('ejs');
const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products',
        });
    });
}

exports.getIndex = (req, res, next) =>{

    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
        });
    });
    
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart',{
        path: '/cart',
        pageTitle: 'Your Cart'
    })
}

exports.postCart = (req, res, next) =>{

        const prodId = req.body.productId;
        console.log(prodId);
        res.redirect('/cart');
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders',{
        path: '/orders',
        pageTitle: 'Orders'
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout',{
        path:'/checkout',
        pageTitle: 'Checkout'
    });
}

exports.getProduct = (req,res,next) => { 

    const prodId = req.params.productId;
    console.log(prodId);

    Product.findById(prodId, product => {
        console.log({product: product,pageTitle:product.title,path:'/product'});
        res.render('shop/product-detail',{product,pageTitle:product.title,path:'/product'});
    });
    
}