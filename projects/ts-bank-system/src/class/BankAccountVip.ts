import { BankAccount } from "./BankAccount";

export class BankAccountVip extends BankAccount {
    
    constructor(name: string, accountNumber: number, balance: number, status: boolean){
        super(name, accountNumber, balance, status)
    }

    // TODO implementar metodo deposit + 10 do que no BankAccount
    deposit = (deposit: number): number | undefined => {
        if(this.getStatus()){
            return this.balance += (deposit + 10)
        }
    }
}