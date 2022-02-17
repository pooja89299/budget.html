const money_plus=document.getElementById("money-plus");
const money_plus=document.getElementById("money_minus")
const list= document.getElementById("list");
const form= document.getElementById("form");
const text=document.getElementById("text");
const amount=document.getElementById("amount");

   
let transactions =[];

// Add Transactions
function addTransaction(e){
    e.preventDefault();
    if(
        text.value.trim()=== "" || amount.value.trim()=== ""
    ){
        alert("please Emter Text And value");
    }else{
        const transaction={
            id: genereteID(),
            text: text.value,
            amount: +amount.value,
        };

        transactions.push(transaction);
        addTransactionDDM(transaction);
        Updatevalues();
        text.value ="";
        amount.value="";
    }
}

// generete id

function genereteID(){
    return Math.floor(Math.random()*100000000);
}




function addTransactionDDM(Transactions){
    const sign=transaction.amount <0? "=":"+";
    const item=document.createElement("li");



    item.classList.add(
        transaction.amount <0?"minus" :"plus"
    )

    item.innerHTML=`
    ${transaction.text}<span>${sign}${Math.abs(transaction.amount
    )}</span>

    <button class="delete-btn" onclick="">x</button>
    `;

    list.appendChild(items);
}

// Update updatelues

function Updatevalues(){
    const amounts =transactions.map(
    (transaction) => transaction.amount
    );
    const total=amounts
    .reduce((acc,item) => (acc +=item),0)
    .toFixed(2)
    const incame =amounts
    .filter((item) => item>0)
    .reduce((acc,item) =>(acc += item),0)
    .toFixed(2);
    const expense=(
        amounts
        .filter((item) => item <0)
        .reduce((acc,item) => (acc += item),0)*-1
    ).toFixed(2)

    // const amounts=transaction.map(transaction =>transaction.amount);
    // const total=amounts.reduce((acc,item)=>(acc+=item),0).toFixed(2)
    // const income =amounts.filter(item => item >0).reduce((acc,item)=> (acc += item),0).toFixed(2);
    // const expense =(
    //     amounts.filter(item => item >0).reduce((acc,item)=>(acc,item),0)*-1
    // ).toFixed(2)
        // Updatevalues

        balance.innerText=`$${total}`
        money_plus.innerText=`$${income}`
        money_minus.innerText=`$${expense}`
    
}

// Init App

function Init(){
    list.innerHTML="";
    transaction.forEach(addTransactionDDM);
    Updatevalues();
}


Init();

form.addEventListener("submit",addTransaction);












