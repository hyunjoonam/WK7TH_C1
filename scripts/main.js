$("section").append('<div class="panel panel-default"><div class="panel-body"><form coffee-order-list="form"><div id="form-group"><label for="order-label">Order List</label><div id="order-list">');

$(function () {
    $("#order-list").on('click', '.delete', function(){
        $(this).parent().remove();
      });
    $("form").submit(function(){
    // $("button[type=submit]").click(function(){ 
        event.preventDefault()
        let coffeeName = $("#coffeeOrder").val();
        // let coffeeEmail = $("#emailInput").val();
        let coffeeEmail = $("input[type=email]").val();
        let coffeeInput = $("input:checked").val();
        let coffeeFlavor = $("option:selected").val();
        let coffeeStrength = $("input[type=range]").val();
        $("#order-list").append('<li>' + coffeeName + ' ' + coffeeEmail + ' ' + coffeeInput + ' ' + coffeeFlavor + ' ' + coffeeStrength + ' <button class="delete">Delete Order</button></li>');
    
        let myCoffeeOrdersArray = [coffeeName, coffeeEmail, coffeeInput, coffeeFlavor, coffeeStrength];
        console.log(myCoffeeOrdersArray);
        let orderString = JSON.stringify(myCoffeeOrdersArray);
        localStorage.setItem('orderString', orderString);
    });
    $("button[type=reset]").click(function(){
        alert('Order List Reset')
        $("li").remove();
    });
});