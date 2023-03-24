const highlightMostViewed = () =>{

    var max = 0
    var maxRow;
    // get only tablerows with values
    var tableRows = document.getElementsByClassName("sortableTable-row js-statsTableRow")
    
    for (var i = 0; i < tableRows.length; ++i){
        // get only 'views' cell
        var cell = tableRows[i].cells[1]
        var num = parseInt(cell.children[0].innerText)
      
        if (num > max) {
            max = num
            maxRow = cell.parentElement
        }
    }

    maxRow.style.border = 'solid 2px red'

}

// highlightMostViewed()

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        highlightMostViewed()
        console.log("looking for most viewed...");
        sendResponse()
    }
);