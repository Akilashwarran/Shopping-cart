
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
// ---------------------input validation----------------
let count = 0;
    let productName = document.getElementById('productName').value;
    let amount = document.getElementById('amount').value;

    if (productName === '') {
        document.getElementById('pr-error').textContent = 'Invalid Product Name';
        return;
    } else {
        document.getElementById('pr-error').textContent = '';
    }

    if (amount === '' || isNaN(amount)) {
        document.getElementById('amt-error').textContent = 'Invalid amount';
        return;
    } else {
        document.getElementById('amt-error').textContent = '';
    }

// ---------------------creating list divs---------------
    let dataList = document.getElementById('data-lst');
    let newItem = document.createElement('div');
    
    newItem.className='newItem'
   
    if (count % 2 === 0) {
        newItem.style.backgroundColor = 'grey';
    }

    let listname = document.createElement('h5')
    listname.className='list-name'
    listname.textContent = productName; 
    let listamt = document.createElement('h5')
    let listdata= document.createElement('div')
    listdata.className='listdata'
    listdata.append(listname,listamt)
    
    listamt.classname='list-amt'
    listamt.textContent = amount;
    let deleteicn =document.createElement('li')
    deleteicn.className='fa-solid fa-trash'

    newItem.append(listname,listamt)
    dataList.append(newItem,deleteicn);
    count++
  
    let totalAmount = parseFloat(document.getElementById('totalAmount').textContent);
    totalAmount += parseFloat(amount);
    document.getElementById('totalAmount').textContent = totalAmount;

   



    
});


