document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    newCaseNumber = previousCaseNumber + 1;
    caseNumberField.value = newCaseNumber
})