Promise.resolve('sucesso').then(() => {
    throw Error('erro')
}).catch(error => {
    return 'funcionou'
}).then(data => {
    throw(data => {
        throw Error('falha')
    }).catch(error => console.log(error.message))
})