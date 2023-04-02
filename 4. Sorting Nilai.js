
function SeleksiNilai(nilaiAwal, nilaiAkhir, arr){
    if (nilaiAwal>nilaiAkhir) 
        console.log("Nilai akhir harus lebih besar dari nilai awal")
    if (arr.length < 5)
        console.log("Jumlah angka dalam dataArray harus lebih dari 5")
    let nilai = [];
    arr.forEach((element, index) => {
      //  console.log(element)
       // console.log(index)
       if(element>nilaiAwal && element < nilaiAkhir){
           nilai.push(element)
           }
    }); 
    //nilai.sort()
    console.log(nilai.sort(function(a, b){return a - b}))
    
}
SeleksiNilai(5, 20 , [2,25,4,14, 17, 30, 8])



