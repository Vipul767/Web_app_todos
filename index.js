const loggedoutlinks = document.querySelectorAll('.logged-out');
const loggedinlinks = document.querySelectorAll('.logged-in');
const accountdetails = document.querySelector('.account-details'); 
const setupUI = (user) => {
    if(user) {
        const html = `
        <div>Logged in as ${user.email} </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
        
        `;
        accountdetails.innerHTML = html;

        //toggle UI elements
        loggedinlinks.forEach(item => item.style.display='block');
        loggedoutlinks.forEach(item =>item.style.display = 'none');
    } else {
        accountdetails.innerHTML = '';

        loggedinlinks.forEach(item => item.style.display='none');
        loggedoutlinks.forEach(item => item.style.display = 'block');
    }
}



//set up materialise components
document.addEventListener('DOMContentLoaded',function(){
var modals=document.querySelectorAll('.modal');
M.Modal.init(modals);
var items = document.querySelectorAll('.collapsible');
M.Collapsible.init(items);
});