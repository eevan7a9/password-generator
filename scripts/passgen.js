class PassGen {
    constructor(range) {
        this.range = range
    }
    showRange() {
        console.log(this.range)
    }
}

function syncValue(have_changed, to_change) {
    to_change.value = have_changed.value
}

export default PassGen
export {
    syncValue
}