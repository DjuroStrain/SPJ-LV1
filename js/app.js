
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
                                            '<tr id="'+checkRow+'" class="rowclass">'+
                                            
												'<td>'+ nazivPredmeta+'</td>'+
												'<td>'+ godina+'</td>'+
												'<td>'+ smjer+'</td>'+
												'<td>'+ '<button type="button" onclick="deleteRow('+ checkRow +')" class="btn btn-default"><span class="fas fa-trash"/>' + '</button>' +'</td>' +		
                                                '<td>'+ '<input type="checkbox" onclick="markRow('+ checkRow +')" class="promijeniBoju" name="chkOrgRow">' +'</td>' +										
											'</tr>'
        )
        
    }

    

    function deleteRow(checkRow) {
        
        var row = $('tbody #'+checkRow);
        row.remove();
    }

    function markRow(checkRow) {
        $('input[name="chkOrgRow"]').on('change', function() {
            $(this).closest('tr').toggleClass('yellow', $(this).is(':checked'));
          });
      }
    