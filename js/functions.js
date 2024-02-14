const button = document.querySelector('button')
const table = document.querySelector('table')
const p_kirjain = document.querySelector('p')
let a = 1
const luvut = []

const randomluku = (min,max) => {
    return Math.floor(Math.random() * max) + min;
}

const uusi_rivi = (() => {
    const row = table.insertRow()
    for (let i = 0;i < 7; i++){
        const cell = row.insertCell(i)
        cell.innerHTML = ''
    }
})

const uusi_luku = (() => {
    luvut.length = 0
    for (let i = 0;i < 7; i++){
        const luku = randomluku(1,9)
        luvut.push(luku)
    }
})

const rivin_paljastus = (() => {
    const row = table.rows[table.rows.length - 1]
    for (let i = 0;i < 7; i++){
        row.cells[i].innerHTML = luvut[i]
    }
})

const teksti = (() => {
    p_kirjain.innerHTML = ("Valmiita rivejä " + a)
    a++
})

button.addEventListener('click',() => {
    teksti()
    uusi_rivi()
    uusi_luku()
    rivin_paljastus()
})