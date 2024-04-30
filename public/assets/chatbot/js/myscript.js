$(document).on('change', '.file-input', function() {


    var filesCount = $(this)[0].files.length;

    var textbox = $(this).prev();

    if (filesCount === 1) {
        var fileName = $(this).val().split('\\').pop();
        textbox.text(fileName);
    } else {
        textbox.text(filesCount + ' files selected');
    }
});





const preloaderWrapper = document.querySelector('.preloader-wrapper');

window.addEventListener('load', function() {
    preloaderWrapper.classList.add('fade-out-animation');
});


// window.addEventListener('load', () => {
//   windowReference.document.body.innerHTML = '';
//   windowReference.document.body.innerHTML = '<h1>Loading...</h1>';
// });



// window.addEventListener('load', function () {
//          alert("It's loaded!")
//        })

//  document.addEventListener("DOMContentLoaded", function(event){
//   alert("It's loaded!")
// });




window.onscroll = function() {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 20) {
        navbar.classList.add("fade");
    } else {
        navbar.classList.remove("fade");
    }
};