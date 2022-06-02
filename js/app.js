const date=document.getElementById('date');
const sum=document.getElementById('sum');
const descreption=document.getElementById('descreption');
const transactionStatus=document.getElementById('transactionStatus');
const type=document.getElementById('type');
const name=document.getElementById('name');
const phon=document.getElementById('phon');
const creditNum=document.getElementById('creditNum');
const ClearingId=document.getElementById('ClearingId');
const user = {
    name:name,
    phon: phon
}

const addPayment = () => {
    let objPlayment;
    if(transactionStatus==null){
        alert("erorr");
    }
    else{
        if(transactionStatus==="Cech"){
            objPlayment=new Payment(date,sum,descreption,transactionStatus,type,user);
        }
        else
        if(transactionStatus==="Clearing"){
            objPlayment=new Clearing(date,sum,descreption,transactionStatus,type,user,ClearingId);
        }
        else
        if(transactionStatus==="Credit"){
            objPlayment=new Credit(date,sum,descreption,transactionStatus,type,user,creditNum);
        }
        objPlayment.toPay();
    }
}

const paymentType = () => {

}
