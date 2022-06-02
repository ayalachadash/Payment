class PaymentManeger{
    constructor(){
        this.payments=[];
    }

    addPayment(payment){
        this.payments.push(payment);
    }
    removePayment(paymentId){
        const index=this.payments.indexOf(p=>p.paymentId===paymentId);
        this.payments.splice(index, 1);
    }
}