class Clearing extends Payment {
    constructor(date, sum, description, transactionStatus, type, user, clearingId) {
        super(date, sum, description, transactionStatus, type, user);
        this.clearingId = clearingId;
    }
    toPay() {
        super.toPay();
    }
    toReturn() {
        super.toReturn();
    }

    editClearingId(clearingId) {
        if (clearingId != 0) {
            this.clearingId = clearingId;
        }
    }
    editPayment(sum, description, user, clearingId) {
        super.editPayment(sum, description, user);
        this.editClearingId(clearingId);
    }
}