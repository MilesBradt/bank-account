//Business logic
function BankInfo(name, initialDeposit) {
  this.name = name,
  this.balance = initialDeposit
}

function BankAccount() {
  this.bankInfo = [];
  // this.currentId = 0;
}

BankAccount.prototype.addInfo = function(info) {
  // BankInfo.id = this.assignId();
  this.bankInfo.push(info);
}

// BankAccount.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

BankAccount.prototype.depositing = function(deposit) {
  var account = this.bankInfo[0];
  return account.balance = deposit + account.balance;
}

BankAccount.prototype.withdrawing = function(withdraw) {
  var account = this.bankInfo[0];
  return account.balance = account.balance - withdraw;
}

//User interface logic
var newAccount = new BankAccount;

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initiaDeposit = parseInt($("#initialDeposit").val());
    var initialInfo = new BankInfo(name, initiaDeposit);
    newAccount.addInfo(initialInfo);

    $(".output").show();
    $(".changingBalance").show();
    $(".initialSetup").hide();
    $("#nameOutput").text(initialInfo.name);
    $("#balanceOutput").text(initialInfo.balance);
  });

  $("#depositOrWithdraw").change(function(event) {
    event.preventDefault();
    var result = $("#depositOrWithdraw").val();
    if (result === "deposit") {
      $(".deposit").show();
      $(".withdrawal").hide();
    } else if (result === "withdraw") {
      $(".withdrawal").show();
      $(".deposit").hide();
    }
  });

  $("#depositButton").click(function(){
    var deposit = parseInt($("#deposit").val());
    var id = 0
    $("#balanceOutput").text(newAccount.depositing(deposit, id));
  });

  $("#withdrawalButton").click(function(){
    var withdrawal = parseInt($("#withdrawal").val());
    $("#balanceOutput").text(newAccount.withdrawing(withdrawal));
  });
});
