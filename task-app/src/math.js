const calculateTip = (total,tipPercent = .25) => total + (total*tipPercent)

const farenCelc = (temp) => {
    return (temp-32)/1.8
}

const celcFaren = (temp) => {
    return (temp*1.8)+32
}

module.exports = {
    calculateTip,
    farenCelc,
    celcFaren
}