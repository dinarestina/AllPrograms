const nama = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"]  

function filterItems(cari, arrayData) {
    let query = cari.toLowerCase();
    return (arrayData.filter(function(item) {
        return item.toLowerCase().indexOf(query) >= 0;
    }))
  
}
function searchName(cari, jumData,callback){
    let temp=callback(cari, nama)
    console.log(temp.splice(0,jumData));
}
searchName('an', 3, filterItems)





