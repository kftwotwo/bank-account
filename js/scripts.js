function Account(userName, money) {
  this.userName = userName;
  this.balance = money;
}
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var userName = $("#name").val();
    var firstDeposit = $("#firstDeposit").val();
    var secDeposit = $("#secDeposit").val();
    var withdrawl = $("#withdrawl").val();
    if (firstDeposit === "") {
      firstDeposit = 0;
    }
    if (secDeposit === "") {
      secDeposit = 0;
    }
    if (withdrawl === "") {
      withdrawl = 0;
    }
    var newAccount = new Account(userName, parseFloat(firstDeposit));
    console.log(newAccount.balance)
    newAccount.balance += parseFloat(secDeposit);
    newAccount.balance -= parseFloat(withdrawl);
    $("#userName").text(newAccount.userName);
    $("#balance").text(newAccount.balance.toFixed(2));


  })
})
