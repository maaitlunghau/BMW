function batLoi() {
    var sName = document.getElementById('txtName').value;
    var sAddress = document.getElementById('txtAddress').value;
    var isValid = true;
    var reName = /^[A-Za-z0-9]/;

    if (sName.length == 0) {
        alert("Full name field can't left blank!");
        document.getElementById('txtName').focus();
        return false;
        isValid = false;
    }

    if (!reName.test(sName)) {
        alert("Full name field can't left blank!");
        document.getElementById('txtName').focus();
        return false;
        isValid = false;
    }

    var sGender = document.getElementById('txtGender').value;
    var sDate = document.getElementById('txtDate').value;

    if (sDate.length == 0) {
        alert("Date of birth is can't left blank!");
        document.getElementById('txtDate').focus();
        return false;
        isValid = false;
    }

    if (sAddress.length == 0) {
        alert("Address field can't left blank!");
        document.getElementById('txtAddress').focus();
        return false;
        isValid = false;
    }

    var sMail = document.getElementById('txtMail').value;

    if (sMail.length == "") {
        alert("Email field can't left blank!");
        document.getElementById('txtMail').focus();
        return false;
        isValid = false;
    }

    if ((sMail.indexOf("@") < 0) || (sMail.indexOf(".") < 0)) {
        alert("Email is invalid!");
        document.getElementById('txtMail').focus();
        return false;
        isValid = false;
    }

    var sPhone = document.getElementById('txtPhone').value;
    var reNumber = /^\d{8,12}$/;

    if (sPhone.length == 0) {
        alert("Phone field can't left blank!");
        document.getElementById('txtPhone').focus();
        return false;
        isValid = false;
    }

    if (isNaN(sPhone)) {
        alert("Phone is digit only!");
        document.getElementById('txtPhone').focus();
        return false;
        isValid = false;
    }

    if (!reNumber.test(sPhone)) {
        alert("Phone is range of the 8 - 12 digits!");
        document.getElementById('txtPhone').focus();
        return false;
        isValid = false;
    }

    var sCountry = document.getElementById('txtCountry').value;

    if (isValid) {
        alert("Registed Information\n+++++++++++++++++++++\n" +
            "Name: " + sName + "\n" +
            "Gender: " + sGender + "\n" +
            "Date of Birth: " + sDate + "\n" +
            "Address: " + sAddress + "\n" +
            "Mail: " + sMail + "\n" +
            "Phone: " + sPhone + "\n" +
            "Country: " + sCountry + "\n");
    }

}