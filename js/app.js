$(document).ready(function () {
    var itemCount = 0;
    $('#plus_btn').on('click', function () {
        itemCount++;
        var className = "item-" + itemCount;
        $('.add-items').append(`  
        <div class="border border-2  p-2 mt-3 item ${className}">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute end-0 me-2">Close</button>
            <div class="mt-3">
            <label for="">Product Name</label>
            <input class="input-style name" type="text" placeholder="Product name..">
            </div>
            <div>
            <label for="">Description</label>
            <input class="input-style desc" type="text" placeholder="">
            </div>
            <div>
            <label for="">Quantity</label>
            <input class="input-style qty" type="number" placeholder="">
            </div>
            <div>
            <label for="">Rate</label>
            <input class="input-style rate" type="number" placeholder="">
            </div>
            <div>
            <label for="">Amount</label>
            <input class="input-style amount" type="text" placeholder="">
            </div>
           
        </div>`);

        // Removing the current input field when close button is clicked
        $('.btn-danger').on('click', function () {
            let findCurrentBtn = $(this).parent().remove();
            // console.log(findCurrentBtn);
        })

    });

    // close button
    $('#close_btn').on('click', function () {
        console.log('working')
        $('#remove_all').remove();
    });
    // submit button
    $('#submit_btn').on('click', function () {
        let input1 = $('#input_field1').val();
        let input2 = $('#input_field2').val();
        let input3 = $('#input_field3').val();
        var items = $('.item');
        // console.log({ items });
        var insideObject=[];
        // console.log(insideObject);
        items.each(index => {
            // console.log({ item: items[index] });
            const initialItem = ({ item: items[index] });
            const findInputName = initialItem.item.children[1]
            const findInputDesc = initialItem.item.children[2]
            const findInputQty = initialItem.item.children[3]
            const findInputRate = initialItem.item.children[4]
            const findInputAmount = initialItem.item.children[5]
            const name= $(findInputName).find('.name').val();
            const desc= $(findInputDesc).find('.desc').val();
            const qty= $(findInputQty).find('.qty').val();
            const rate= $(findInputRate).find('.rate').val();
            const amount= $(findInputAmount).find('.amount').val();
            // console.log(name,desc);
            var itemObj = {
                name: name,
                desc: desc,
                qty: qty,
                rate: rate,
                amount: amount
            }
            insideObject.push(itemObj);

            console.log(itemObj);
        })

        var result = {
            bName: input1,
            mobile: input2,
            address : input3,
            items:insideObject
        }
        console.log(result)
        //For showing all input field items in console
        $("input").each(function () {
            var input = $(this).val();
            // console.log(input);
        });
        //getting total input field items 
        const total = $('.input-style').length;
        console.log(total);
        $('input').val('');//clearing input field after submit button 


    });
    // Removing the current input field when close button is clicked
    $('.btn-danger').on('click', function () {
        let findCurrentBtn = $(this).parent().remove();
        console.log(findCurrentBtn);
    })
});

