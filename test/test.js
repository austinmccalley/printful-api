const { getProductList, getProduct, getOrders } = require('../src/index')

getProductList({ apiKey: process.env.API_KEY}).then(productList => {
  console.log({ productList })
})

getProduct({ apiKey: process.env.API_KEY, productId: '206415339' }).then(product => {
  console.log({ product })
})

getOrders({ apiKey: process.env.API_KEY}).then(orders => {
  console.log({ orders })
})