/*
Name: Ang Yak Hng
Filename: validate.js

Last edit: 16 Aug 2019
*/

(function() {
    'use strict';
    window.addEventListener('load', function() {
      
        // Get forms to display validation messages
        var forms = document.getElementsByClassName('needs-validation');
      
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

