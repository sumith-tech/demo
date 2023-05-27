
const form=document.querySelector('.form')
const nameinp=document.querySelector('#name')
const mailinp=document.querySelector('#email')
const phnuminp=document.querySelector('#number')
form.addEventListener('submit',onSubmit)


function onSubmit(e){
    e.preventDefault();
    
    let myObj={
        name:nameinp.value,
        email:mailinp.value,
        phoneNumber:phnuminp.value,

};
let myObj_sterlized=JSON.stringify(myObj);
localStorage.setItem(mailinp.value,myObj_sterlized)

}
