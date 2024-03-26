import "./App.css";
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: img3,
    id: 3,
  },
];

function App() {
  return <BookList />;
}

const BookList = () => {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book bookInfo={book} key={book.id}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum sit corrupti quibusdam voluptates saepe nisi exercitationem repudiandae nihil tenetur facere similique non, inventore quos in omnis quaerat quidem itaque vel?</p>
          <button>Click Me</button>
        </Book>;
      })}
    </section>
  );
};

const Book = ({ bookInfo, children }) => {
  console.log(children);
  return (
    <article className="book">
      <img src={bookInfo.img} alt={bookInfo.title} />

      <h2>{bookInfo.title}</h2>
      <p style={{ color: "#617d98", fontSize: "0.75rem" }}>
        {bookInfo.author} (Author)
      </p>
      {children}
    </article>
  );
};
export default App;
