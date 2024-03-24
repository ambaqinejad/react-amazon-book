import "./App.css";

function App() {
  return <BookList />;
}

const BookList = () => {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "The Women: A Novel";
  return (
    <article className="book">
      <img src="./images/book-img.jpg" alt="The Women: A Novel" />
      
      <h2>{title}</h2>
      <p style={{ color: "#617d98", fontSize: "0.75rem" }}>
        by Kristin Hannah (Author)
      </p>
    </article>
  );
};
export default App;
