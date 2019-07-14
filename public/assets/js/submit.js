$(document).ready(function () {
    // Getting references to our form and inputs
    var submitButton = $(".submitButton");


    // When the form is submitted, we validate there's an email and password entered
    submitButton.on("click", function (event) {
        event.preventDefault();

        var bearingStation = $("#bearingStation").val();
        var passwordInput = $("input#password-input");
        var reasonForRequest = $("#reason-for-request").val();
        var additionComment = $("#addition-comment").val();
        var vendorName = $("#vendor-name").val().trim();
        // var reasonForReuqest = $("#reason-for-request").val().trim();
        var quantity = $("#quantity").val().trim();
        var purchaseType = $('.form-check-input:checked').val();
        var unitPrice = $("#addition-comment").val().trim();
        var unitPrice = $("#unit-price").val().trim();
        console.log(bearingStation);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = ((today.getFullYear())).toString().slice(-2);
        var randomnumber = Math.floor((Math.random() * 999) + 1);
        var request = "US" + bearingStation + yyyy + mm + dd + randomnumber;

        console.log(request);
        console.log(reasonForRequest);
        console.log(additionComment);
        console.log(vendorName);
        console.log(purchaseType);
        // console.log(reasonForReuqest);
        console.log(additionComment);
        console.log(quantity);
        console.log(unitPrice);


        var userData = {


            requestType: purchaseType,


        };

        // if (!userData.objective) {
        //     objective.css("border", "solid 1px red");
        //     $("#reason-for-request").text("Please enter a username");
        //     return;
        // }

        // if (!userData.vendorName) {
        //     passwordInput.css("border", "solid 1px red");
        //     $("#password-feedback").text("Please enter a password");
        //     return;
        // }

        // if (!userData.requestType) {
        //     alert("select request type");
        //     return;
        // }
        // If we have an email and password we run the signinUser function and clear the form
        addRequest(request, bearingStation, reasonForRequest, additionComment);
        console.log(userData.email);
        console.log(userData.password);

    });

    // signinUser does a post to our "api/signin" route and if successful, redirects us the the members page
    function addRequest(request, bearingStation, reasonForRequest, additionComment) {
        $.post("/addrequest", {
            "requestNumber": request,
            "bearingCost": bearingStation,
            "objective": reasonForRequest,
            "note": additionComment
        })
            .then(function (data) {

                // window.location = ("/addrequest")
                console.log("successful request add")
                console.log(data)
                // If there's an error, log the error
            })
            .catch(function (err) {
                console.log(err)
            });
    }
});