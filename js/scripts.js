function Account(userName, firstDeposit, secDeposit, withdrawl) {
  this.userName = userName;
  this.firstDeposit = firstDeposit;
  this.balance = balance;
}



$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var firstDeposit = $("#firstDeposit").val();
    var secDeposit = $("#secDeposit").val();
    var withdrawl = $("#withdrawl").val();

    var newAccount = new Account(userName, firstDeposit, secDeposit);
    //this for "output or return"
    $("#userName").text(newAccount.userName);
    $("#balance").text(newAccount.firstDeposit);


  })
})
