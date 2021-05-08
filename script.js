var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    //que hace lo que esta entre corchetes?
    formData["description"] = document.getElementById("description").value;
    formData["buy"] = document.getElementById("buy").value;
    formData["sale"] = document.getElementById("sale").value;
    formData["stock"] = document.getElementById("stock").value;
    formData["barcode"] = document.getElementById("barcode").value;
    formData["category"] = document.getElementById("category").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("productList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.description;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.buy;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.sale;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.stock;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.barcode;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.category;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<button onClick="onEdit(this)" class="btn btn-warning">Edit</button>
                    <button onClick="onDelete(this)" class="btn btn-danger">Delete</button>`;
}

function resetForm() {
    document.getElementById("description").value = "";
    document.getElementById("buy").value = "";
    document.getElementById("sale").value = "";
    document.getElementById("stock").value = "";
    document.getElementById("barcode").value = "";
    document.getElementById("category").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("description").value = selectedRow.cells[0].innerHTML;
    document.getElementById("buy").value = selectedRow.cells[1].innerHTML;
    document.getElementById("sale").value = selectedRow.cells[2].innerHTML;
    document.getElementById("stock").value = selectedRow.cells[3].innerHTML;
    document.getElementById("barcode").value = selectedRow.cells[4].innerHTML;
    document.getElementById("category").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.description;
    selectedRow.cells[1].innerHTML = formData.buy;
    selectedRow.cells[2].innerHTML = formData.sale;
    selectedRow.cells[3].innerHTML = formData.stock;
    selectedRow.cells[4].innerHTML = formData.barcode;
    selectedRow.cells[5].innerHTML = formData.category;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("productList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("description").value == "") {
        isValid = false;
        document.getElementById("descriptionValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("descriptionValidationError").classList.contains("hide"))
            document.getElementById("descriptionValidationError").classList.add("hide");
    }
    return isValid;
}