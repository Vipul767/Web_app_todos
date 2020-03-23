//listen for auth status changes
     auth.onAuthStateChanged(user=>{
                 if(user){
        setupUI(user);
        var email1=user.email;
   
        const plan  = document.querySelector('#plan');
        const form= document.querySelector('#addform');

// create element & render cafe
function renderCafe(doc){
    let li = document.createElement('li');
    let todo = document.createElement('span');
    let deadline = document.createElement('span');
    let cross = document.createElement('button');
    li.setAttribute('data-id', doc.id);
    todo.textContent = doc.data().todo;
    deadline.textContent = doc.data().deadline;
    cross.textContent='Delete_this';
    li.appendChild(todo);
    li.appendChild(deadline);
    li.appendChild(cross);
console.log(li);
    plan.appendChild(li);

    //deleting data
    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection(email1).doc(email1).collection('todo').doc(id).delete();
    });
}

// getting data
db.collection(email1).doc(email1).collection('todo').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe(doc);
    });
});
//saving data
form.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    console.log(email1);
    db.collection(email1).doc(email1).collection('todo').add({
        todo: form.todo.value,
        deadline: form.deadline.value})
    });
         
    





    
const plan1  = document.querySelector('#plan1');
        const form1= document.querySelector('#addform1');

// create element & render cafe
function renderCafe1(doc){
    let li = document.createElement('li');
    
    let doing = document.createElement('span');
    let deadline1 = document.createElement('span');
    let cross = document.createElement('button');
    li.setAttribute('data-id', doc.id);
    doing.textContent = doc.data().doing;
    deadline1.textContent = doc.data().deadline1;
    cross.textContent='Delete_this';
    li.appendChild(doing);
    li.appendChild(deadline1);
    li.appendChild(cross);
    console.log(li);
    plan1.appendChild(li);
    cross.addEventListener('click',(e)=>{
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection(email1).doc(email1).collection('doing').doc(id).delete();
    });

}

// getting data


db.collection(email1).doc(email1).collection('doing').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderCafe1(doc);
    });
});
//saving data
form1.addEventListener('submit',(e)=>{
    
    e.preventDefault();
    console.log(email1);
    db.collection(email1).doc(email1).collection('doing').add({
        doing: form1.doing.value,
        deadline1:form1.deadline1.value
    });
});
    addform1.reset(); 
    
    








    const plan2  = document.querySelector('#plan2');
    const form2= document.querySelector('#addform2');

// create element & render cafe
function renderCafe2(doc){
let li = document.createElement('li');

let done = document.createElement('span');
let deadline2 = document.createElement('span');
let cross = document.createElement('button');
li.setAttribute('data-id', doc.id);
done.textContent = doc.data().done;
deadline2.textContent = doc.data().deadline2;
cross.textContent='Delete_this';
li.appendChild(done);
li.appendChild(deadline2);
li.appendChild(cross);
console.log(li);
plan2.appendChild(li);

cross.addEventListener('click',(e)=>{
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection(email1).doc(email1).collection('done').doc(id).delete();
});
}

// getting data


db.collection(email1).doc(email1).collection('done').get().then(snapshot => {
snapshot.docs.forEach(doc => {
    renderCafe2(doc);
});
});
//saving data
form2.addEventListener('submit',(e)=>{

e.preventDefault();
console.log(email1);
db.collection(email1).doc(email1).collection('done').add({
    done: form2.done.value,
    deadline2:form2.deadline2.value
});


addform2.reset(); 

})

}

else{
        
        setupUI();
    }
});

//signup
const signupform = document.querySelector('#signup-form');
signupform.addEventListener('submit',(e) =>{
    e.preventDefault();


    

    // get user info
    const email = signupform['signup-email'].value;
    const password=signupform['signup-password'].value;
    
    // sign up the user
    auth.createUserWithEmailAndPassword(email,password).then(cred =>
        { 
             db.collection(email).doc(email).set({})
        }).then(()=>
        {
            const modal=document.querySelector('#modal-signup');
            signupform.reset();
            
        }); 
    });
//logout
const logout = document.querySelector('#logout');
logout.addEventListener('click',(e) =>
{
    e.preventDefault();
    auth.signOut();
});

//login
const loginform = document.querySelector('#login-form');
loginform.addEventListener('submit',(e) =>{
    e.preventDefault();

    const email=loginform['login-email'].value;
    const password=loginform['login-password'].value;

    auth.signInWithEmailAndPassword(email,password).then(cred=>
        {
            const modal=document.querySelector('#modal-login');
            M.Modal.getInstance(modal).close();
            loginform.reset();
            
        });
});



    

    
       
