import { BankAccount } from "./BankAccount";

export class PersonAccount extends BankAccount {
    private doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number, balance: number, status: boolean){
        super(name, accountNumber, balance, status)
        this.doc_id = doc_id
    }
}