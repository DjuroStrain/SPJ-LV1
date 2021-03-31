
        var checkRow = 0;
    function addRowToTable()
    {
        
        checkRow++;
        var tbody = $('tbody');
        var nazivPredmeta = $('#nazivPredmeta').val();
        var godina = $('#godina').val();
        var smjer = $('#smjer').val();
        tbody.append 
        (
                                            '<tr id="'+checkRow+'">'+
                                            
												'<td>'+ nazivPredmeta+'</td>'+
												'<td>'+ godina+'</td>'+
												'<td>'+ smjer+'</td>'+
												'<td>'+ '<button type="button" onclick="deleteRow('+ checkRow +')" class="btn btn-default"><span class="fas fa-trash"/>' + '</button>' +'</td>' +												
											'</tr>'
        )
        
    }

    function deleteRow(checkRow) {
        
        var row = $('tbody #'+checkRow);
        row.remove();
    }
    