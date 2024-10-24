
document.getElementById('toggleButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open'); 

    if (sidebar.classList.contains('open')) {
        sidebar.style.display = 'block'; 
    } else {
        sidebar.style.display = 'none';
    }
});

// Event listener to hide the sidebar
document.getElementById('togglehidden').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.remove('open'); // Remove the 'open' class
    sidebar.style.display = 'none'; // Hide the sidebar
});
