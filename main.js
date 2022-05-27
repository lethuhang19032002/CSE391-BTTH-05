var delBtns = document.querySelectorAll('.del-btn')
var confirmDialog = document.querySelector('.confirm-dialog ')
var cancelBtn = document.querySelector('.btn-cancel')
var confirmBtn = document.querySelector('.btn-confirm')
var layout = document.querySelector('.layout')


Array.from(delBtns).forEach((delBtn) => {
    delBtn.onclick = function (e) {

        layout.style.display = "block";
        confirmDialog.style.display = "block";
        cancelBtn.onclick = function () {
            confirmDialog.style.display = "none";
            layout.style.display = "none";
            confirmDialog.style.display = "none";
        }
        confirmBtn.onclick = function () {
            e.target.parentElement.remove()
            layout.style.display = "none";
            confirmDialog.style.display = "none";
        }
    }
})