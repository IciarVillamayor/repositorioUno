let contacts = [

    {
        id : 1,
        nombre : "María",
        phone : "56398165"
    },
    {
        id : 2,
        nombre : "Pepito",
        phone : "56398165"
    },
    {
        id : 3,
        nombre : "Pepito",
        phone : "56398165"
    }
]

let pacientes = [
    {
        id: 0,
        texto: 'Maria. 45 años. Noseque patologia'
    },
    {
        id: 1,
        texto: 'Maria. 45 años. Noseque patologia'
    },
    {
        id: 2,
        texto: 'Maria. 45 años. Noseque patologia'
    }
]

const pintarDatos =()=>{
    let listContact = document.querySelector(".contactList");
    let html = ``;
    //pinto los contactos
    contacts.forEach(paciente=>
        html+= 
        `    <li id="${paciente.id}" class="contactElem">
                <span>${paciente.texto}</span>
            </li>
            `
    )
    listContact.innerHTML = html;

   //Pongo la interacción de borrar en sus botones
    let buttonsDelete = document.querySelectorAll(".deleteContact")
    buttonsDelete.forEach(button=>{
        button.addEventListener('click', deleteContacts)
    })
    let buttonsEdit = document.querySelectorAll(".editContact")
    buttonsEdit.forEach(button=>{
        button.addEventListener('click', getContactInfo)
    })
   
}

// FORMULARIO DE AÑADIR
let addForm = document.querySelector("#addContactForm")
let nombreContact = document.querySelector("#nombreContact")
let phoneContact = document.querySelector("#phoneContact")
let sendAddForm = document.querySelector("#sendAddForm")

// FORMULARIO DE EDITAR
let editForm = document.querySelector("#editContactForm")
let editNombreContact = document.querySelector("#editNombreContact")
let editPhoneContact = document.querySelector("#editPhoneContact")
let sendEditForm = document.querySelector("#sendEditForm")


// IDENTIFICAR EL ELEMENTO CLICKADO
    // -saber a qué estoy haciendo click
    //-buscarlo en mi lista de contactos
    //- poner la info en el formulario de edición



const getContactInfo = (e)=>{
    index = e.target.closest(".contactElem").id;
    let buscarContacto = contacts.find(contact=> contact.id == index)
    editNombreContact.value = buscarContacto.nombre
    editPhoneContact.value = buscarContacto.phone
}


const editarElContacto = (e)=>{
    // ACTUALIZAR INFO EN LA LISTA
    e.preventDefault();
    let editedContact = {
        id : Number(index),
        nombre : editNombreContact.value,
        phone : editPhoneContact.value
    }

    contacts.splice(index, 1, editedContact)

    pintarDatos();
    editForm.reset();
}


const addContact = (e)=>{
    //Evito que la página se recargue al mandar el formulario
    e.preventDefault();

    pintarDatos();

    addForm.reset();
}


const deleteContacts = (e)=>{
    let index = e.target.closest(".contactElem").id
    let restoPacientes = 




    contacts.splice(index, 1);

    console.log(contacts)
    contacts.map((contact, i)=> contact.id = i)
    pintarDatos();
}




pintarDatos();
sendAddForm.addEventListener('click', addContact)
sendEditForm.addEventListener('click', editarElContacto)
