function BankInfo(name, email, balance) {
  this.name = name,
  this.email = email,
  this.balance = balance
}

function BankAccount() {
  this.bankInfo = [];
  // this.currentId = 0;
}

BankAccountprototype.addInfo = function(info) {
  this.bankInfo.push(info);
}


$(document).ready(function() {

});
