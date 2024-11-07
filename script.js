$(document).ready(function() {
    // Add item to the list
    $('#addButton').click(function() {
        const inputText = $('#inputBox').val().trim();
        if (inputText !== '') {
            const itemDiv = $('<div>').addClass('itemBox');
            const itemText = $('<span>').text(inputText);
            const removeButton = $('<button>').text('X').addClass('removeButton');
            
            // Remove item on button click
            removeButton.click(function() {
                $(this).parent().remove();
            });
            
            itemDiv.append(itemText).append(removeButton);
            $('#itemsContainer').append(itemDiv);

            // Clear input box
            $('#inputBox').val('');
        }
    });
});

