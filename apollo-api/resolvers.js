products = [ 
    {
        id: 1, 
        name: "Avengers: Infinite war",
        description: "A blue ray movie"
    },
    {
        id: 2,
        name: "GraphQL",
        description: "A specification for querying API's"
    } 
]

const getProducts = () => {
    return products
}

const getProductById = ({ productId }) => {
    return Promise.resolve(products.find(p => p.id === productId))
}

const createProduct = ({ product }) => {
    const newId = products.length === 0 ? 1 : products[products.length-1].id + 1
    product.id = newId
    products.push(product)
    return Promise.resolve('success')
}

module.exports = {
    Query: {
        products: getProducts,
        product: async (_, { id }) => getProductById({ productId: id })
    },
    Mutation: {
        createProduct: async (_, { product }) => createProduct({ product })
    }
}