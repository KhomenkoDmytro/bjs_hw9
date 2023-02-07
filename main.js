let arr=["Kharkiv", "Kiev", "Borispol", "Odessa", "Lviv", "Dnieper"];
let parentElement=document.createElement('div');
let list=addList(arr, parentElement);
document.body.append(parentElement);

function addList(arr, parent = document.body){
    let list=document.createElement('ol');
    arr.forEach(element => {
            list.insertAdjacentHTML('beforeend', `<li> ${element}</li>`);
    });
    parent.append(list);
}