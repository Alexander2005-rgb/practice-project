document.addEventListener('DOMContentLoaded', () => { // Wait for the DOM to fully load before running the script
    const watchlist = document.getElementById('watchlist'); // Get the watchlist element by its ID
    const stockInfo = document.getElementById('stock-info'); // Get the stock info display element by its ID
    const searchInput = document.getElementById('search'); // Get the search input element by its ID
    const stockTableBody = document.querySelector('#stock-table tbody'); // Get the tbody element of the stock table

    let watchlistStocks = [ // Initialize the watchlist with some default stocks
        { symbol: 'AAPL', name: 'Apple Inc.', 
        price: 150.54, change: 0.5 }, // Apple stock with price and change
        { symbol: 'GOOGL', name: 'Alphabet Inc.',
         price: 2800.66, change: -1.2 }, // Alphabet stock with price and change
        { symbol: 'AMZN', name: 'Amazon.com Inc.', 
        price: 3401.46, change: 2.1 }, // Amazon stock with price and change
        { symbol: 'MSFT', name: 'Microsoft Corporation', 
        price: 299.35, change: -0.3 } // Microsoft stock with price and change
    ];

    const allStocks = [ // List of all available stocks with their details
        { symbol: 'AAPL', name: 'Apple Inc.', 
        price: 150.54, change: 0.5 }, // Apple stock
        { symbol: 'GOOGL', name: 'Alphabet Inc.',
         price: 2800.66, change: -1.2 }, // Alphabet stock
        { symbol: 'AMZN', name: 'Amazon.com Inc.',
         price: 3401.46, change: 2.1 }, // Amazon stock
        { symbol: 'MSFT', name: 'Microsoft Corporation',
         price: 299.35, change: -0.3 }, // Microsoft stock
        { symbol: 'FB', name: 'Meta Platforms Inc.', 
        price: 355.23, change: 1.4 }, // Meta stock
        { symbol: 'TSLA', name: 'Tesla Inc.',
         price: 720.25, change: 0.8 }, // Tesla stock
        { symbol: 'NFLX', name: 'Netflix Inc.',
         price: 510.89, change: -0.6 }, // Netflix stock
        { symbol: 'NVDA', name: 'NVIDIA Corporation',
         price: 198.67, change: 1.2 }, // NVIDIA stock
        { symbol: 'PYPL', name: 'PayPal Holdings Inc.', 
        price: 245.12, change: -0.4 }, // PayPal stock
        { symbol: 'INTC', name: 'Intel Corporation',
         price: 54.22, change: 0.3 }, // Intel stock
        { symbol: 'CSCO', name: 'Cisco Systems Inc.',
         price: 53.45, change: -0.2 }, // Cisco stock
        { symbol: 'PEP', name: 'PepsiCo Inc.',
         price: 148.87, change: 0.7 }, // PepsiCo stock
        { symbol: 'KO', name: 'The Coca-Cola Company',
         price: 54.95, change: 0.6 }, // Coca-Cola stock
        { symbol: 'PFE', name: 'Pfizer Inc.',
         price: 41.21, change: -0.1 }, // Pfizer stock
        { symbol: 'JNJ', name: 'Johnson & Johnson',
         price: 163.45, change: 0.2 }, // Johnson & Johnson stock
        { symbol: 'V', name: 'Visa Inc.', 
        price: 222.34, change: -0.5 }, // Visa stock
        { symbol: 'MA', name: 'Mastercard Incorporated',
         price: 349.56, change: 0.4 }, // Mastercard stock
        { symbol: 'DIS', name: 'The Walt Disney Company',
         price: 179.32, change: -0.8 }, // Disney stock
        { symbol: 'ADBE', name: 'Adobe Inc.', 
        price: 590.67, change: 1.1 }, // Adobe stock
        { symbol: 'CRM', name: 'Salesforce.com Inc.',
         price: 252.44, change: -0.7 }, // Salesforce stock
        { symbol: 'ORCL', name: 'Oracle Corporation',
         price: 87.32, change: 0.3 }, // Oracle stock
        { symbol: 'IBM', name: 'International Business Machines Corporation',
         price: 142.31, change: 0.2 }, // IBM stock
        { symbol: 'UBER', name: 'Uber Technologies Inc.',
         price: 51.23, change: 1.0 }, // Uber stock
        { symbol: 'LYFT', name: 'Lyft Inc.',
         price: 47.56, change: -1.1 }, // Lyft stock
        { symbol: 'TWTR', name: 'Twitter Inc.',
         price: 64.98, change: 0.9 }, // Twitter stock
        { symbol: 'SNAP', name: 'Snap Inc.', 
        price: 70.55, change: -0.5 }, // Snap stock
        { symbol: 'SQ', name: 'Block Inc.', 
        price: 245.67, change: 1.3 }, // Block stock
        { symbol: 'SPOT', name: 'Spotify Technology S.A.', 
        price: 265.78, change: -0.4 }, // Spotify stock
        { symbol: 'ZM', name: 'Zoom Video Communications Inc.',
         price: 355.67, change: -1.0 }, // Zoom stock
        { symbol: 'DOCU', name: 'DocuSign Inc.',
         price: 285.34, change: 0.6 }, // DocuSign stock
        { symbol: 'BABA', name: 'Alibaba Group Holding Limited',
         price: 230.45, change: -0.8 }, // Alibaba stock
        { symbol: 'JD', name: 'JD.com Inc.',
         price: 81.23, change: 0.7 }, // JD.com stock
        { symbol: 'SHOP', name: 'Shopify Inc.',
         price: 1220.78, change: 1.4 }, // Shopify stock
        { symbol: 'WMT', name: 'Walmart Inc.',
         price: 139.54, change: -0.2 }, // Walmart stock
        { symbol: 'TGT', name: 'Target Corporation',
         price: 230.56, change: 0.5 }, // Target stock
        { symbol: 'MCD', name: 'McDonald\'s Corporation',
         price: 232.67, change: -0.3 }, // McDonald's stock
        { symbol: 'SBUX', name: 'Starbucks Corporation', 
        price: 114.23, change: 0.2 }, // Starbucks stock
        { symbol: 'NKE', name: 'NIKE Inc.',
         price: 147.56, change: 0.8 }, // Nike stock
        { symbol: 'LULU', name: 'Lululemon Athletica Inc.', 
        price: 372.45, change: -0.5 }, // Lululemon stock
        { symbol: 'BA', name: 'The Boeing Company', 
        price: 241.78, change: 1.0 }, // Boeing stock
        { symbol: 'GE', name: 'General Electric Company', 
        price: 106.23, change: -0.1 }, // GE stock
        { symbol: 'F', name: 'Ford Motor Company',
         price: 14.56, change: 0.4 }, // Ford stock
        { symbol: 'GM', name: 'General Motors Company', 
        price: 56.78, change: -0.7 }, // GM stock
        { symbol: 'TM', name: 'Toyota Motor Corporation',
         price: 151.23, change: 0.3 }, // Toyota stock
        { symbol: 'HMC', name: 'Honda Motor Co. Ltd.',
         price: 31.45, change: -0.2 }, // Honda stock
        { symbol: 'UBS', name: 'UBS Group AG',
         price: 16.23, change: 0.6 }, // UBS stock
        { symbol: 'DB', name: 'Deutsche Bank AG'
        , price: 12.45, change: -0.1 }, // Deutsche Bank stock
        { symbol: 'HSBC', name: 'HSBC Holdings plc',
         price: 30.67, change: 0.5 } // HSBC stock
    ];

    function fetchStockData(symbol) { // Function to simulate fetching stock data for a symbol
        // Mock data for all stocks
        const mockData = { // Hardcoded mock data for stock prices and changes
            AAPL: { price: 150.54, change: 0.5 },
            GOOGL: { price: 2800.66, change: -1.2 },
            AMZN: { price: 3401.46, change: 2.1 },
            MSFT: { price: 299.35, change: -0.3 },
            FB: { price: 355.23, change: 1.4 },
            TSLA: { price: 720.25, change: 0.8 },
            NFLX: { price: 510.89, change: -0.6 },
            NVDA: { price: 198.67, change: 1.2 },
            PYPL: { price: 245.12, change: -0.4 },
            INTC: { price: 54.22, change: 0.3 },
            CSCO: { price: 53.45, change: -0.2 },
            PEP: { price: 148.87, change: 0.7 },
            KO: { price: 54.95, change: 0.6 },
            PFE: { price: 41.21, change: -0.1 },
            JNJ: { price: 163.45, change: 0.2 },
            V: { price: 222.34, change: -0.5 },
            MA: { price: 349.56, change: 0.4 },
            DIS: { price: 179.32, change: -0.8 },
            ADBE: { price: 590.67, change: 1.1 },
            CRM: { price: 252.44, change: -0.7 },
            ORCL: { price: 87.32, change: 0.3 },
            IBM: { price: 142.31, change: 0.2 },
            UBER: { price: 51.23, change: 1.0 },
            LYFT: { price: 47.56, change: -1.1 },
            TWTR: { price: 64.98, change: 0.9 },
            SNAP: { price: 70.55, change: -0.5 },
            SQ: { price: 245.67, change: 1.3 },
            SPOT: { price: 265.78, change: -0.4 },
            ZM: { price: 355.67, change: -1.0 },
            DOCU: { price: 285.34, change: 0.6 },
            BABA: { price: 230.45, change: -0.8 },
            JD: { price: 81.23, change: 0.7 },
            SHOP: { price: 1220.78, change: 1.4 },
            WMT: { price: 139.54, change: -0.2 },
            TGT: { price: 230.56, change: 0.5 },
            MCD: { price: 232.67, change: -0.3 },
            SBUX: { price: 114.23, change: 0.2 },
            NKE: { price: 147.56, change: 0.8 },
            LULU: { price: 372.45, change: -0.5 },
            BA: { price: 241.78, change: 1.0 },
            GE: { price: 106.23, change: -0.1 },
            F: { price: 14.56, change: 0.4 },
            GM: { price: 56.78, change: -0.7 },
            TM: { price: 151.23, change: 0.3 },
            HMC: { price: 31.45, change: -0.2 },
            UBS: { price: 16.23, change: 0.6 },
            DB: { price: 12.45, change: -0.1 },
            HSBC: { price: 30.67, change: 0.5 }
        };
    
        return new Promise((resolve) => { // Return a promise that resolves after a short delay
            setTimeout(() => resolve(mockData[symbol]), 50); // Simulate async fetch with 50ms delay
        });
    }
    

    function displayStockInfo(stock) { // Function to display detailed info for a stock
        fetchStockData(stock.symbol) // Fetch latest stock data
        .then((data) => {
            const changeClass = data
            .change >= 0 ? 'positive' : 'negative'; // Determine CSS class based on positive or negative change
            stockInfo.innerHTML = ` // Update the stock info element with stock details
                <h3>${stock.name} (${stock.symbol})</h3>
                <p>Price: $${data.price.toFixed(2)}</p>
                <p class="${changeClass}">Change: ${data.change}%</p>
            `;
        });
    }
    

    function updateWatchlist()
    {
        watchlist
        .innerHTML = ''; // Clear previous watchlist items
        watchlistStocks
        .forEach((stock) => { // For each stock in the watchlist
            const li = document
            .createElement('li'); // Create a list item element
            li
            .textContent = `${stock.name} (${stock.symbol}) `; // Set text content to stock name and symbol
            const removeButton = document
            .createElement('button'); // Create a remove button
            removeButton
            .textContent = 'Remove'; // Set button text
            removeButton
            .classList.add('remove'); // Add CSS class 'remove' to button
            removeButton
            .addEventListener('click', () => 
            {
                watchlistStocks = watchlistStocks
                .filter(item => item
                    .symbol !== stock
                    .symbol); // Remove the clicked stock from watchlistStocks
                updateWatchlist(); // Update the watchlist display
                displayStockTable(allStocks);  // Refresh the stock table to update buttons
            });
            li.appendChild(removeButton); // Add remove button to list item
    
            // Add event listener to display stock details when clicked
            li.addEventListener('click', () => 
            {
                displayStockInfo(stock); // Show detailed info for clicked stock
            });
    
            watchlist.appendChild(li); // Add the list item to the watchlist element
        });
    }
    

    function displayStockTable(stocks) 
    {
        stockTableBody.innerHTML = ''; // Clear previous stock table rows
        stocks
        .forEach((stock) => 
        {
            const changeClass = stock
            .change >= 0 ? 'positive' : 'negative'; // Determine CSS class for price change
            const tr = document
            .createElement('tr'); // Create a table row element
            tr.innerHTML = ` // Set inner HTML of row with stock details and actions column
                <td>${stock
                    .name}</td>
                <td>$${stock
                    .price
                    .toFixed(1)}</td>
                <td class="${changeClass}">${stock
                    .change}%</td>
                <td class="actions"></td>
            `;
            const actionsTd = tr
            .querySelector('.actions'); // Get the actions cell in the row

            if (!watchlistStocks
                .some(item => item
                    .symbol === stock
                    .symbol)) // If stock is not in watchlist
            {
                const addButton = document
                .createElement('button'); // Create an Add button
                addButton
                .textContent = 'Add'; // Set button text
                addButton
                .classList
                .add('add'); // Add CSS class 'add'
                addButton
                .addEventListener('click', () =>
                {
                    watchlistStocks
                    .push(stock); // Add stock to watchlistStocks
                    updateWatchlist(); // Update watchlist display
                    displayStockTable(allStocks); // Refresh stock table to update buttons
                });
                actionsTd.appendChild(addButton); // Add Add button to actions cell
            } else
            {
                const removeButton = document
                .createElement('button'); // Create a Remove button
                removeButton
                .textContent = 'Remove'; // Set button text
                removeButton
                .classList
                .add('remove'); // Add CSS class 'remove'
                removeButton
                .addEventListener('click', () =>
                {
                    watchlistStocks = watchlistStocks
                    .filter(item => item
                        .symbol !== stock
                        .symbol
                    ); // Remove stock from watchlistStocks
                    updateWatchlist(); // Update watchlist display
                    displayStockTable(allStocks);  // Refresh stock table to reflect removal
                });
                actionsTd.appendChild(removeButton); // Add Remove button to actions cell
            }

            // Add event listener to display stock details when clicked
            tr
            .addEventListener('click', () => 
            {
                displayStockInfo(stock); // Show detailed info for clicked stock
            });

            stockTableBody
            .appendChild(tr); // Add the row to the stock table body
        });
    }


    searchInput
    .addEventListener('input', (event) => { // Listen for input in the search box
        const searchTerm = event
        .target
        .value
        .toLowerCase(); // Get the search term in lowercase
        const filteredStocks = allStocks
        .filter(stock => 
            stock
            .name
            .toLowerCase()
            .includes(searchTerm) || 
            stock
            .symbol
            .toLowerCase()
            .includes(searchTerm)
        ); // Filter stocks by name or symbol matching search term
        displayStockTable(filteredStocks); // Display filtered stocks in the table
    });

    // Initial display of all stocks
    displayStockTable(allStocks); // Show all stocks in the table initially
    updateWatchlist(); // Update the watchlist display initially
});
