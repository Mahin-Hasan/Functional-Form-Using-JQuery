$(document).ready(function(){
   $('#plus_btn').on('click',function(){
     $('.add-items').append(`  <div class="border border-2  p-2 mt-3">
     <label for="">Product Name</label>
     <input id="input_field4" class="input-style" type="text" placeholder="Product name..">
     <label for="">Description</label>
     <input id="input_field5" class="input-style" type="text" placeholder="">
     <label for="">Quantity</label>
     <input id="input_field6" class="input-style" type="number" placeholder="">
     <label for="">Rate</label>
     <input id="input_field7" class="input-style" type="number" placeholder="">
     <label for="">Amount</label>
     <input id="input_field8" class="input-style" type="text" placeholder="">
 </div>`);
   });
   $('#close_btn').on('click',function(){
    console.log('working')
    $('#remove_all').remove();
   });
   $('#submit_btn').on('click',function(){
    var input1 = $('#input_field1').val();
    var input2 = $('#input_field2').val();
    var input3 = $('#input_field3').val();
    var input4 = $('#input_field4').val();
    var input5 = $('#input_field5').val();
    var input6 = $('#input_field6').val();
    var input7 = $('#input_field7').val();
    var input8 = $('#input_field8').val();
    console.log(input1,input2,input3);
    $('#output_field').append(` <div class="mt-3">
    <h4 class="text-success">Results</h4>
    <p>Buyers Name: ${input1}</p>
    <p>Mobile: ${input2}</p>
    <p>Address: ${input3}</p>
    <p>Product Name: ${input4}</p>
    <p>Description: ${input5}</p>
    <p>Quantity: ${input6}</p>
    <p>Rate: ${input7}</p>
    <p>Amount: ${input8}</p>
</div>`);
    // $('#input_field').change(function (){
        
    // })
   })
});

/*
$('.add-items').append(`<div class="mx-2">
     <label for="">Buyer's Name</label>
     <input class="input-style" type="text" placeholder="Your name..">
     <label for="">Mobile</label>
     <input class="input-style" type="text" placeholder="">
     <label for="">Address</label>
     <input class="input-style" type="text" placeholder="">
     <input type="checkbox" name="" id="">
     <label class="checkbox-label" for="horns">Due</label>
     <p class="fw-semibold fs-6 mb-1">Payment Method</p>
     <p class="mb-0 pb-0">Accepted Cards</p>
     <i class="fa-brands fa-cc-visa bg-primary fs-2 rounded-1 "></i>
     <i class="fa-brands fa-cc-amex bg-info fs-2 rounded-1"></i>
     <i class="fa-brands fa-cc-mastercard bg-danger fs-2 rounded-1"></i>
     <i class="fa-brands fa-cc-discover bg-warning fs-2 rounded-1 "></i>
     <div class="mt-4">
         <button id="plus_btn" type="button" class="btn border fw-bold">+</button>
         <button id="close_btn" type="button" class="btn btn-danger">Close</button>
         <button id="submit_btn" type="button" class="btn btn-success">Submit</button>
     </div>
 </div>`);
*/