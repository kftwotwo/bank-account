function Account(userName, firstDeposit) {
  this.userName = userName;
  this.firstDeposit = firstDeposit;
}

var userName = $("#name").val();
var firstDeposit = $("#firstDeposit").val();

var newAccount = new Account(userName, firstDeposit);

$(document).ready(function(){
  ("form").submit(function(event){
    event.preventDefault();



  })
})
