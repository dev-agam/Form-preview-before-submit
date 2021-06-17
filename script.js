$(() => {
    function validation(){
        var name = document.querySelector("#name");
        var fname = document.querySelector("#fname");
        var dob = document.querySelector("#dob");
        var gender = document.querySelector("#gender");
        var mobile = document.querySelector("#mobile");
        var add = document.querySelector("#add");

        // var preview = document.querySelector("#preview");

        if (name.value === ""){
            alert("Please Enter Name !");
            name.style.border = "1px solid red";
            return false;
        }
        else if (fname.value === ""){
            alert("Please Enter Father's Name !");
            fname.style.border = "1px solid red";
            return false;
        }
        else if (dob.value === ""){
            alert("Please Enter Date of Birth !");
            dob.style.border = "1px solid red";
            return false;
        }
        else if (gender.value === ""){
            alert("Please Select Gender !");
            gender.style.border = "1px solid red";
            return false;
        }
        else if (mobile.value === ""){
            alert("Please Enter Mobile Number !");
            mobile.style.border = "1px solid red";
            return false;
        }
        else if (add.value === ""){
            alert("Please Enter Address !");
            add.style.border = "1px solid red";
            return false;
        }
        else{
            return true;
        }

    }


    $("#preview").on('click', () => {
        var validate = validation();

        var name = document.querySelector("#name").value;
        var fname = document.querySelector("#fname").value;
        var dob = document.querySelector("#dob").value;
        var gender = document.querySelector("#gender").value;
        var mobile = document.querySelector("#mobile").value;
        var add = document.querySelector("#add").value;

        if(validate){
            $("#modalShow").click();

            document.querySelector("#nameValue").innerHTML = name;
            document.querySelector("#fnameValue").innerHTML = fname;
            document.querySelector("#dobValue").innerHTML = dob;
            document.querySelector("#genderValue").innerHTML = gender;
            document.querySelector("#mobileValue").innerHTML = mobile;
            document.querySelector("#addValue").innerHTML = add;
            
        }
    });

    $("#form").on('submit',(e) => {
        // e.preventDefault();
        var validate = validation();
        if(validate){
            $("#form").attr("action","response.html");
        }
        else{
            e.preventDefault();
        }
    });

});
