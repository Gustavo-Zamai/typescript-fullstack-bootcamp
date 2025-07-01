export abstract class BankAccount {

    private name: string
    private readonly accountNumber: number
    protected balance: number
    private status: boolean

    constructor(name: string, accountNumber: number, balance: number, status: boolean) {
        this.name = name
        this.accountNumber = accountNumber
        this.balance = balance
        this.status = status
    }

    // getters and setters
    setName = (name: string) => {
        this.name = name
    }

    getName = (): string => {
        return this.name
    }

    getAccountNumber = (): number => {
        return this.accountNumber
    }

    setBalance = (balance: number) => {
        this.balance = balance
    }

    getBalance = (): number => {
        return this.balance
    }

    setStatus = (status: boolean) => {
        this.status = status
    }

    getStatus = (): boolean => {
        return this.status
    }

    deposit = (deposit: number): number | undefined => {
        // TODO
        if(this.status){
            return this.balance += deposit
        } else {
            console.log("Account has expired")
        }
    }

    withdraw = (withdraw: number): number | undefined => {
        // TODO
        if(this.status && this.balance >= withdraw){
            return this.balance -= withdraw
        } else {
            console.log("Not enough balance")
        }
    }

    //returnBalance = (): number => {
    //    //TODO
    //    return 0
    //}

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error("Account has expired")
    }
}