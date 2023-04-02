const cekHariKerja = (day) => {
    return new Promise ((resolve,reject) => {
      setTimeout(() =>{
        const dataDay = ["senin","selasa", "rabu", "kamis", "jumat"]
        let cek = dataDay.find((item) =>{
            return item === day
        })
        if (cek) {
            resolve(cek)
        }else{
            reject(new Error('hari ini bukan hari kerja'))
        }
      }, 3000  )
    } )  
}

function panggilHari(day) {
  cekHariKerja(day).then((result) => {
    console.log(result)
  }).catch((err) => {
      console.log(err.message)
  });
}
panggilHari('sabtu')


async function panggilHari2(day) {
  try {
    // akan menjalankan promise 
    const result = await cekHariKerja(day);
    await console.log(' ')
    // print hasilnya
    console.log(result);
  } catch (error) {
    await console.log(' ')
    console.log(error.message);
  } finally { // optional
    console.log("finally done");
  }
}
panggilHari2('minggu')







   