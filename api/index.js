module.exports = function API(x) {
    return {
        user: require('./user')(x),
        driver: require('./driver')(x),
        customer: require('./customer')(x)
    }
}