$(document).ready( () => {

    $('.header-buttons').on('click', event => {
        $(event.currentTarget).siblings().toggle();    
    });

    
})