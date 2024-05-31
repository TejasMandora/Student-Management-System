
        $(document).ready(function () {
            $("#btnSave").on("click", function () {
                var name = $("input[name='name']").val();
                var email = $("input[name='email']").val();
                var address = $("input[name='address']").val();
                var phone = $("input[name='phone']").val();
                var gender = $("input[name='gender']:checked").val();
                var age = $("input[name='age']").val();

                // Reset error messages
                $(".error-message").text("");

                var isValid = true;

                // Address validation
                if (address.trim() === "") {
                    $("#addressError").text("Please enter the address.");
                    isValid = false;
                }

                // Name validation
                if (name === "") {
                    $("#nameError").text("Please enter a name.");
                    isValid = false;
                } else if (!/^[a-zA-Z\s]*$/.test(name)) {
                    $("#nameError").text("Name can only contain alphabetic characters.");
                    isValid = false;
                }

                // Email validation
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    $("#emailError").text("Please enter a valid email address.");
                    isValid = false;
                }

                // Phone number validation
                var phonePattern = /^\d{10}$/;
                if (!phonePattern.test(phone)) {
                    $("#phoneError").text("Please enter a valid 10-digit phone number.");
                    isValid = false;
                }

                // Age validation
                if (age === "") {
                    $("#ageError").text("Please enter your age.");
                    isValid = false;
                }

                if (isValid) {
                    $(".data-table tbody").append("<tr data-name='" + name + "' data-email='" + email + "' data-address='" + address + "' data-phone='" + phone + "' data-gender='" + gender + "' data-age='" + age + "'><td>" + name + "</td><td>" + email + "</td><td>" + address + "</td><td>" + phone + "</td><td>" + gender + "</td><td>" + age + "</td><td><button class='btn btn-danger btn-lg btn-delete mr-3' type='button'>Delete</button><button class='btn btn-info btn-lg btn-edit' type='button'>Edit</button></td></tr>");
                    $("input[name='name']").val(""); // Clear input fields after adding row
                    $("input[name='email']").val("");
                    $("input[name='address']").val("");
                    $("input[name='phone']").val("");
                    $("input[name='age']").val("");
                }
            });

            $('body').on('click', '.btn-delete', function () {
                $(this).parents('tr').remove();
            });

            $('body').on('click', '.btn-edit', function () {
                var name = $(this).parents('tr').attr('data-name');
                var email = $(this).parents('tr').attr('data-email');
                var address = $(this).parents('tr').attr('data-address');
                var phone = $(this).parents('tr').attr('data-phone');
                var gender = $(this).parents('tr').attr('data-gender');
                var age = $(this).parents('tr').attr('data-age');

                $(this).parents('tr').find('td:eq(0)').html("<input name='edit_text' value='" + name + "'>");
                $(this).parents('tr').find('td:eq(1)').html("<input name='edit_email' value='" + email + "'>");
                $(this).parents('tr').find('td:eq(2)').html("<input name='edit_address' value='" + address + "'>");
                $(this).parents('tr').find('td:eq(3)').html("<input name='edit_phone' value='" + phone + "'>");
                $(this).parents('tr').find('td:eq(4)').html("<input name='edit_gender' value='" + gender + "'>");
                $(this).parents('tr').find('td:eq(5)').html("<input name='edit_age' value='" + age + "'>");
                $(this).parents('tr').find('td:eq(6)').prepend("<button type='button' class='btn btn-info btn-lg btn-update mr-3'>Update</button>");
                $(this).hide()
            });

            $('body').on('click', '.btn-update', function () {
                var name = $(this).parents('tr').find("input[name='edit_text']").val();
                var email = $(this).parents('tr').find("input[name='edit_email']").val();
                var address = $(this).parents('tr').find("input[name='edit_address']").val();
                var phone = $(this).parents('tr').find("input[name='edit_phone']").val();
                var gender = $(this).parents('tr').find("input[name='edit_gender']").val();
                var age = $(this).parents('tr').find("input[name='edit_age']").val();

                // Simple email validation
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    $("#emailError").text("Please enter a valid email address.");
                    return;
                }

                // Phone number validation
                var phonePattern = /^\d{10}$/;
                if (!phonePattern.test(phone)) {
                    $("#phoneError").text("Please enter a valid 10-digit phone number.");
                    return;
                }

                $(this).parents('tr').find('td:eq(0)').text(name);
                $(this).parents('tr').find('td:eq(1)').text(email);
                $(this).parents('tr').find('td:eq(2)').text(address);
                $(this).parents('tr').find('td:eq(3)').text(phone);
                $(this).parents('tr').find('td:eq(4)').text(gender);
                $(this).parents('tr').find('td:eq(5)').text(age);

                $(this).parents('tr').attr('data-name', name);
                $(this).parents('tr').attr('data-email', email);
                $(this).parents('tr').attr('data-address', address);
                $(this).parents('tr').attr('data-phone', phone);
                $(this).parents('tr').attr('data-gender', gender);
                $(this).parents('tr').attr('data-age', age);

                $(this).parents('tr').find('.btn-edit').show();
                $(this).parents('tr').find('.btn-update').remove();
            });
        });
    