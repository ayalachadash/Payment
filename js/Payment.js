const paymentManeger = new PaymentManeger();
let id;

class Payment {
    constructor(date, sum, description, transactionStatus, type, user) {
        this.paymentId = id++;
        this.date = date;
        this.sum = sum;
        this.description = description;
        this.transactionStatus = transactionStatus;
        this.type = type;
        this.user = new User(user.name, user.phon);
    }

    toPay() {
        paymentManeger.addPayment(this);
    }
    toReturn() {
        paymentManeger.removePayment(this.paymentId);
    }
    editPayment(sum, description, user) {
        this.user.editUser(user);
        this.editDescription(description);
        this.editSum(sum);
    }
    editDescription(description) {
        if (description != "") {
            this.description = description;
        }
    }
    editSum(sum) {
        if (sum != 0) {
            this.sum = sum;
        }
    }
}