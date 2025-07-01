import { BankAccountVip } from "./class/BankAccountVip";
import { CompanyAccount } from "./class/CompanyAccount";
import { PersonAccount } from "./class/PersonAccount";

const personAccount = new PersonAccount(333, "Gustavo", 5, 0, true);
//personAccount.deposit(250)
//console.log(personAccount)
//personAccount.withdraw(250)
//console.log(personAccount.getBalance())
//personAccount.setStatus(false)
//console.log(personAccount.getAccountNumber())

const companyAccount = new CompanyAccount("Company", 123, 0, true);
//companyAccount.getLoan(300);
//companyAccount.getLoan(50)
//console.log(companyAccount.getBalance())
//companyAccount.withdraw(350)
//console.log(companyAccount.getBalance())

const vipAccount = new BankAccountVip("VIP User", 777, 0, true);
//vipAccount.deposit(110)
//vipAccount.withdraw(121)
//console.log(vipAccount.getBalance())