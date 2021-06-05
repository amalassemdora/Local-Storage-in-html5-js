var arr = [];
var flag2 = false;
document.getElementById('add').onclick = function() {
    if (!flag2) {
        check_Validation();
    } else {
        document.getElementById('NotFound').innerText = " ";
        document.getElementById("DisplayInTable").innertext = " ";
        var user = {
            ID: document.getElementById("id").value,
            FullName: document.getElementById("name").value,
            Email: document.getElementById("email").value,
            Telepone: document.getElementById("tel").value,
            Age: document.getElementById("age").value
        }
        localStorage.setItem("User_Data", JSON.stringify(user));
        var getdata = JSON.parse(localStorage.getItem("User_Data"));
        //console.log(getdata);
        /*check id*/
        if (arr.length == 0) {
            // for the first time where array is empty
            arr.push(getdata);
            alert("Record of data is Saved");
        } else {
            var flag;
            for (var j = 0; j < arr.length; j++) {
                if (document.getElementById("id").value != arr[j].ID) {
                    flag = true;
                } else {
                    flag = false
                }
            }
            if (flag) {
                arr.push(getdata);
                alert("Record of data is Saved.");
            } else {
                alert("Id must be unique.");
                console.log("Id must be unique.");
            }
        }
        flag2 = false;
    }
}
document.getElementById('display').onclick = function() {
    if (arr.length == 0) {
        document.getElementById('NotFound').innerText = "There is no data found to display!!!!";
    } else {
        document.getElementById('NotFound').innerText = " ";
        document.getElementById('DisplayInTable').innerHTML = "<tr> <th>ID</th> <th>User Name</th> <th>Email</th><th>Telephone</th> <th>Age</th> </tr>";
        for (var i = 0; i < arr.length; i++) {
            document.getElementById("DisplayInTable").innerHTML += "<tr> <td>" + arr[i].ID + " </td>   <td>" + arr[i].FullName + "  </td>  <td>" + arr[i].Email + "  </td> <td>" + arr[i].Telepone + " </td>  <td>" + arr[i].Age + "  </td>  </tr>";
        }
    }
}

function check_Validation() {
    if (document.getElementById("id").value == "") {
        alert("Id must be filled");
        // flag2 = false;
    } else {
        if (document.getElementById("name").value == "") {
            alert("Name must be filled");
            flag2 = false;
        } else {
            if (document.getElementById("email").value == "") {
                alert("Email must be fill and must follow the mail pattern");
                flag2 = false;
            } else {
                if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.com$/g.test(document.getElementById("email").value))) {
                    alert("Email must follow the mail pattern");
                    flag2 = false;
                } else {
                    if (document.getElementById("tel").value == "") {
                        alert("Phone must be filled");
                        flag2 = false;
                    } else {
                        if (!(/^[0-9]{4}-[0-9]{3}-[0-9]{4}$/g.test(document.getElementById("tel").value))) {
                            alert("Phone must  follow pattern [0000-000-0000].");
                            flag2 = false;
                        } else {
                            if (document.getElementById("age").value == "") {
                                alert("Age must be filled and must be less or equal 45.");
                                flag2 = false;
                            } else {
                                if (document.getElementById("age").value > 45) {
                                    alert("Age must be less or equal 45");
                                    flag2 = false;
                                } else {
                                    flag2 = true;
                                }


                            }
                        }
                    }
                }
            }
        }
    }

}