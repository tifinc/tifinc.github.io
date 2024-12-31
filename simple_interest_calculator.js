document.addEventListener('DOMContentLoaded', function() {
  const principalInput = document.getElementById('principal');
  const rateInput = document.getElementById('rate');
  const timeInput = document.getElementById('time');
  const resultTable = document.getElementById('result-table');

  principalInput.addEventListener('input', formatCurrency);
  rateInput.addEventListener('input', calculateInterest);
  timeInput.addEventListener('input', calculateInterest);

  function formatCurrency(event) {
    const value = event.target.value.replace(/[^\d]/g, '');
    if (value) {
      const formattedValue = new Intl.NumberFormat('en-IN').format(value);
      event.target.value = formattedValue;
    } else {
      event.target.value = '';
    }
    calculateInterest();
  }

  function calculateInterest() {
    const principal = parseFloat(principalInput.value.replace(/,/g, ''));
    const rate = parseFloat(rateInput.value);
    const time = parseFloat(timeInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
      resultTable.innerHTML = 'Please enter valid numbers for all fields.';
      return;
    }

    const interest = (principal * rate * time) / 100;
    const totalAmount = principal + interest;
    const formattedInterest = interest.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 });
    const formattedTotalAmount = totalAmount.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0, maximumFractionDigits: 0 });

    resultTable.innerHTML = `
      <table class="min-w-full divide-y divide-gray-300 dark:divide-gray-700">
        <tbody>
          <tr>
            <td class="px-4 py-2 text-left">Principal Amount:</td>
            <td class="px-4 py-2 text-right">₹ ${principal.toLocaleString('en-IN')}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 text-left">Annual Interest Rate:</td>
            <td class="px-4 py-2 text-right">${rate} %</td>
          </tr>
          <tr>
            <td class="px-4 py-2 text-left">Time:</td>
            <td class="px-4 py-2 text-right">${time} years</td>
          </tr>
          <tr>
            <td class="px-4 py-2 text-left">Simple Interest:</td>
            <td class="px-4 py-2 text-right">${formattedInterest}</td>
          </tr>
          <tr>
            <td class="px-4 py-2 text-left">Total Amount:</td>
            <td class="px-4 py-2 text-right">${formattedTotalAmount}</td>
          </tr>
        </tbody>
      </table>
    `;
  }

  // Initialize with default values
  formatCurrency({ target: principalInput });
  calculateInterest();
});