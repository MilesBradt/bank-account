function BankInfo(name, balance) {
  this.name = name,
  this.balance = balance
  console.log(this.balance);
  // this.email = email,
}

function BankAccount() {
  this.bankInfo = [];
  this.currentId = 0;
}

// function DepositAndWithdraw(deposit, withdraw) {
//
//   this.deposit = deposit,
//   this.withdraw = withdraw
//   console.log(deposit);
//   console.log(withdraw);
//   return (this.deposit, this.withdraw)
//
// }

BankAccount.prototype.addInfo = function(info) {
  BankInfo.id = this.assignId();
  this.bankInfo.push(info);
}

BankAccount.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

BankAccount.prototype.depositing = function(deposit) {
  var account = this.bankInfo[0]
  return deposit + account.balance
}

BankAccount.prototype.withdrawing = function(withdraw) {
  var account = this.bankInfo[0];
  return account.balance - withdraw;
}

var newAccount = new BankAccount;
$(document).ready(function() {
});
