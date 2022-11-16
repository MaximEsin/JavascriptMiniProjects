class Bank {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance - amount <= 0) {
      console.log("You cannot withdraw more than you have!");
      return;
    }
    this.balance -= amount;
  }
}
const Max = new Bank("Max", 0);

const depositButton = document.getElementById("deposit");
const withdrawButton = document.getElementById("withdraw");
const amountInput = document.getElementById("amount");
const balanceDiv = document.getElementById("balance");

depositButton.onclick = () => {
  const amount = Number(amountInput.value);
  Max.deposit(amount);
  balanceDiv.innerText = `Balance: ${Max.balance}`;
};

withdrawButton.onclick = () => {
  const amount = Number(amountInput.value);
  Max.withdraw(amount);
  balanceDiv.innerText = `Balance: ${Max.balance}`;
};
