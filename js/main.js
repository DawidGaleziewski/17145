'use strict'
$(document).ready(function(){
    const btn = $('#count-sum');
    btn.click(function(){
        const allSalarySums = $('.salary');
        let sum = 0;
        const resultContainer = $('#sum')
        allSalarySums.each( function(index, span) {
            sum += Number($(span).text());
        })
        
        resultContainer.text(sum) 
    })    
})

