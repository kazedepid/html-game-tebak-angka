const randomNumber = Math.floor(Math.random() * 100) + 1
let attempts = 0

function checkGuess() {
    const userGuess = Number(document.getElementById('guess').value)
    attempts++
    const messageElement = document.getElementById('message')

    if (userGuess === randomNumber) {
        messageElement.textContent = `Selamat! Anda berhasil menebak angka ${randomNumber} dalam ${attempts} percobaan.`
        messageElement.style.color = 'green'
    } else if (userGuess < randomNumber) {
        messageElement.textContent = 'Tebakan terlalu rendah. Coba lagi.'
        if (randomNumber - userGuess <= 10) {
            messageElement.textContent += ' Dikit lagi!'
        }
        messageElement.style.color = 'orange'
    } else {
        messageElement.textContent = 'Tebakan terlalu tinggi. Coba lagi.'
        if (userGuess - randomNumber <= 10) {
            messageElement.textContent += ' Dikit lagi!'
        }
        messageElement.style.color = 'orange'
    }
}