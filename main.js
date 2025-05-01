let cart = [];

function updateCart() {
    const $list = $('.cart-items');
    $list.empty();
    let total = 0;

    cart.forEach(item => {
    $list.append(`<li>${item.name} - $${item.price.toFixed(2)}</li>`);
    total += item.price;
    });

    $('#total').text(total.toFixed(2));
}

$('.menu button').click(function () {
    const name = $(this).data('name');
    const price = parseFloat($(this).data('price'));
    cart.push({ name, price });
    updateCart();
});

$('#finalize').click(function () {
    if (cart.length === 0) {
    alert("Cart is empty!");
    return;
    }

    let receiptText = "----- RECEIPT -----\n";
    let total = 0;
    cart.forEach(item => {
    receiptText += `${item.name} - $${item.price.toFixed(2)}\n`;
    total += item.price;
    });
    receiptText += "--------------------\n";
    receiptText += `TOTAL: $${total.toFixed(2)}\n`;
    receiptText += "Thank you for your purchase!";

    $('#receipt').text(receiptText);
    cart = [];
    updateCart();
});
