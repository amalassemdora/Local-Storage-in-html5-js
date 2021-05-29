/*
 *First check validation 
 *if it true 
 *
 */



var arr = [];

document.getElementById('add').onclick = function() {
    if (check_validation()) {
        if (GetData() !== null)
            PushData();
        document.getElementById("noData").innerHTML = "";
        //user object
        var userdata = {
            Id: document.getElementById("id").value,
            FullName: document.getElementById("name").value,
            Email: document.getElementById("email").value,
            Telepone: document.getElementById("tel").value,
            Age: document.getElementById("age").value
        }
        arr.push(userdata);
        //store user data in localStorage
        localStorage.setItem("User_Data", JSON.stringify(arr));
        alert("Record of data is Saved");
    }
}

function PushData() {
    if (arr.length == 0) {
        for (i = 0; i < GetData().length; i++) {
            arr.push(GetData()[i]);
        }
    }
}

function GetData() {
    var getdata = JSON.parse(localStorage.getItem("User_Data"));
    return getdata;
}

function check_validation() {
    if (document.getElementById("id").value == "") {
        alert("ID don't allow to be empty and must be unique number.");
        return false;
    } else {
        for (i = 0; i < arr.length; i++) {
            if (document.getElementById("id").value == arr[i].Id) {
                alert("ID must be Unique!!!!");
                return false;
            }
        }
    }
    if (document.getElementById("name").value == "") {
        alert("input don't allow to be empty and must start with alphabet letter.");
        return false;
    }
    if (document.getElementById("email").value == "") {
        alert("input don't allow to be empty and must be liked email pattern [name@example.com].");
        return false;
    }
    if (document.getElementById("tel").value == "") {
        alert("input don't allow to be empty and must be in pattern of[0000-000-0000");
        return false;
    }
    if (document.getElementById("age").value == "") {
        alert("input don't allow to be empty and must be number from 1 to 45");
        return false;
    } else if (age.value < 1 || age.value > 45) {
        alert("Age must be number from 1 to 45");
        return false;

    }
    return true;
}
document.getElementById("display").onclick = function() {
    if (GetData() == null) {
        document.getElementById("noData").innerHTML = "There is no data found to display!!!!";
    } else {
        document.getElementById("DisplayTable").innerHTML =
            "<tr> <th>ID</th> <th>User Name</th> <th>Email</th><th>Telephone</th> <th>Age</th> </tr>";
        for (i = 0; i < GetData().length; i++) {
            document.getElementById("DisplayTable").innerHTML += "<tr> <td>" + GetData()[i].Id + " </td>   <td>" + GetData()[i].FullName + "  </td>  <td>" + GetData()[i].Email + "  </td> <td>" + GetData()[i].Telepone + " </td>  <td>" + GetData()[i].Age + "  </td>  </tr>";
        }
    }
}
document.getElementById("Clear").onclick = function() {
    document.getElementById("DisplayTable").innerHTML = "";
}
document.getElementById("Remove").onclick = function() {
    window.localStorage.removeItem('User_Data');
    document.getElementById("Clear").onclick();

}