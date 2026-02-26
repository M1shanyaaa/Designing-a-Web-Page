document.getElementById('search').addEventListener('input', function(e) {
    const text = e.target.value.toLowerCase();
    const rows = document.querySelectorAll('.row');

    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();

        row.style.display = name.includes(text) ? '' : 'none';
    });
});
