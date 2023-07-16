//console.log("haqi ayas")

// let nama = " Haqi Ayassi " 
// let umur = 18

// alert("Halo nama saya"+ nama + "dan umur saya" + umur )  

// let bilanganpertama = 50
// let bilangankedua = 100

// alert("hasilnya :" + (bilanganpertama + bilangankedua))

//condition

// let nilai = 40
// if (nilai > 80) {
//     keterangan = "Lulus sempurna";
//   } else if (nilai < 80 && nilai > 60) {
//     keterangan = "lulus";
//   } else {
//     keterangan = "tidak lulus";
//   }

//function 

// function hello () { 
//     alert("Hello World 😁")
// }

// hello()

// function submitdata() {
//     let name
// }

function submitData(event) {
    event.preventDefault()
    // DOM -> Document Object Model (untuk memanipulasi element HTML melalui javascript)

    let name = document.getElementById("input-name").value // Cintara Surya Elidanto
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-phone").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value

    let objectData = {
        name,
        email,
        phone,
        subject,
        message,
    }

    console.log(objectData)

    if (name === "") {
        return alert('Name harus diisi!')
    } else if (email === "") {
        return alert('Email harus diisi!')
    } else if (phone === "") {
        return alert('Phone harus diisi!')
    } else if (subject === "") {
        return alert('Subject harus diisi!')
    } else if (message === "") {
        return alert('Message harus diisi!')
    }

    const emailReceiver = "haqicendikia005@gmail.com"

    let a = document.createElement('a')
    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Halo nama saya ${name},\n${message}, silahkan kontak saya di nomor berikut : ${phone}`
    a.click()
}
// const date = new Date ()

// const tanggal = date.getDate()

// const listBulan = ["Jan", "feb", "Mar", "Apr", "May","Jun","Jul", "Aug","Sep", "Oct", "Nov", "Dec"]

// const bulan = listBulan[date.getMonth()]

// const year = date.getFullYear()

// const hours = date.getHours()

// const minutes = date.getMinutes()

// console.log(tanggal,bulan,year,hours,minutes)