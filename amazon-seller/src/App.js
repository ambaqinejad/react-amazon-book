import './App.css'

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
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="./images/book-img.jpg"
    alt="The Women: A Novel"
  />
);
const Title = () => <h2>The Women: A Novel</h2>;
const Author = () => <p style={{color: "#617d98", fontSize: "0.75rem"}}>by Kristin Hannah (Author)</p>;

export default App;
