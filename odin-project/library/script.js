// Seleciona os elementos do DOM
const dialog = document.querySelector('dialog');
const openDialogButton = document.getElementById('openDialog');
const libraryDisplay = document.getElementById('libraryDisplay');

// Classe para representar um livro
class Book {
    #title;
    #author;
    #pages;
    #id;

    constructor(title, author, pages) {
        this.#title = title;
        this.#author = author;
        this.#pages = pages;
        this.#id = crypto.randomUUID();
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get pages() {
        return this.#pages;
    }

    get id() {
        return this.#id;
    }
}

// Classe para gerenciar a biblioteca
class ManageLibrary {
    #books;

    constructor() {
        this.#books = [];
    }

    addBookToLibrary() {
        const titleBook = document.getElementById("title").value;
        const authorBook = document.getElementById("author").value;
        const pagesBook = document.getElementById("pages").value;

        if (!titleBook || !authorBook || !pagesBook) {
            alert("Todos os campos devem ser preenchidos!");
            return;
        }

        const book = new Book(titleBook, authorBook, pagesBook);
        this.#books.push(book);

        // Atualiza a exibição dos livros
        this.displayBooks();

        // Limpa os campos do formulário
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        dialog.close(); // Fecha o diálogo
    }

    displayBooks() {
        libraryDisplay.innerHTML = ''; // Limpa o contêiner antes de renderizar

        // Adiciona cada livro como um elemento <h2>
        this.#books.forEach(book => {
            const bookElement = document.createElement('h2');
            bookElement.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pages}`;
            libraryDisplay.appendChild(bookElement);

            // Adiciona um botão para remover o livro
            const removeButton = document.createElement('button');
            removeButton.textContent = "Remove";
            removeButton.addEventListener('click', () => this.removeBook(book.id));
            libraryDisplay.appendChild(removeButton);
        });
    }

    removeBook(bookId) {
        // Remove o livro com o ID correspondente
        this.#books = this.#books.filter(book => book.id !== bookId);

        // Atualiza a exibição dos livros
        this.displayBooks();
    }
}

// Inicializa a biblioteca
const libraryManager = new ManageLibrary();

// Configura o botão para abrir o diálogo
openDialogButton.addEventListener('click', () => {
    dialog.showModal(); // Exibe o diálogo
});

// Configura o botão para adicionar um livro
document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    libraryManager.addBookToLibrary();
});