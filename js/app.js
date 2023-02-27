$(document).ready(function () {
    // plus button
    // let plusButtonState = false;
    // let initialId = 0;
    // let setInputField = '#input_field' + initialId;
    // console.log(initialId);
    $('#plus_btn').on('click', function () {
        // if (plusButtonState === false) {
        $('.add-items').append(`  
        <div class="border border-2  p-2 mt-3">
        <div>

            <label for="">Product Name</label>
            <input class="input-style" type="text" placeholder="Product name..">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute">Close</button>
            </div>
            <div>
            <label for="">Description</label>
            <input class="input-style" type="text" placeholder="">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute">Close</button>
            </div>
            <div>
            <label for="">Quantity</label>
            <input class="input-style" type="number" placeholder="">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute">Close</button>
            </div>
            <div>
            <label for="">Rate</label>
            <input class="input-style" type="number" placeholder="">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute">Close</button>
            </div>
            <div>
            <label for="">Amount</label>
            <input class="input-style" type="text" placeholder="">
            <button id="close_btn" type="button" class="btn btn-danger position-absolute">Close</button>
            </div>
           
        </div>`);
        //Making dynamic id
        function generateId() {
            let initialId = 0;
            console.log('executed')
            $('input').each(function () {
                initialId = initialId + 1;
                $(this).attr("id", "input_field" + initialId);
            })
        }
        generateId()
        // }
        // plusButtonState = true;

        // Removing the current input field when close button is clicked
        $('.btn-danger').on('click', function () {
            let findCurrentBtn = $(this).parent().remove();
            console.log(findCurrentBtn);
        })

    });

    // close button
    $('#close_btn').on('click', function () {
        console.log('working')
        $('#remove_all').remove();
    });
    // submit button
    $('#submit_btn').on('click', function () {
        // $('input-style').on('click',function(event){
        //     const details = event.target.value;
        //     console.log(details);
        // }) rough code
        let input1 = $('#input_field1').val();
        let input2 = $('#input_field2').val();
        let input3 = $('#input_field3').val();
        let input4 = $('#input_field4').val();
        let input5 = $('#input_field5').val();
        let input6 = $('#input_field6').val();
        let input7 = $('#input_field7').val();
        let input8 = $('#input_field8').val();
        const input9 = $('#input_field9').val();
        let input10 = $('#input_field10').val();
        let input11 = $('#input_field11').val();
        let input12 = $('#input_field12').val();
        let input13 = $('#input_field13').val();
        console.log(input1, input2, input3);
        $('#output_field').append(` 
        <div class="mt-3">
            <h4 class="text-success">Results</h4>
            <p>Buyers Name: ${input1}</p>
            <p>Mobile: ${input2}</p>
            <p>Address: ${input3}</p>
        </div>`);
        if (input4 === undefined) {
            console.log('inside input 9')
            return;
           
        }else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Product Name: ${input4}</p>
        </div>`)
        }
        if (input5 === undefined) {
            return;
         }
         else{
             $('#output_field').append(`
             <div class="mt-3">
             <p>Description: ${input5}</p>
         </div>`)
         }
         if (input6 === undefined) {
            return;
          }
          else{
              $('#output_field').append(`
              <div class="mt-3">
              <p>Quantity: ${input6}</p>
          </div>`)
          }
          if (input7 === undefined) {
            return;
          }
          else{
              $('#output_field').append(`
              <div class="mt-3">
              <p>Rate: ${input7}</p>
          </div>`)
          }
          if (input8 === undefined) {
            return;
          }
          else{
              $('#output_field').append(`
              <div class="mt-3">
              <p>Amount: ${input8}</p>
          </div>`)
          }
        if (input9 === undefined) {
            console.log('inside input 9')
            return;
           
        }else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Product Name: ${input9}</p>
        </div>`)
        }
        if (input10 === undefined) {
           return;
        }
        else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Description: ${input10}</p>
        </div>`)
        }
        if (input11 === undefined) {
          return;
        }
        else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Quantity: ${input11}</p>
        </div>`)
        }
        if (input12 === undefined) {
          return;
        }
        else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Rate: ${input12}</p>
        </div>`)
        }
        if (input13 === undefined) {
          return;
        }
        else{
            $('#output_field').append(`
            <div class="mt-3">
            <p>Amount: ${input13}</p>
        </div>`)
        }



        //For showing all input field items in console
        $("input").each(function () {
            var input = $(this).val();
            console.log(input);
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

    //trying dynamic setting value

    // $('#submit_btn').on('click', function () {
    //     $('input').each(function () {
    //         let elmId = $(this).attr("id");
    //         let elementIdFull = '#' + elmId;
    //         let elementIdFullDot = '"'+ elementIdFull +'"'
    //         var valueOfInput = $(elementIdFullDot).val();
    //         console.log(elmId, elementIdFull, elementIdFullDot,valueOfInput);




    //         $('#output_field').append(` 
    //     <div class="mt-3">
    //         <h4 class="text-success">Results</h4>
    //         <p>Buyers Name: ${elmId}</p>
    //     </div>`);

    //         // set value
    //     })


    //     // $('input').each(function(){
    //     //     let details = $(this).val();
    //     //     console.log(details);
    //     // } )
    // });

});



  //      $('#output_field').append(`
        // <div class="mt-3">
        //     <h4 class="text-success">Results</h4>
        //     <p>Buyers Name: ${$(elmId).val()}</p>
        //     <p>Mobile: ${$('#'+elmId).val()}</p>
        //     <p>Address: ${$(elmId).val()}</p>
        //     <p>Product Name: ${$(elmId).val()}</p>
        //     <p>Description: ${$(elmId).val()}</p>
        //     <p>Quantity: ${$(elmId).val()}</p>
        //     <p>Rate: ${$(elmId).val()}</p>
        //     <p>Amount: ${$(elmId).val()}</p>
        // </div>`);
