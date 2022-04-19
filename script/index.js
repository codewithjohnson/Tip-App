const BillInput = document.getElementById('bill-input');
const FivePercent = document.getElementById('five-percent');
const TenPercent = document.getElementById('ten-percent');
const FifteenPercent = document.getElementById('fifteen-percent');
const TwentyFivePercent = document.getElementById('twenty-five-percent');
const FiftyPercent = document.getElementById('fifty-percent');
const CustomPercentInput = document.getElementById('custom-percent');
const CheckNumOfPeople = document.getElementById('check-numb-people');
const NumberOfPeopleInput = document.getElementById('number-of-people');
const FinalBill = document.getElementById('final-bill');
const TotalTip = document.getElementById('final-tip');
const TipPerPerson = document.getElementById('tip-amount-per-person');
const TotalAmountPerPerson = document.getElementById('total-amount-per-person');
const reset = document.getElementById('reset');


const GetBills = (BillInput)=>{
    if(BillInput.value!== "" || parseFloat(BillInput.value !== 0)){
        const BillInputValue = parseFloat(BillInput.value);
        return BillInputValue;
    }else{}
};

const GetPeople = (NumberOfPeopleInput)=>{
    if(NumberOfPeopleInput.value !== 0 || NumberOfPeopleInput.value !== ""){
        const NumberofPeople = parseInt(NumberOfPeopleInput.value);
        return NumberofPeople;
    }else{}
};


const CalculateTip = ()=>{
    FivePercent.addEventListener('click',()=>{
        const Bill = GetBills(BillInput);
        let tip = parseFloat((0.05 * Bill));
        const BillPlusTip = tip + Bill;

        const People = GetPeople(NumberOfPeopleInput);
        let people = parseInt(People);

        FinalBill.textContent = '';
        FinalBill.textContent = BillPlusTip;

        TotalTip.textContent = "";
        TotalTip.textContent = tip;

        if(People>0){
            TipPerPerson.textContent = '';
            TotalAmountPerPerson.textContent ='';
            TipPerPerson.textContent = tip / people;
            TotalAmountPerPerson.textContent = BillPlusTip / people;
        }
        else{
            TipPerPerson.textContent = tip / 1;
            TotalAmountPerPerson.textContent = BillPlusTip / 1;
        }
      

        // BillInput.value = '';
        // NumberOfPeopleInput.value = "";
    });

    TenPercent.addEventListener('click',()=>{
        const Bill = GetBills(BillInput);
        let tip = parseFloat((0.1 * Bill));
        const BillPlusTip = tip + Bill;

        const People = GetPeople(NumberOfPeopleInput);
        let people = parseInt(People);

        FinalBill.textContent = '';
        FinalBill.textContent = BillPlusTip;

        TotalTip.textContent = "";
        TotalTip.textContent = tip;
    
        if(People>0){
            TipPerPerson.textContent = '';
            TotalAmountPerPerson.textContent ='';
            TipPerPerson.textContent = tip / people;
            TotalAmountPerPerson.textContent = BillPlusTip / people;
        }
        else{
            TipPerPerson.textContent = tip / 1;
            TotalAmountPerPerson.textContent = BillPlusTip / 1;
        }
        // BillInput.value = '';
        // NumberOfPeopleInput.value = "";


    });
    FifteenPercent.addEventListener('click',()=>{
        const Bill = GetBills(BillInput);
        let tip = parseFloat((0.15 * Bill));
        const BillPlusTip = tip + Bill;

        const People = GetPeople(NumberOfPeopleInput);
        let people = parseInt(People);

        FinalBill.textContent = '';
        FinalBill.textContent = BillPlusTip;

        TotalTip.textContent = "";
        TotalTip.textContent = tip;
    
        if(People>0){
            TipPerPerson.textContent = '';
            TotalAmountPerPerson.textContent ='';
            TipPerPerson.textContent = tip / people;
            TotalAmountPerPerson.textContent = BillPlusTip / people;
        }
        else{
            TipPerPerson.textContent = tip / 1;
            TotalAmountPerPerson.textContent = BillPlusTip / 1;
        }

        // BillInput.value = '';
        // NumberOfPeopleInput.value = "";


    });
    TwentyFivePercent.addEventListener('click',()=>{
        const Bill = GetBills(BillInput);
        let tip = parseFloat((0.25 * Bill));
        const BillPlusTip = tip + Bill;

        const People = GetPeople(NumberOfPeopleInput);
        let people = parseInt(People);

        FinalBill.textContent = '';
        FinalBill.textContent = BillPlusTip;

        TotalTip.textContent = "";
        TotalTip.textContent = tip;
    
        if(People>0){
            TipPerPerson.textContent = '';
            TotalAmountPerPerson.textContent ='';
            TipPerPerson.textContent = tip / people;
            TotalAmountPerPerson.textContent = BillPlusTip / people;
        }
        else{
            TipPerPerson.textContent = tip / 1;
            TotalAmountPerPerson.textContent = BillPlusTip / 1;
        }

        // BillInput.value = '';
        // NumberOfPeopleInput.value = "";


    });
    FiftyPercent.addEventListener('click',()=>{
        const Bill = GetBills(BillInput);
        let tip = parseFloat((0.5 * Bill));
        const BillPlusTip = tip + Bill;

        const People = GetPeople(NumberOfPeopleInput);
        let people = parseInt(People);

        FinalBill.textContent = '';
        FinalBill.textContent = BillPlusTip;

        TotalTip.textContent = "";
        TotalTip.textContent = tip;
    
        if(People>0){
            TipPerPerson.textContent = '';
            TotalAmountPerPerson.textContent ='';
            TipPerPerson.textContent = tip / people;
            TotalAmountPerPerson.textContent = BillPlusTip / people;
        }
        else{
            TipPerPerson.textContent = tip / 1;
            TotalAmountPerPerson.textContent = BillPlusTip / 1;
        }

        // BillInput.value = '';
        // NumberOfPeopleInput.value = "";

    });
};

CalculateTip();


reset.addEventListener('click',()=>{
    location.reload();
});