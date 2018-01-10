$(document).ready(function () {
    var name,
        to,
        subject,
        text;

    var emailOk = false;

    $('#send_email').click(function (e) {
            name = $('#name').val();
            subject = $('#email').val();
            text = $('#message').val();

            // check if email has @ on it
            function checkemail() {
                for (i = 0; i < subject.length; i++) {
                    if (subject[i] === '@') {
                        emailOk = true;
                        return true;
                    }
                }
            }
            checkemail();

            // If input is EMPTY
            if (name.length === 0 || subject.length === 0 || text.length === 0) {
                $('#message_ok').empty().text('Please fill the information')
                    .css('color', 'red')
                    .css('font-weight', 'bold');

            }
            // If Email input is not an email
            else if (emailOk === false) {

                $('#message_ok').empty().text('Please enter a valid E-mail address')
                    .css('color', 'red')
                    .css('font-weight', 'bold');

            }
            // All Ok continue
            else {
                $('#message_ok').empty().text('Sending E-mail... Please wait')
                    .css('color', '#b2b2b2')
                    .css('font-weight', 'normal');

                $.get('http://localhost:3000/send', {name: name, subject: subject, text: text}, function (data) {

                    if (data === 'sent') {
                        $('#message_ok').empty().html('Thanks for contact me ' + name + ' !');
                        $('#send_email').attr('disabled','true');
                    }
                })
            }
        }
    )
});