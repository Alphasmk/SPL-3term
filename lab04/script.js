//1
let set = new Set();
let ch1;

do {
    ch1 = Number(prompt("Выберите вариант(1 - 5): ", ''));
    if (ch1 <= 4 && ch1 >= 1) {
        switch (ch1) {
            case 1:
                alert("Введите -1 чтобы остановить ввод товаров");
                while (true) {
                    let choice = prompt("Введите товар: ", '');
                    if (choice != -1) {
                        set.add(choice);
                    } else {
                        break;
                    }
                }
                break;
            case 2:
                let itemToDelete = prompt("Какой элемент удалить?", '');
                set.delete(itemToDelete);
                break;
            case 3:
                let itemToCheck = prompt("Какой элемент проверить?", '');
                if (set.has(itemToCheck)) {
                    alert("Товар есть в списке");
                } else {
                    alert("Товара нет в списке");
                }
                break;
            case 4:
                alert("Количество товара: " + set.size);
        }
    }
} while (ch1 >= 1 && ch1 <= 4);

