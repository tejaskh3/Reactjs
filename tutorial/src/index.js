import React from 'react'
import ReactDom from 'react-dom'

//css ->for importing css need to use full path
import './index.css';

//setup variables
// const title = 'Dolglapan'
// const author = 'Ashneer Grover'
// const img = 'https://images-eu.ssl-images-amazon.com/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg'
// doing this down again

// function Greeting(){ // not just a regular fucntion this is the component itself
// return <h1>Hi I just wrote my first component.</h1> // and the html beging passed here is JSX
// }

// const Greeting = () => {
//   return React.createElement('h1', {}, 'Hello World.') //element, props, content
// } well we could have done this from this way.

// again we can use more elements in above function

// function Greeting(){
//   return <div>
//     <h1>HELLO WORLD.</h1>
//   </div>
// }

//we will use regular function
// const  Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1',{}, 'HEllO WORLD'))
// }

//Jsx rules
// return single element
// div/ section / article or fragment
// use camelcase for html attribute
// className instead of class
// close every element
// formatting - about semicolong part

// function Greeting() {
//   return ( // if we are not using the semicolon then we need to make sure that we pass return tag and opening tag in same line

//     <div className=''  >
//       <h3>HEllO WORLD</h3>
//       <ul>
//         <li>HI</li>
//         <li><a href="#">HELlO WORLD</a></li>
//         <img src="" alt="" /> {/*we need to use / or need to close self closing tags too in jsx. */}
//       </ul>
//     </div>


//   )
// }

//2. nested components, React Tools

// function Greeting() {
//   return ( // while returning here rembember that one parent element should be present there.
//   <div>
//     <h2>John</h2>
//     <p>shake and bake.</p>
//   </div>

//   )
// }
// the above work could also be done by using nested componenets.

// function Greeting() {
//   return(
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>John</h2> // implicit return
// const Message = () => { // explicit return
//   return <p>shake and bake</p>
// }
// ReactDom.render(<Greeting/>,document.getElementById('root'))

// now we will make amazon booklist.
// as we learened class = className here.
// function Booklist() {
//   return <section className='booklist'>
//     <Book/>
//     {/* <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/>
//     <Book/> */}

//   </section>
// }

// const Image = () => <img src="https://images-eu.ssl-images-amazon.com/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg" width={300} alt="" />

// const Book = () => {
//   return <article className='book'>
//     <Image></Image>
//     <Title/>
//     <Author/>
//   </article>
// }

// const Title = () => <h1>Doglapan</h1>
// const Author = () => <h4 style={{ color: '#617d98', fontSize: '.75rem', marginTop: '.25rem' }} >Ashneer Grover</h4>

// this booklist can also be formed this way.

// const Book = () =>{
//   // const title = "Doglapan" // we have moved them above (setup vars), so that they could be changed for another item.
//   return <article className='book'>
//      <img src={img} width={300} alt="" />
//      <h1>{title.toUpperCase()}</h1> {/* this way we can set the values dynamiclly likewe did in django.,it's here using javascript in these curlies, we can also use js properties here like upper case. */}
//     <h4>{author}</h4>

//   </article>
// }


// using props
//setting up varaibles
// const firstBook = {
//  title : 'Dolglapan',
// author : 'Ashneer Grover',
// img : 'https://images-eu.ssl-images-amazon.com/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg',

// } // now we wii create an array of these objects this ons is for refrence no more first and second bool will be available.

const books = [
  {
    id:1,
   title : 'Dolglapan',
  author : 'Ashneer Grover',
  img : 'https://images-eu.ssl-images-amazon.com/images/I/81BvqTpXlFL._AC_UL900_SR900,600_.jpg',

  },
 {
  id:2,
  title : 'Shelf Care : A Deep Dive into Book Groups',
 author : 'Susan Maguire',
 img : 'https://pub.booklistonline.com/Content/Images/userupload/Bolpub/BizBlogStuff/ShelfCare/Shelf-Care-icon.jpg',

 },
 {
  id:3,
  title : 'Code smith',
 author : 'Tejas',
 img : 'https://pub.booklistonline.com/Content/Images/userupload/Bolpub/Images/BOL%20Features/Vol%20119/NOV/Nov2022c1navbar.jpg',

 }
]


// array of name
const names =['john', 'peter', 'susan']
// conveting this to h1 tags by maps
const newNames = names.map((name)=>{
  return <h1>{name}</h1>
})
// console.log(newNames);


// function Booklist() {
//   return <section className='booklist'>
//     <Book
//     img={firstBook.img}
//     author={firstBook.author}
//     title={firstBook.title}
//     >
//       {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolorum quod dicta quaerat maiores minus, odio debitis et odit optio delectus nulla atque commodi, provident iste non neque libero illum?</p> */}
//       </Book>
// {/* we can even put a complete web inside these tags, like button, form etc */}
//     <Book
//     // img={secondBook.img} // as we have created the array of these we can't access them.
//     // author={secondBook.author}
//     //  title={secondBook.title}


//     />

//   </section>
// }
// after array work

function Booklist() {
  // return <section className='booklist'>{newNames}</section> // but we can't do this work for an object, we can't pass an object here though we can pass an array here.

  //but we can use map that will return a new array ;)
  return (
    <section className="booklist">
      {books.map((book) => {
         const {img, author, title} = book;
      //    return <div>
      //     <h3>{title}</h3>
      //     <h6>{author}</h6>
      //    </div>
      //  we could have used  this method to in

      return( // this return is for map.
        // <Book img={img} title={title} author={author}></Book>
        // instead of passing this way we can pass a complete book.
        // <Book key={book.id} book = {book}></Book> intth

        <Book key={book.id} {...book}></Book>

        ) // instead of passing this way we can pass a complete book.
        // special props key
        //
    })}
    </section>

  )
}

// {/* <Book book = {book}></Book>   */} in this line we are passing an book object as prop which itself is an boject so we can't simpluy access them by destructibg {img, autor},
const  Book = (props) => { // this children here is used for accessing the data which is inside the blocks. = props.book
  // const {img,author,title, children} = props.book //here we are destructring the books property of props instead of props itself.
  const {img,author,title, children} = props // now props is an objest with propert img,author,title


  return <article className='book'>
    <img src={img} width={300} height={300} alt="" />
    <h1>{title.toLocaleUpperCase()}</h1>
    <h4>{author}</h4>
    {children}
    {/* if we would have used the props then it woudl have props.children */}
  </article>
}

// const Book = (props) => {
//   console.log(props);
//   return <article className='book'>
//     <img src={props.img} width={300} alt="" />
//     <h1>{props.title.toLocaleUpperCase()}</h1>
//     <h4>{props.author}</h4>
//   </article>
// } // here as we know that props is an object, so we could have first destruct it and than pass easily to component.

// const Book = (props) => {
//   console.log(props);
//   const {img, title, author} = props
//   return <article className='book'>
//     <img src={img} width={300} alt="" />
//     <h1>{title.toLocaleUpperCase()}</h1>
//     <h4>{author}</h4>
//   </article>
// } // or we could have do the same work while passing props



ReactDom.render(<Booklist/>,document.getElementById('root'))


