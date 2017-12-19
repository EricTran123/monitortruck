module.exports = function API(x) {
    return {
        truck: require('./truck')(x),
        user: require('./user')(x),
        driver: require('./driver')(x)
    }
}