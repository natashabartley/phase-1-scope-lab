var customerName = 'bob';
const leastFavoriteCustomer = 'someone else';
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

function setBestCustomer() {
    bestCustomer = 'not bob'; 
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'jessie';
}

