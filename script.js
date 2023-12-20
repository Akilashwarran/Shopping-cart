
document.getElementById('productForm').addEventListener('submit', function (event) {
    event.preventDefault();
    function submitForm() {
      
        // ---------------------input validation----------------
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
    
        createListDiv(productName, amount);
    }
    submitForm();
    function createListDiv(productName, amount) {
        let dataList = document.getElementById('data-lst');

        let newItem = document.createElement('div');
        newItem.className = 'newItem';

        
        

        let listname = document.createElement('h5');
        listname.className = 'list-name';
        listname.textContent = productName;

        let listamt = document.createElement('h5');
        listamt.className = 'list-amt';
        listamt.textContent = amount;

        let listdata = document.createElement('div');
        listdata.className = 'listdata';
        listdata.append(listname, listamt);
        let index = dataList.children.length;
        listdata.classList.add(index % 2 === 0 ? 'even' : 'odd');

        let deleteicn = createDeleteIcon(newItem, dataList,productName);

        newItem.addEventListener('mouseover', function () {
            deleteicn.style.display = 'inline';
        });

        newItem.addEventListener('mouseout', function () {
            deleteicn.style.display = 'none';
        });

        newItem.append(listdata, deleteicn);
        dataList.append(newItem);

        updateamt();
    }

    
    function createDeleteIcon(newItem, dataList, proname) {
        let deleteicn = document.createElement('li');
        deleteicn.className = 'fa-solid fa-trash';
        deleteicn.style.color = '#ff0000';
        deleteicn.style.display = 'none';
    
        deleteicn.addEventListener('click', function () {
            
            let confirm = window.confirm(`Do you want to delete the product ${proname}?`);
    
            if (confirm) {
                dataList.removeChild(newItem);
                updatebg();
                updateamt();
            }
        });
    
        return deleteicn;
    }
    
    function updatebg() {
        let dataList = document.getElementById('data-lst');
        let items = Array.from(dataList.children);

        items.forEach(function (item, index) {
            item.querySelector('.listdata').classList.remove('even', 'odd');
            item.querySelector('.listdata').classList.add(index % 2 === 0 ? 'even' : 'odd');
        });
    }

    function updateamt() {
        let totalAmount = 0;
        let totalamt = document.querySelectorAll('.list-amt');
    
        totalamt.forEach(function (listAmtElement) {
            totalAmount += parseFloat(listAmtElement.textContent);
        });
    
        document.getElementById('totalAmount').textContent = totalAmount;
    }

    let up=document.getElementById('up')
    up.addEventListener('click',decensort)

    function decensort() {
        let dataList = document.getElementById('data-lst');
        let order = Array.from(dataList.children);
    
        
        for (let i = 0; i < order.length - 1; i++) {
            for (let j = 0; j < order.length - 1 - i; j++) {
                let currentAmount = parseFloat(order[j].querySelector('.list-amt').textContent);
                let nextAmount = parseFloat(order[j + 1].querySelector('.list-amt').textContent);
    
                if (currentAmount < nextAmount) {
                  
                    let temp = order[j];
                    order[j] = order[j + 1];
                    order[j + 1] = temp;
                }
            }
        }
    
        
        while (dataList.firstChild) {
            dataList.removeChild(dataList.firstChild);
        }
    
       
        order.forEach(function (newItem) {
            dataList.appendChild(newItem);
        });
        updatebg();
        updateamt();
    }
    
   
    

    
});


