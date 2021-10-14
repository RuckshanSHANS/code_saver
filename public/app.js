
console.log("Hiiiiiiiiii");
// const deleteBtn = document.getElementById('delete-btn');

// deleteBtn.addEventListener('click', (e)=>{
//     console.log(e.target);
//     // axios.delete(/)
// })
const deletebtn = async function(e){
    var id = e.target.parentElement.parentElement.parentElement.dataset.note;
    console.log(id);
    await fetch(`/${id}`, {method:'DELETE'}).then((con)=> console.log(con.message + "Deleted")).catch(err => console.log(err))
    e.preventDefault()
}