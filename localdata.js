
const form=document.querySelector('.form')
const nameinp=document.querySelector('#name')
const mailinp=document.querySelector('#email')
const phnuminp=document.querySelector('#number')
//for add and delete
const list=document.querySelector('#items')
//event listerner
form.addEventListener('submit',onSubmit)

list.addEventListener('click',dltitem)


function onSubmit(e){
    e.preventDefault();
    
    let myObj={
        name:nameinp.value,
        email:mailinp.value,
        phoneNumber:phnuminp.value,

};
let myObj_sterlized=JSON.stringify(myObj);
localStorage.setItem(mailinp.value,myObj_sterlized)
//add item
var txtinput=document.getElementById('name').value + ' '+ document.getElementById('email').value +' '+ document.getElementById('number').value;
var li=document.createElement('li');
li.appendChild(document.createTextNode(txtinput));

list.appendChild(li)

//add dlt button
var dlt=document.createElement('button');   
dlt.className='delete';
dlt.appendChild(document.createTextNode('X'))
li.appendChild(dlt)


}

function dltitem(e){
    if(e.target.classList.contains('delete')){
        
        var li=e.target.parentElement;
        list.removeChild(li);
    }  
    localStorage.removeItem(mailinp.value)
}