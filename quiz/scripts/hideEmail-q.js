/* anonymizes the username(local part) of an email ID, that is, 
replace the username part with * characters.
*/
const emails = ['mary@northeastern.edu', 'ari@khoury.northeastern.edu', 'jk_neu.edu', 'jk@neu.edu', 'jsned@', 'ai_me@mugar.northeastern.edu'];
window.onload = function hideEmail() {
    const list = document.getElementById('emails')
    list.innerHTML = '';
    for (const email of emails) {
        // complete the loop
        if (email.match(/([a-zA-Z_]|d)+@(.*\.)*northeastern\.edu/)) {
            const li = document.createElement("li");
            let local_end = email.indexOf('@');
            li.innerText = email.slice(0, local_end).replace(/./g, '*') + email.slice(local_end);
            list.appendChild(li);
        }
    }
}