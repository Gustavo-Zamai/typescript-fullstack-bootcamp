import { BankAccount } from "./BankAccount";


export class CompanyAccount extends BankAccount {
    constructor(name: string, accountNumber: number, balance: number, status: boolean){
        super(name, accountNumber, balance, status)
    }

    getLoan = (loan: number): void => {
        if(this.getStatus()){
            this.balance += loan
        }
    }
}