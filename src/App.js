import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from './adminComponents/Container/Container';
// import Menu from './adminComponents/SideMenu/Menu';
import { BrowserRouter as Router, Routes, Route, Link, useParams} from "react-router-dom";
import AboutUs from './About';
import ContactUs from './ContactUs';
import MainBlog from './MainBlog';
import BlogPage from './BlogPage';
import Navbarr from './Navbarr';
import './App.css';
import Login from './Login';
import Register from './Register';
import BlogEditor from './BlogEditor';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
// import Dashboard from './Dashboard';
import TermsOfService from './TermsOfService';
import Dashboardd from './Dashboard/Dashboardd';



function App() {
  const allBlogs=[
    {
        id:1,
        title:'ChatGPT Vs Bard: Which is better for coding?',
        category:'Programming',
        likes:23,
        comments:11,
        totViews:123,
        currViews:43,
        author:'Gloria Borger',
        blog:'Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes.',
        date:'12/12/2021',
    },
    {
        id:2,
        title:'Blockchain and Cryptocurrencies Demystified',
        category:'Crypto',
        likes:23,
        comments:11,
        totViews:123,
        currViews:43,
        author:'Gloria Borger',
        blog:'Delve into the world of blockchain technology and cryptocurrencies. Understand the fundamentals of how blockchain works, its applications beyond cryptocurrency, and the potential it holds for disrupting various industries.Delve into the world of blockchain technology and cryptocurrencies. Understand the fundamentals of how blockchain works, its applications beyond cryptocurrency, and the potential it holds for disrupting various industries.Delve into the world of blockchain technology and cryptocurrencies. Understand the fundamentals of how blockchain works, its applications beyond cryptocurrency, and the potential it holds for disrupting various industries.Delve into the world of blockchain technology and cryptocurrencies. Understand the fundamentals of how blockchain works, its applications beyond cryptocurrency, and the potential it holds for disrupting various industries.Delve into the world of blockchain technology and cryptocurrencies. Understand the fundamentals of how blockchain works, its applications beyond cryptocurrency, and the potential it holds for disrupting various industries.',
        date:'12/12/2021'
    },
    {
        id:3,
        title:'The Rise of 5G Technology and Inovation',
        category:'Network',
        likes:23,
        comments:11,
        totViews:123,
        currViews:43,
        author:'Gloria Borger',
        blog:'Discover the latest advancements in 5G technology and its potential to revolutionize communication and connectivity. Learn how 5G can enable faster internet speeds, low latency, and support emerging technologies like IoT and autonomous vehicles.Discover the latest advancements in 5G technology and its potential to revolutionize communication and connectivity. Learn how 5G can enable faster internet speeds, low latency, and support emerging technologies like IoT and autonomous vehicles.Discover the latest advancements in 5G technology and its potential to revolutionize communication and connectivity. Learn how 5G can enable faster internet speeds, low latency, and support emerging technologies like IoT and autonomous vehicles.Discover the latest advancements in 5G technology and its potential to revolutionize communication and connectivity. Learn how 5G can enable faster internet speeds, low latency, and support emerging technologies like IoT and autonomous vehicles.',
        date:'12/12/2021'
    },
    {
        id:4,
        title:'Introduction to Quantum Computing',
        category:'Programming',
        likes:23,
        comments:11,
        totViews:123,
        currViews:43,
        author:'Gloria Borger',
        blog:'Unravel the complexities of quantum computing and its revolutionary implications. Learn about qubits, quantum entanglement, and how quantum computers can solve problems that are practically impossible for classical computers.Unravel the complexities of quantum computing and its revolutionary implications. Learn about qubits, quantum entanglement, and how quantum computers can solve problems that are practically impossible for classical computers.Unravel the complexities of quantum computing and its revolutionary implications. Learn about qubits, quantum entanglement, and how quantum computers can solve problems that are practically impossible for classical computers.',
        date:'12/12/2021'
    },
    {
        id:5,
        title:'Cybersecurity Best Practices for Businesses',
        category:'Programming',
        likes:23,
        comments:11,
        totViews:123,
        currViews:43,
        author:'Gloria Borger',
        blog:' Understand the essential cybersecurity measures businesses must adopt to safeguard their sensitive data and protect against cyber threats. Explore topics such as encryption, multi-factor authentication, and proactive threat detection. Understand the essential cybersecurity measures businesses must adopt to safeguard their sensitive data and protect against cyber threats. Explore topics such as encryption, multi-factor authentication, and proactive threat detection. Understand the essential cybersecurity measures businesses must adopt to safeguard their sensitive data and protect against cyber threats. Explore topics such as encryption, multi-factor authentication, and proactive threat detection. Understand the essential cybersecurity measures businesses must adopt to safeguard their sensitive data and protect against cyber threats. Explore topics such as encryption, multi-factor authentication, and proactive threat detection.',
        date:'12/12/2021'
    },
]

const allRatings=[
  {
    id:1,
    blogId:1,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
  {
    id:2,
    blogId:1,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
  {
    id:3,
    blogId:2,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
  {
    id:4,
    blogId:2,
    userName:"John Doe",
    rating:3,
    date:'12/12/2021',
  },
  {
    id:5,
    blogId:3,
    userName:"John Doe",
    rating:4,
    date:'12/12/2021',
  },
  {
    id:6,
    blogId:3,
    userName:"John Doe",
    rating:1,
    date:'12/12/2021',
  },
  {
    id:7,
    blogId:4,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
  {
    id:8,
    blogId:4,
    userName:"John Doe",
    rating:4,
    date:'12/12/2021',
  },
  {
    id:9,
    blogId:5,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
  {
    id:10,
    blogId:5,
    userName:"John Doe",
    rating:5,
    date:'12/12/2021',
  },
]

const allComments=[
        {
            id:1,
            blogId:1,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.'
        },
        {
            id:2,
            blogId:2,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"As her words faded into the breeze, the tree's leaves rustled, and a soft glow enveloped Mia. In that moment, she felt a surge of profound knowledge flow through her veins."
        },
        {
            id:3,
            blogId:3,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"Finally, after days of travel, Mia arrived at the sacred clearing where the Tree of Wisdom stood majestically."
        },
        {
            id:4,
            blogId:4,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"Yet, her determination and courage remained unyielding. She battled through brambles, crossed rushing rivers on rickety bridges, and outwitted mischievous goblins."
        },
        {
            id:5,
            blogId:1,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"As Mia continued deeper into the forest, the path grew treacherous, and she faced challenges she had never encountered before and she faced challenges she had never encountered before."
        },
        {
            id:6,
            blogId:2,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"Along her journey, she encountered playful fairies who led her through the maze of trees, and wise old owls who shared cryptic riddles to test her wit."
        },
        {
            id:7,
            blogId:3,
            userName:"John Doe",
            title:'Lorem ipsum do...',
            date:'12/12/2021',
            comment:"Yet, her determination and courage remained unyielding. She battled through brambles, crossed rushing rivers on rickety bridges, and outwitted mischievous goblins."
        },
    ]

const pendingComments=[
            {
              id:1,
              blogId:1,
              title:'Lorem ipsum do...',
              date:'12/12/2021',
              comment:'hello one'
          },
          {
              id:2,
              blogId:2,
              title:'Lorem ipsum do...',
              date:'12/12/2021',
              comment:'hello two'
          }
        ]




  const BlogPageWithDetails = () => {
    const { '*': URL } = useParams();
    const URLArr=URL.split('-')
    const blogId=URLArr[URLArr.length-1] 

    console.log('Requested Details:', URL);
    console.log('ID',blogId) 
  
    return (
        <BlogPage 
          blog={allBlogs.find((blog) => blog.id == blogId)}
          ratings={allRatings.filter((obj) => obj.blogId == blogId)}
          comments={allComments.filter((obj) => obj.blogId == blogId)}
        />
    );
  };


  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<><Navbarr /><MainBlog allBlogs={allBlogs} allRatings={allRatings} /><Footer /></>}/>
          <Route path='/blog/*' element={<><Navbarr /><BlogPageWithDetails /><Footer /></>}/>
          <Route path='/contact-us' element={<><Navbarr /><ContactUs /><Footer /></>} />
          <Route path='/about-us' element={<><Navbarr /><AboutUs /><Footer /></>} />
          <Route path='/terms-of-service' element={<><Navbarr /><TermsOfService /><Footer /></>} />
          <Route path='/login' element={<><Navbarr /><Login /><Footer /></>} />
          <Route path='/register' element={<><Navbarr /><Register /><Footer /></>} />
          <Route path='/write-blog' element={<><Navbarr /><BlogEditor /><Footer /></>} />
          <Route path='/dashboard' element={<Dashboardd allBlogs={allBlogs} allComments={allComments} pendingComments={pendingComments}/>} />
          {/* <Route path='/dashboard' element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </div>
  );
}



export default App;
