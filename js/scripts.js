//Business logic
function BankInfo(name, initialDepositChecking, initialDepositSaving) {
  this.name = name,
  this.balanceChecking = initialDepositChecking
  this.balanceSaving = initialDepositSaving
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

BankAccount.prototype.depositing = function(deposit, id) {
  var account = this.bankInfo[0];
  if(id === "0") {
  return account.balanceChecking = deposit + account.balanceChecking;
  } else if (id === "1") {
  return account.balanceSaving = deposit + account.balanceSaving;
  }
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
    var initialDepositChecking = parseInt($("#initialDepositChecking").val());
    var initialDepositSaving = parseInt($("#initialDepositSaving").val());
    var initialInfo = new BankInfo(name, initialDepositChecking, initialDepositSaving);
    newAccount.addInfo(initialInfo);

    $(".output").show();

    $(".checkingOrSaving").show();
    $(".initialSetup").hide();
    $("#nameOutput").text(initialInfo.name);
    $("#checkingOutput").text(initialInfo.balanceChecking);
    $("#savingsOutput").text(initialInfo.balanceSaving);
  });

  $("#depositOrWithdraw").change(function() {
    var result = $("#depositOrWithdraw").val();
    if (result === "deposit") {
      $(".deposit").show();
      $(".withdrawal").hide();
    } else if (result === "withdraw") {
      $(".withdrawal").show();
      $(".deposit").hide();
    }
  });

  $(".balances").submit(function(event) {
    event.preventDefault();
    var id = $("#checkingOrSavingSelect").val();
    console.log(id);
    var deposit = parseInt($("#deposit").val());
    console.log(deposit);
    if (id === "0") {
    var depositChecking = newAccount.depositing(deposit, id);
    } else if (id === "1") {
    var depositSaving = newAccount.depositing(deposit, id);
    }
    $("#checkingOutput").text(depositChecking);
    $("#savingsOutput").text(depositSaving);

    var withdrawal = parseInt($("#withdrawal").val());
    $("#balanceOutput").text(newAccount.withdrawing(withdrawal));
  });
});
