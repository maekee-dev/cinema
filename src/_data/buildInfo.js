const date = new Date()
const day = ('0' + date.getDay()).slice(-2)
const month = ('0' + (date.getMonth() + 1)).slice(-2)
const year = date.getFullYear()
const hours = ('0' + date.getHours()).slice(-2)
const minutes = ('0' + date.getMinutes()).slice(-2)
const dateString = day + '/' + month + '/' + year + ' @ ' + hours + ':' + minutes

module.exports = async => {
    return {
        'time': dateString,
        'author': 'Diego Mantegazza'
    }
}