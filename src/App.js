import 'https://kit.fontawesome.com/9c1c3f6a2e.js'
import 'bootstrap/dist/css/bootstrap.min.css';
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
import TermsOfService from './TermsOfService';
import Dashboardd from './Dashboard/Dashboardd';
import Error from './404/Error';
import TopCategory from './topCategory';

import {authUserInfoContext} from './Context/MyContext';
import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';



function App() {

  const [authUserInfo, setAuthUserInfo] = useState(null);
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    let AT=Cookies.get('access_token');
    if(AT){
      setAccessToken(AT);
    }

    

    
  },[])

  console.log('Access Token:', accessToken);

  
  const allBlogss=[
    {
      id:1,
      title:'ChatGPT Vs Bard: Which is better for coding?',
      category:'Programming',
      author:'Gloria Borger',
      totViews:123,
      currViews:43,
      date:'12/12/2021',
      blog:'Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes.',
      reviews:[
        {
          id:1,
          userName:"John D",
          rating:7,
          date:'12/12/2021',    
        },
        {
          id:2,
          userName:"John Do",
          rating:5,
          date:'12/12/2021',
        },
        {
          id:3,
          userName:"John Doe",
          rating:5,
          date:'12/12/2021',
        },
      ],
      comments:[
        {
          id:1,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:true,
        },
        {
          id:2,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
        {
          id:3,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
        {
          id:4,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
      ]
      
    },
    {
      id: 2,
      title: 'The Art of Photography',
      category: 'Arts',
      author: 'Emma Turner',
      totViews: 345,
      currViews: 87,
      date: '11/19/2022',
      blog: 'Unleash your creativity through the lens and explore the world of photography. Learn about different camera techniques, composition, and post-processing to capture stunning images.',
      reviews:[
        {
          id: 1,
          userName: 'Oliver',
          rating: 5,
          date: '11/20/2022',
        },
        {
          id: 2,
          userName: 'Sophia',
          rating: 4,
          date: '11/21/2022',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Oliver',
          email: 'oliver@example.com',
          date: '11/20/2022',
          comment: 'Photography is my passion!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Sophia',
          email: 'sophia@example.com',
          date: '11/21/2022',
          comment: 'I love capturing moments with my camera!',
          pending: true,
        },
      ],
    },
    {
      id: 3,
      title: 'Exploring Space: The Final Frontier',
      category: 'Science',
      author: 'Ethan Davis',
      totViews: 567,
      currViews: 150,
      date: '12/05/2022',
      blog: 'Embark on a cosmic journey to learn about the wonders of the universe. Discover planets, galaxies, black holes, and the quest for extraterrestrial life.',
      reviews: [
        {
          id: 1,
          userName: 'William',
          rating: 5,
          date: '12/06/2022',
        },
        {
          id: 2,
          userName: 'Isabella',
          rating: 4,
          date: '12/07/2022',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'William',
          email: 'william@example.com',
          date: '12/06/2022',
          comment: 'Space exploration is fascinating!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Isabella',
          email: 'isabella@example.com',
          date: '12/07/2022',
          comment: 'I dream of becoming an astronaut!',
          pending: false,
        },
      ],
    },
    {
      id: 4,
      title: 'The World of Art: From Renaissance to Modernism',
      category: 'Art History',
      author: 'Benjamin Lee',
      totViews: 789,
      currViews: 230,
      date: '01/15/2023',
      blog: 'Dive into the evolution of art throughout history. Explore famous art movements, renowned artists, and masterpieces that have shaped the art world.',
      reviews: [
        {
          id: 1,
          userName: 'Henry',
          rating: 4,
          date: '01/16/2023',
        },
        {
          id: 2,
          userName: 'Aria',
          rating: 5,
          date: '01/17/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Henry',
          email: 'henry@example.com',
          date: '01/16/2023',
          comment: 'Art history is captivating!',
          pending: true,
        },
        {
          id: 2,
          userName: 'Aria',
          email: 'aria@example.com',
          date: '01/17/2023',
          comment: 'Im inspired by the art of the Renaissance!',
          pending: false,
        },
      ],
    },
    {
      id: 5,
      title: 'The Magic of Music: From Classical to Contemporary',
      category: 'Music',
      author: 'Nora Johnson',
      totViews: 234,
      currViews: 80,
      date: '02/08/2023',
      blog: 'Journey through the world of music and its diverse genres. Learn about influential composers, musical instruments, and the impact of music on human emotions.',
      reviews: [
        {
          id: 1,
          userName: 'Jack',
          rating: 5,
          date: '02/09/2023',
        },
        {
          id: 2,
          userName: 'Evelyn',
          rating: 4,
          date: '02/10/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Jack',
          email: 'jack@example.com',
          date: '02/09/2023',
          comment: 'Music has the power to move the soul!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Evelyn',
          email: 'evelyn@example.com',
          date: '02/10/2023',
          comment: 'I love exploring different music genres!',
          pending: false,
        },
      ],
    },
    {
      id: 6,
      title: 'Culinary Adventures: A Journey Through Flavors',
      category: 'Food',
      author: 'Michael Carter',
      totViews: 456,
      currViews: 120,
      date: '03/20/2023',
      blog: 'Embark on a culinary journey and savor the worlds diverse flavors. Discover mouthwatering dishes, cooking techniques, and the cultural significance of food.',
      reviews: [
        {
          id: 1,
          userName: 'Olivia',
          rating: 4,
          date: '03/21/2023',
        },
        {
          id: 2,
          userName: 'James',
          rating: 5,
          date: '03/22/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Olivia',
          email: 'olivia@example.com',
          date: '03/21/2023',
          comment: 'Food is a universal language!',
          pending: false,
        },
        {
          id: 2,
          userName: 'James',
          email: 'james@example.com',
          date: '03/22/2023',
          comment: 'Im a food enthusiast and love trying new dishes!',
          pending: false,
        },
      ],
    },
    {
      id: 7,
      title: 'The World of Literature: A Timeless Adventure',
      category: 'Literature',
      author: 'Emily White',
      totViews: 340,
      currViews: 90,
      date: '04/15/2023',
      blog: 'Immerse yourself in the world of literature and explore literary masterpieces. Dive into classic novels, poetry, and the art of storytelling.',
      reviews: [
        {
          id: 1,
          userName: 'Aiden',
          rating: 5,
          date: '04/16/2023',
        },
        {
          id: 2,
          userName: 'Avery',
          rating: 4,
          date: '04/17/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Aiden',
          email: 'aiden@example.com',
          date: '04/16/2023',
          comment: 'Literature is a window to different worlds!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Avery',
          email: 'avery@example.com',
          date: '04/17/2023',
          comment: 'I enjoy analyzing literary works!',
          pending: false,
        },
      ],
    },
    {
      id: 8,
      title: 'The Wonders of Ancient Civilizations',
      category: 'History',
      author: 'Daniel Evans',
      totViews: 520,
      currViews: 160,
      date: '05/28/2023',
      blog: 'Uncover the mysteries of ancient civilizations and their contributions to human history. Discover the wonders of ancient Egypt, Mesopotamia, and Greece.',
      reviews: [
        {
          id: 1,
          userName: 'Ella',
          rating: 4,
          date: '05/29/2023',
        },
        {
          id: 2,
          userName: 'Noah',
          rating: 5,
          date: '05/30/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Ella',
          email: 'ella@example.com',
          date: '05/29/2023',
          comment: 'Ancient history is intriguing!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Noah',
          email: 'noah@example.com',
          date: '05/30/2023',
          comment: 'I love studying ancient civilizations!',
          pending: false,
        },
      ],
    },
    {
      id: 9,
      title: 'Environmental Conservation: Protecting Our Planet',
      category: 'Environment',
      author: 'Sarah Anderson',
      totViews: 280,
      currViews: 75,
      date: '06/18/2023',
      blog: 'Discover the importance of environmental conservation and sustainable practices. Learn about efforts to protect ecosystems, reduce pollution, and combat climate change.',
      reviews: [
        {
          id: 1,
          userName: 'Mia',
          rating: 5,
          date: '06/19/2023',
        },
        {
          id: 2,
          userName: 'Liam',
          rating: 4,
          date: '06/20/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Mia',
          email: 'mia@example.com',
          date: '06/19/2023',
          comment: 'Environmental conservation is everyones responsibility!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Liam',
          email: 'liam@example.com',
          date: '06/20/2023',
          comment: 'Let us protect our planet for future generations!',
          pending: false,
        },
      ],
    },
    {
      id: 12,
      title: 'The Art of Gardening: Cultivating Nature',
      category: 'Gardening',
      author: 'Grace Wilson',
      totViews: 410,
      currViews: 100,
      date: '07/12/2023',
      blog: 'Delve into the art of gardening and create your own green oasis. Learn about different types of gardens, plant care, and how gardening promotes well-being.',
      reviews: [
        {
          id: 1,
          userName: 'Oliver',
          rating: 4,
          date: '07/13/2023',
        },
        {
          id: 2,
          userName: 'Sophie',
          rating: 5,
          date: '07/14/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Oliver',
          email: 'oliver@example.com',
          date: '07/13/2023',
          comment: 'Gardening is therapeutic and brings joy!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Sophie',
          email: 'sophie@example.com',
          date: '07/14/2023',
          comment: 'I love growing my own flowers and vegetables!',
          pending: false,
        },
      ],
    },
    {
      id: 10,
      title: 'Exploring the Ocean: Life Beneath the Waves',
      category: 'Oceanography',
      author: 'Lucas Moore',
      totViews: 380,
      currViews: 95,
      date: '08/22/2023',
      blog: 'Dive into the mysteries of the ocean and discover the wonders of marine life. Learn about coral reefs, marine species, and the impact of human activities on the ocean.',
      reviews: [
        {
          id: 1,
          userName: 'Olivia',
          rating: 5,
          date: '08/23/2023',
        },
        {
          id: 2,
          userName: 'Noah',
          rating: 4,
          date: '08/24/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Olivia',
          email: 'olivia@example.com',
          date: '08/23/2023',
          comment: 'The ocean is full of incredible creatures!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Noah',
          email: 'noah@example.com',
          date: '08/24/2023',
          comment: 'Let us protect the ocean and its inhabitants!',
          pending: false,
        },
      ],
    },
    {
      id:11,
      title:'Python is the future of Data Science?',
      category:'Programming',
      author:'Gloria Borger',
      totViews:123,
      currViews:43,
      date:'12/12/2021',
      blog:'Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes. Explore the transformative impact of AI and machine learning in the healthcare industry. Learn how AI-powered algorithms can aid in diagnosing diseases, analyzing medical images, and predicting patient outcomes.',
      reviews:[
        {
          id:1,
          userName:"John D",
          rating:7,
          date:'12/12/2021',    
        },
        {
          id:2,
          userName:"John Do",
          rating:5,
          date:'12/12/2021',
        },
        {
          id:3,
          userName:"John Doe",
          rating:5,
          date:'12/12/2021',
        },
      ],
      comments:[
        {
          id:1,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:true,
        },
        {
          id:2,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
        {
          id:3,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
        {
          id:4,
          userName:"John Doe",
          email:"abc@xyx",
          date:'12/12/2021',
          comment:'Once upon a time in a land far, far away, there was a magical forest named Enchantia. In this forest, mystical creatures roamed freely, and the trees whispered secrets to those who listened closely.',
          pending:false,
        },
      ]
      
    },
    {
      id: 12,
      title: 'Photography: Capturing Moments in Time',
      category: 'Arts',
      author: 'Emma Turner',
      totViews: 345,
      currViews: 87,
      date: '11/19/2022',
      blog: 'Unleash your creativity through the lens and explore the world of photography. Learn about different camera techniques, composition, and post-processing to capture stunning images.',
      reviews:[
        {
          id: 1,
          userName: 'Oliver',
          rating: 5,
          date: '11/20/2022',
        },
        {
          id: 2,
          userName: 'Sophia',
          rating: 4,
          date: '11/21/2022',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Oliver',
          email: 'oliver@example.com',
          date: '11/20/2022',
          comment: 'Photography is my passion!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Sophia',
          email: 'sophia@example.com',
          date: '11/21/2022',
          comment: 'I love capturing moments with my camera!',
          pending: true,
        },
      ],
    },
    {
      id: 13,
      title: 'Space Craft and Space Exploration',
      category: 'Science',
      author: 'Ethan Davis',
      totViews: 567,
      currViews: 150,
      date: '12/05/2022',
      blog: 'Embark on a cosmic journey to learn about the wonders of the universe. Discover planets, galaxies, black holes, and the quest for extraterrestrial life.',
      reviews: [
        {
          id: 1,
          userName: 'William',
          rating: 4,
          date: '12/06/2022',
        },
        {
          id: 2,
          userName: 'Isabella',
          rating: 4,
          date: '12/07/2022',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'William',
          email: 'william@example.com',
          date: '12/06/2022',
          comment: 'Space exploration is fascinating!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Isabella',
          email: 'isabella@example.com',
          date: '12/07/2022',
          comment: 'I dream of becoming an astronaut!',
          pending: false,
        },
      ],
    },
    {
      id: 14,
      title: 'Art History: From Renaissance to Modernism',
      category: 'Art History',
      author: 'Benjamin Lee',
      totViews: 789,
      currViews: 230,
      date: '01/15/2023',
      blog: 'Dive into the evolution of art throughout history. Explore famous art movements, renowned artists, and masterpieces that have shaped the art world.',
      reviews: [
        {
          id: 1,
          userName: 'Henry',
          rating: 4,
          date: '01/16/2023',
        },
        {
          id: 2,
          userName: 'Aria',
          rating: 3,
          date: '01/17/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Henry',
          email: 'henry@example.com',
          date: '01/16/2023',
          comment: 'Art history is captivating!',
          pending: true,
        },
        {
          id: 2,
          userName: 'Aria',
          email: 'aria@example.com',
          date: '01/17/2023',
          comment: 'Im inspired by the art of the Renaissance!',
          pending: false,
        },
      ],
    },
    {
      id: 15,
      title: 'Music and Its Diverse Genres',
      category: 'Music',
      author: 'Nora Johnson',
      totViews: 234,
      currViews: 80,
      date: '02/08/2023',
      blog: 'Journey through the world of music and its diverse genres. Learn about influential composers, musical instruments, and the impact of music on human emotions.',
      reviews: [
        {
          id: 1,
          userName: 'Jack',
          rating: 4,
          date: '02/09/2023',
        },
        {
          id: 2,
          userName: 'Evelyn',
          rating: 5,
          date: '02/10/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Jack',
          email: 'jack@example.com',
          date: '02/09/2023',
          comment: 'Music has the power to move the soul!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Evelyn',
          email: 'evelyn@example.com',
          date: '02/10/2023',
          comment: 'I love exploring different music genres!',
          pending: false,
        },
      ],
    },
    {
      id: 16,
      title: 'Cuisine being the best part of travelling',
      category: 'Food',
      author: 'Michael Carter',
      totViews: 456,
      currViews: 120,
      date: '03/20/2023',
      blog: 'Embark on a culinary journey and savor the worlds diverse flavors. Discover mouthwatering dishes, cooking techniques, and the cultural significance of food.',
      reviews: [
        {
          id: 1,
          userName: 'Olivia',
          rating: 3,
          date: '03/21/2023',
        },
        {
          id: 2,
          userName: 'James',
          rating: 5,
          date: '03/22/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Olivia',
          email: 'olivia@example.com',
          date: '03/21/2023',
          comment: 'Food is a universal language!',
          pending: false,
        },
        {
          id: 2,
          userName: 'James',
          email: 'james@example.com',
          date: '03/22/2023',
          comment: 'Im a food enthusiast and love trying new dishes!',
          pending: false,
        },
      ],
    },
    {
      id: 17,
      title: 'Literature and Its Timeless Appeal',
      category: 'Literature',
      author: 'Emily White',
      totViews: 340,
      currViews: 90,
      date: '04/15/2023',
      blog: 'Immerse yourself in the world of literature and explore literary masterpieces. Dive into classic novels, poetry, and the art of storytelling.',
      reviews: [
        {
          id: 1,
          userName: 'Aiden',
          rating: 3,
          date: '04/16/2023',
        },
        {
          id: 2,
          userName: 'Avery',
          rating: 4,
          date: '04/17/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Aiden',
          email: 'aiden@example.com',
          date: '04/16/2023',
          comment: 'Literature is a window to different worlds!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Avery',
          email: 'avery@example.com',
          date: '04/17/2023',
          comment: 'I enjoy analyzing literary works!',
          pending: false,
        },
      ],
    },
    {
      id: 18,
      title: 'Ancient Civilizations and Their Contributions',
      category: 'History',
      author: 'Daniel Evans',
      totViews: 520,
      currViews: 160,
      date: '05/28/2023',
      blog: 'Uncover the mysteries of ancient civilizations and their contributions to human history. Discover the wonders of ancient Egypt, Mesopotamia, and Greece.',
      reviews: [
        {
          id: 1,
          userName: 'Ella',
          rating: 5,
          date: '05/29/2023',
        },
        {
          id: 2,
          userName: 'Noah',
          rating: 5,
          date: '05/30/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Ella',
          email: 'ella@example.com',
          date: '05/29/2023',
          comment: 'Ancient history is intriguing!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Noah',
          email: 'noah@example.com',
          date: '05/30/2023',
          comment: 'I love studying ancient civilizations!',
          pending: false,
        },
      ],
    },
    {
      id: 19,
      title: 'Green Living: Protecting Our Planet',
      category: 'Environment',
      author: 'Sarah Anderson',
      totViews: 280,
      currViews: 75,
      date: '06/18/2023',
      blog: 'Discover the importance of environmental conservation and sustainable practices. Learn about efforts to protect ecosystems, reduce pollution, and combat climate change.',
      reviews: [
        {
          id: 1,
          userName: 'Mia',
          rating: 5,
          date: '06/19/2023',
        },
        {
          id: 2,
          userName: 'Liam',
          rating: 5,
          date: '06/20/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Mia',
          email: 'mia@example.com',
          date: '06/19/2023',
          comment: 'Environmental conservation is everyones responsibility!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Liam',
          email: 'liam@example.com',
          date: '06/20/2023',
          comment: 'Let us protect our planet for future generations!',
          pending: false,
        },
      ],
    },
    {
      id: 20,
      title: 'Gardner and Its Art',
      category: 'Gardening',
      author: 'Grace Wilson',
      totViews: 410,
      currViews: 100,
      date: '07/12/2023',
      blog: 'Delve into the art of gardening and create your own green oasis. Learn about different types of gardens, plant care, and how gardening promotes well-being.',
      reviews: [
        {
          id: 1,
          userName: 'Oliver',
          rating: 1,
          date: '07/13/2023',
        },
        {
          id: 2,
          userName: 'Sophie',
          rating: 5,
          date: '07/14/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Oliver',
          email: 'oliver@example.com',
          date: '07/13/2023',
          comment: 'Gardening is therapeutic and brings joy!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Sophie',
          email: 'sophie@example.com',
          date: '07/14/2023',
          comment: 'I love growing my own flowers and vegetables!',
          pending: false,
        },
      ],
    },
    {
      id: 21,
      title: 'Ocean and Its Wonders',
      category: 'Oceanography',
      author: 'Lucas Moore',
      totViews: 380,
      currViews: 95,
      date: '08/22/2023',
      blog: 'Dive into the mysteries of the ocean and discover the wonders of marine life. Learn about coral reefs, marine species, and the impact of human activities on the ocean.',
      reviews: [
        {
          id: 1,
          userName: 'Olivia',
          rating: 5,
          date: '08/23/2023',
        },
        {
          id: 2,
          userName: 'Noah',
          rating: 3,
          date: '08/24/2023',
        },
      ],
      comments: [
        {
          id: 1,
          userName: 'Olivia',
          email: 'olivia@example.com',
          date: '08/23/2023',
          comment: 'The ocean is full of incredible creatures!',
          pending: false,
        },
        {
          id: 2,
          userName: 'Noah',
          email: 'noah@example.com',
          date: '08/24/2023',
          comment: 'Let us protect the ocean and its inhabitants!',
          pending: false,
        },
      ],
    }
    
  ]

  const allCategories=[
    'Programming',
    'Arts',
    'Science',
    'Art History',
    'Music',
    'Food',
    'Literature',
    'History',
    'Environment',
    'Gardening',
    'Oceanography',
  ]
  

  const BlogPageWithDetails = () => {
    const { '*': URL } = useParams();
    const URLArr=URL.split('-')
    const blogId=URLArr[URLArr.length-1] 

    console.log('Requested Details:', URL);
    console.log('ID',blogId) 
  
    return (
        <BlogPage
          blog={allBlogss.find((blog) => blog.id == blogId)}
        />
    );
  };

function extractTop3BlogsPerCategoryByRating(allBlogs) {
  // Group blogs by category
  const blogsByCategory = {};
  allBlogs.forEach((blog) => {
    if (!blogsByCategory[blog.category]) {
      blogsByCategory[blog.category] = [];
    }
    blogsByCategory[blog.category].push(blog);
  });

  // Sort blogs within each category based on average rating
  for (const category in blogsByCategory) {
    blogsByCategory[category].sort((a, b) => {
      const avgRatingA = calculateAverageRating(a.reviews);
      const avgRatingB = calculateAverageRating(b.reviews);
      return avgRatingB - avgRatingA;
    });
  }

  // Extract top 3 blogs from each category
  const top3BlogsPerCategory = {};
  for (const category in blogsByCategory) {
    top3BlogsPerCategory[category] = blogsByCategory[category].slice(0, 3); // Modify to slice(0, 3) to get top 3 blogs
  }

  return top3BlogsPerCategory;
}

function calculateAverageRating(reviews) {
  if (reviews.length === 0) {
    return 0;
  }
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return totalRating / reviews.length;
}


function calculateAverageRating(reviews) {
  if (reviews.length === 0) {
    return 0;
  }
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  return totalRating / reviews.length;
}

// Call the function with the allBlogss array
const top3BlogsPerCategoryByRating = extractTop3BlogsPerCategoryByRating(allBlogss);

  return (
    <div className="app">
      <authUserInfoContext.Provider value={{ authUserInfo, setAuthUserInfo }}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path='/' element={<><Navbarr /><MainBlog allBlogs={allBlogss}/><Footer /></>}/>
            <Route path='/blog/*' element={<><Navbarr /><BlogPageWithDetails /><Footer /></>}/>
            <Route path='/contact-us' element={<><Navbarr /><ContactUs /><Footer /></>} />
            <Route path='/about-us' element={<><Navbarr /><AboutUs /><Footer /></>} />
            <Route path='/terms-of-service' element={<><Navbarr /><TermsOfService /><Footer /></>} />
            
            
            <Route path='/login' element={<><Navbarr /><Login /><Footer /></>} />
            {/* <Route path='/dashboard' element={<Dashboardd user={user} allBlogs={allBlogss} />} /> */}
            <Route path='/dashboard' element={<Dashboardd allBlogs={allBlogss} />} />
            <Route path='/register' element={<><Navbarr /><Register /><Footer /></>} />
            <Route path='/write-blog' element={<><Navbarr /><BlogEditor /><Footer /></>} />
            

            <Route path='/trending' element={<><Navbarr /> <TopCategory top3BlogsPerCategoryByRating={top3BlogsPerCategoryByRating}    /> <Footer /></>} />
            <Route path='/*' element={<><Navbarr /><Error /><Footer /></>} />          
          </Routes>
        </Router>
      </authUserInfoContext.Provider>
    </div>
  );
}



export default App;
