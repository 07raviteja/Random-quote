const Quotes=[
    {
        quote:'Think Big Achieve Big' ,
        author:'Raviteja'
    },
    {
        quote:'Never Rememeber the Mistake, Rememeber the Lesson' ,
        author:'Raviteja'
    },
    {
        quote:' Alone we can do so little; together we can do so much.'  ,
        author:'Helen Keller'
    },
    {
        quote:'Talent wins games, but teamwork and intelligence win championships.',
        author:'Michael Jordan'
    },
    {
        quote:'If you want to lift yourself up, lift up someone else. ' ,
        author:'Booker T. Washington'
    },
    {
        quote:'It is literally true that you can succeed best and quickest by helping others to succeed.' ,
        author:'Napolean Hill'
    },
    {
        quote: ' Coming together is a beginning, staying together is progress, and working together is success.' ,
        author:' Henry Ford'
    },
    {
        quote:' Talent wins games, but teamwork and intelligence win championships. ' ,
        author:' Michael Jordan '
    }

]

//access the elements
const DisplayElem=document.getElementById('display')
const AuthorElem=document.getElementById('author')
const Btn=document.getElementById('gen')
//functio to generate diff quotes
 //normal function example
  // finction RandmQuotes(){}

//arrow function
 const RandomQuotes=()=>{
    //logic generete random quotes
    let index = Math.floor(Math.random()*(Quotes.length))
    //to display the output quote
    DisplayElem.innerHTML=Quotes[index].quote
    //to display the output author
    AuthorElem.innerHTML= '~'+Quotes[index].author


 }
 Btn.addEventListener('click', RandomQuotes)

