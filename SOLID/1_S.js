// Single Responsibility Principle


// Принцип единственной ответственности.
// Каждый класс должен решать лишь одну задачу (быть ответственен лишь за что-то одно).
// Если класс отвечает за решение нескольких задач, его подсистемы,
// реализующие решение этих задач, оказываются связанными друг с другом.
// Изменения в одной такой подсистеме ведут к изменениям в другой.


class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2)
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
  }
}


const printer = new NewsPrinter(
  new News('Путин', 'Новая конституция')
)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())

