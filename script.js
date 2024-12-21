//your JS code here. If required.
// Function to create a promise that resolves after a random time between 1 and 3 seconds  
function createRandomPromise(name) {  
    const time = Math.random() * 2 + 1; // Random time between 1 and 3 seconds  
    return new Promise((resolve) => {  
        setTimeout(() => {  
            resolve({ name, time: time.toFixed(3) }); // Resolve with name and time taken  
        }, time * 1000); // Convert to milliseconds  
    });  
}  

// Create an array of promises  
const promises = [  
    createRandomPromise("Promise 1"),  
    createRandomPromise("Promise 2"),  
    createRandomPromise("Promise 3")  
];  

// Add loading text to the table  
const output = document.getElementById("output");  
output.innerHTML = '<tr><td colspan="2" class="text-center">Loading...</td></tr>';  

// Use Promise.all to wait for all promises to resolve  
Promise.all(promises).then((results) => {  
    // Clear loading text  
    output.innerHTML = '';  

    // Calculate total time taken  
    const totalTime = results.reduce((sum, result) => sum + parseFloat(result.time), 0).toFixed(3);  

    // Populate the table with the results  
    results.forEach(result => {  
        output.innerHTML += `<tr><td>${result.name}</td><td>${result.time}</td></tr>`;  
    });  

    // Add total row  
    output.innerHTML += `<tr><td>Total</td><td>${totalTime}</td></tr>`;  
});