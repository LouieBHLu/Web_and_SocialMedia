function login() {
    var name = document.getElementById("name");
    var phone = document.getElementById("phone");
    var address = document.getElementById("address");
 
    if(name.value == "") alert("请输入您的姓名");
    else if(phone.value  == "") alert("请输入您的联系方式");
    else if(address.value == "") alert("请输入您的联系地址");
    else alert("Welcome to our big family!")
}
