//===================== PROGRAM 1 ========================
const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]

const cariNama = new Promise((resolve, reject) => {

  setTimeout(() => {
    function filterItems(cari, arrayData) {
        let query = cari.toLowerCase();
        return (arrayData.filter(function(item) {
            return item.toLowerCase().indexOf(query) >= 0;
        }))
      
    }
    function searchName(cari, jumData,callback){
        let temp=callback(cari, nama)
        return (temp.splice(0,jumData));
        
    } let result = searchName('Angela', 1, filterItems)
      console.log(result)

    if (result[0]=== 'Bobi') {
      resolve({
        msg: "Berhasil",
      });
    } else {
      reject(new Error("Gagal"));
    }
  }, 100);
});

const onResolve = (result) => {
    console.log(result);
  };

  cariNama
    //   .then((a) => {
    //     console.log(mgs.message);
    //   })
    .then(onResolve)
    .catch(function (error) {
      console.log(error.message);
    });







