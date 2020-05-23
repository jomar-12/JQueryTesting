$(document).ready(function(){

    $('#light').on('click', function(){
        $('table').removeClass('table-dark');

    });
    
    $('#dark').on('click', function(){
        $('table').addClass('table-dark');
    });

    
});