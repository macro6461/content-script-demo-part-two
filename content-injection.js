// Doesn't need a messaging channel as it is invoked directly by background-injection.js

highlightMostViewed = () =>{

    var max = 0
    var maxRow;
    // get only tablerows with values
    var tableRows = document.getElementsByClassName("sortableTable-row js-statsTableRow")
    
    for (var i = 0; i < tableRows.length; ++i){
        // do this to remove existing borders
        tableRows[i].style.border = 'none'
        
        var cell = tableRows[i].cells[1]
        var num = parseInt(cell.children[0].innerText)
      
        if (num > max) {
            max = num
            maxRow = cell.parentElement
        }
    }
    // added to better illustrate change in maxRow.
    // you can remove the setTimeout portion if you like.
    setTimeout(()=>{
        maxRow.style.border = 'solid 2px red'
    }, 2000)

}

highlightMostViewed()