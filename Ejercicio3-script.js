const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const dictionaryTable = document.getElementById('dictionaryTable');
const resultCount = document.getElementById('resultCount');

function searchTable() {
    const searchTerm = searchInput.value.trim().toLowerCase(); 
    let matchCount = 0; 

    const rows = dictionaryTable.getElementsByTagName('tr');
    
    for (let i = 1; i < rows.length; i++) { 
        const cells = rows[i].getElementsByTagName('td'); 
        let matchFound = false; 
        
        for (let j = 0; j < cells.length; j++) {
            if (cells[j].textContent.toLowerCase().includes(searchTerm)) {
                matchFound = true; 
            }
        }

        if (matchFound) {
            rows[i].style.display = ''; 
            matchCount++; 
        } else {
            rows[i].style.display = 'none'; 
        }
    }

    resultCount.textContent = `Se encontraron ${matchCount} coincidencia(s) para "${searchTerm}".`;
}

searchBtn.addEventListener('click', searchTable);

searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchTable();
    }
});
