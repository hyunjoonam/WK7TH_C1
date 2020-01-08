$("section").append('<div class="panel panel-default"></div>').append('<label for="order-label">Order List</label>').append('<form id="order-form">');

$(function () {
    $("form").submit(function(){
        event.preventDefault()
        let coffeeName = $("#coffeeOrder").val();
        let coffeeEmail = $("#emailInput").val();
        let coffeeInput = $("input:checked").val();
        let coffeeFlavor = $("option:selected").val();
        $("#order-form").append('<li>' + coffeeName + ' ' + coffeeEmail + ' ' + coffeeInput + ' ' + coffeeFlavor + ' ' + coffeeStrength + '</li>');
    })
});