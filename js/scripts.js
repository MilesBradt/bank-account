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

BankAccount.prototype.withdrawing = function(withdraw, id) {
  var account = this.bankInfo[0];
  if(id === "0") {
    return account.balanceChecking = account.balanceChecking - withdraw;
  } else if(id ==="1") {
    return account.balanceSaving = account.balanceSaving - withdraw;
  }
}

//User interface logic
var newAccount = new BankAccount;

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var initialDepositChecking = $("#initialDepositChecking").val();
    var initialDepositSaving = $("#initialDepositSaving").val();
    if (initialDepositSaving === "" || initialDepositChecking ===""){
      alert("Please enter a number")
    } else {
    parseInt(initialDepositChecking)
    parseInt(initialDepositSaving)
    var initialInfo = new BankInfo(name, initialDepositChecking, initialDepositSaving);
    newAccount.addInfo(initialInfo);

    $(".output").show();

    $(".checkingOrSaving").show();
    $(".initialSetup").hide();
    $("#nameOutput").text(initialInfo.name);
    $("#checkingOutput").text(initialInfo.balanceChecking);
    $("#savingsOutput").text(initialInfo.balanceSaving);
    }
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
    var dOrW = $("#depositOrWithdraw").val();
    var deposit = $("#deposit").val();
    var withdraw = $("#withdrawal").val();

    if(dOrW === "deposit") {
      if(deposit === "") {
        alert("Please enter a number");
      } else if (id === "0") {
        var deposit = parseInt(deposit);
        var depositChecking = newAccount.depositing(deposit, id);
      } else if (id === "1") {
        var deposit = parseInt(deposit);
        var depositSaving = newAccount.depositing(deposit, id);
      }
      $("#checkingOutput").text(depositChecking);
      $("#savingsOutput").text(depositSaving);
    } else if(dOrW === "withdraw") {
      if(withdraw === ""){
        alert("Please enter a number");
      } else if (id === "0") {
        var withdraw = parseInt(withdraw);
        var withdrawChecking = newAccount.withdrawing(withdraw, id);
      } else if (id === "1") {
        var withdraw = parseInt(withdraw);
        var withdrawSaving = newAccount.withdrawing(withdraw, id);
      }
      $("#checkingOutput").text(withdrawChecking);
      $("#savingsOutput").text(withdrawSaving);
    }
  });
});
