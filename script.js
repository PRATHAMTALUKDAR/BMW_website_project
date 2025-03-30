function calculate_loan(){
    let amt = parseFloat(document.getElementById('amt').value);
    let time = parseFloat(document.getElementById('time').value);
    let interest = (amt*time*12)/100;
    let loan = amt + interest;
    console.log(loan);
    document.getElementById('result').value = loan; 
}