// Calculator data
const calculators = [
  {
    title: "Simple Interest Calculator",
    description: "Calculate the simple interest on your investments or loans. Enter the principal, rate of interest, and time period to get the results.",
    link: "simple_interest_calculator.html"
  },
  {
    title: "Compound Interest Calculator",
    description: "Determine the compound interest and future value of your investments. Input the principal, rate of interest, time period, and compounding frequency.",
    link: "compound_interest_calculator.html"
  },
  {
    title: "Mutual Fund Lumpsum Calculator",
    description: "Evaluate the returns on a one-time investment in mutual funds. Enter the investment amount, rate of return, and time period.",
    link: "mutual_fund_lumpsum_calculator.html"
  },
  {
    title: "Mutual Fund SIP Calculator",
    description: "Calculate the returns on your SIP (Systematic Investment Plan) in mutual funds. Input the monthly investment amount, rate of return, and investment duration.",
    link: "mutual_fund_sip_calculator.html"
  }
];

// Function to display calculators based on search query
function displayCalculators() {
  const query = document.getElementById('search-bar').value.toLowerCase();
  const container = document.getElementById('calculator-list');
  container.innerHTML = '';
  calculators.forEach(calculator => {
    if (calculator.title.toLowerCase().includes(query) || calculator.description.toLowerCase().includes(query)) {
      const card = `
        <a href="${calculator.link}" class="block bg-white dark:bg-gray-800 shadow-md rounded-lg p-6">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">${calculator.title}</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-300">${calculator.description}</p>
        </a>
      `;
      container.innerHTML += card;
    }
  });
}

// Initial display of calculators
displayCalculators();