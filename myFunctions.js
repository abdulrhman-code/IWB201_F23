function refreshCaptcha(event) {
    event.preventDefault();
    var newCaptcha = generateCaptcha();
    document.getElementById("captcha").innerText = newCaptcha;

    function generateCaptcha() {
    var characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var captcha = "";

    for (var i = 0; i < 6; i++) {
    captcha += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return captcha;
}
}
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("captcha").innerText = "ABC123";
    refreshCaptcha();
});


function RR(name, nationalId, mobile, email, captcha) {///nnnnn
    var isValid = validateInput(name, nationalId, mobile, email, captcha);
    if (isValid) {
        var selectedRadio = document.querySelector('input[name="radio"]:checked');
        if (selectedRadio) {
            var radioId = selectedRadio.id;
            var elementsWithSameClass = document.querySelectorAll('.' + radioId);
            elementsWithSameClass.forEach(function (element) {
                var h2Elements = element.querySelectorAll('h2');
                var all = " تم حجز العقار الذي يحمل المواصفات :  ";
                h2Elements.forEach(function (h2) {
                    all += h2.textContent + "   "; // عرض محتوى كل عنصر h2
                });
                alert(all.trim());
            });
        }
    }
    else
        event.preventDefault();
}function validateInput(name, nationalId, mobile, email, captcha) {
    var isValid = true;

    if (!name ||!nationalId ||!mobile ||!email ||!captcha) {
        alert('يجب ملء جميع الحقول.');
        isValid = false;
    } else {
        if (!/^[\u0621-\u064A\u0600-\u0604\s]+$/.test(name)) {
            alert('يجب أن يكون الاسم باللغة العربية.');
            isValid = false;
        }
        var numberPattern = /^(0[1-9]|1[0-5])[0-9]{9}$/;
        if (!numberPattern.test(nationalId)) {
            alert("يرجى إدخال رقم وطني صالح بين 01 و 15");
            isValid = false;
        }
        var mobilePattern = /^09(3|4|5|6|8|9)[0-9]{7}$/;
        if (!mobilePattern.test(mobile)) {
            alert("يرجى إدخال رقم هاتف صالح مع رمز البلد (مثال: 0931234567)");
            isValid = false;
        }
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("يرجى إدخال عنوان بريد إلكتروني صالح");
            isValid = false;
        }
        if (captcha!== document.getElementById('captcha').textContent) {
            alert('رمز التحقق غير صحيح.');
            isValid = false;
        }
    }

    if (isValid) {
        alert('تمت العملية بنجاح ');
        return true;
    } else {
        return false;
    }
}
document.querySelectorAll('input[name="radio"]').forEach(function (radio) {
    radio.addEventListener('change', function (event) {
        document.querySelector('.btn1').disabled = false;
    });
});
//-* * * * * * * * * * * * * *
//-* SHOW - HIDE LOGIN FORM  *
//-* * * * * * * * * * * * * *

// Handler

$(document).ready(function () {

    $(".showHideCheckbox1").click(function () {
        $(".hid1").fadeToggle()
    })
    $(".showHideCheckbox2").click(function () {
        $(".hid2").fadeToggle()
    })
    $(".showHideCheckbox3").click(function () {
        $(".hid3").fadeToggle()
    })
    $(".showHideCheckbox4").click(function () {
        $(".hid4").fadeToggle()
    })
    $(".showHideCheckbox5").click(function () {
        $(".hid5").fadeToggle()
    })
    $(".showHideCheckbox6").click(function () {
        $(".hid6").fadeToggle()
    })
    $(".showHideCheckbox7").click(function () {
        $(".hid7").fadeToggle()
    })
    $(".showHideCheckbox8").click(function () {
        $(".hid8").fadeToggle()
    })
    $(".showHideCheckbox9").click(function () {
        $(".hid9").fadeToggle()
    })
    $(".showHideCheckbox10").click(function () {
        $(".hid10").fadeToggle()
    })
    $('.btn1').click(function () {
        $('.form').Toggle()
    })
});
