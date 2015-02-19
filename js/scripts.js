$(document).ready(function() {
  $("#add-address").click(function() {

    $("#new-addresses").append('<hr><div class="new-address">' +
                                  '<div class="form-group">' +
                                  '<label for="address-category">Address Category</label>' +
                                  '<input type="text" class="form-control address-category" placeholder="eg. home, work, etc.">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                      '<label for="new-street">Street</label>' +
                                      '<input type="text" class="form-control new-street">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-city">City</label>' +
                                    '<input type="text" class="form-control new-city">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-state">State</label>' +
                                    '<input type="text" class="form-control new-state">' +
                                  '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-zip">Zip</label>' +
                                    '<input type="text" class="form-control new-zip">' +
                                  '</div>');
  });


  $('form#new-contact').submit(function(event) {
    event.preventDefault();

    var inputFirstName = $("input#new-first-name").val();
    var inputLastName = $("input#new-last-name").val();

    var newContact = {firstName: inputFirstName,
                      lastName: inputLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedCategory = $(this).find("input.address-category").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedZip = $(this).find("input.new-zip").val();

      var newAddress = { addressCategory: inputtedCategory,  street: inputtedStreet, city: inputtedCity, state: inputtedState, zip: inputtedZip };
      newContact.addresses.push(newAddress);
    });


    $('ul#contacts').append("<li><span class ='contact'>" +
                            newContact.firstName + " " +
                            newContact.lastName + "</span></li>")

    $('input#new-first-name').val("");
    $('input#new-last-name').val("");
    $("input#new-street").val("");
    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-zip").val("");

    $(".contact").last().click(function(){
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName + " " +
                                newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");

      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + "<strong>" + address.addressCategory + "</strong>" + ": "+ address.street + ", " +
        address.city + ", " + address.state + " " + address.zip + "</li>");
      });

    });
  });
});
