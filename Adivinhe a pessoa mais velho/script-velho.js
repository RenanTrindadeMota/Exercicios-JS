function findOldest() {
    // Obtém os valores dos inputs
    const namesInput = document.getElementById('names').value;
    const agesInput = document.getElementById('ages').value;
    
    // Divide os valores por vírgulas e remove espaços em branco
    const names = namesInput.split(',').map(name => name.trim());
    const ages = agesInput.split(',').map(age => parseInt(age.trim()));
    
    // Verifica se há exatamente 5 nomes e 5 idades
    if (names.length !== 5 || ages.length !== 5) {
        document.getElementById('result').innerText = 'Por favor, insira exatamente 5 nomes e 5 idades.';
        return;
    }
    
    // Encontra o índice da pessoa mais velha
    let maxAge = ages[0];
    let oldestIndex = 0;
    
    for (let i = 1; i < ages.length; i++) {
        if (ages[i] > maxAge) {
            maxAge = ages[i];
            oldestIndex = i;
        }
    }
    
    // Exibe o nome da pessoa mais velha
    document.getElementById('result').innerText = `A pessoa mais velha é: ${names[oldestIndex]} e tem ${ages[oldestIndex]} anos.`;
}