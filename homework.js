function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  Book.prototype.displayInfo = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages.`;
  };
  
  let library = [];
  
  function addBook(title, author, pages) {
    const book = new Book(title, author, pages);
    library.push(book);
  }
  
  function searchBooksByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }
  
  function searchBooksByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }
  
  function filterBooksByPageCount(pageLimit) {
    return library.filter(book => book.pages <= pageLimit);
  }
  
  function mapBooksTitleAndAuthor() {
    return library.map(book => ({
      title: `Title: ${book.title}`,
      author: `Author: ${book.author}`,
      pages: book.pages
    }));
  }
  
  addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
  addBook("To Kill a Mockingbird", "Harper Lee", 281);
  addBook("1984", "George Orwell", 328);
  addBook("The Hobbit", "J.R.R. Tolkien", 310);
  addBook("Fahrenheit 451", "Ray Bradbury", 158);
  console.log(library[0].displayInfo());
  console.log(searchBooksByTitle("1984"));
  console.log(searchBooksByAuthor("George Orwell"));
  console.log(filterBooksByPageCount(100));
  console.log(mapBooksTitleAndAuthor());
  
  function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }
  
  Account.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited $${amount}. New balance is $${this.balance}.`;
    } else {
      return 'Deposit amount must be positive.';
    }
  };
  
  Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrew $${amount}. New balance is $${this.balance}.`;
    } else if (amount > this.balance) {
      return 'Insufficient funds.';
    } else {
      return 'Withdrawal amount must be positive.';
    }
  };
  
  Account.prototype.calculateInterest = function(rate, years) {
    return this.balance * Math.pow((1 + (rate / 100)), years);
  };
  
  let account1 = new Account(123456789, 1000, "John Doe");
  console.log(account1.deposit(500));
  console.log(account1.withdraw(200));
  let interestRate = 5;
  let years = 2;
  console.log(`Balance after ${years} years at ${interestRate}% interest: $${account1.calculateInterest(interestRate, years).toFixed(2)}`);
