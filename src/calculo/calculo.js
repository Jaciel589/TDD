module.exports = {
    sum: dias => {
        if (dias <= 30) {
            return 0.05
        }

        if (dias >= 31 && dias <= 60) {
            return 0.10
        }

        if (dias > 60) {
            return 0.15
        }
    }
}