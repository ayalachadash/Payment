class Credit extends Payment{
    constructor(date, sum, description, transactionStatus, type, user, creditNum){
        super(date, sum, description, transactionStatus, type, user);
        this.creditNum=creditNum;
    }
    toPay() {
        super.toPay();
    }
    toReturn() {
        super.toReturn();
    }
    editCredit(creditNum) {
        if (creditNum != 0) {
            this.creditNum = creditNum;
        }
    }
    editPayment(sum, description, user, creditNum) {
        super.editPayment(sum, description, user);
        this.editCredit(creditNum);
    }
}