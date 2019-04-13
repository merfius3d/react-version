import React, {Component} from 'react';
import Homepage from '../components/homepage';
import Reviews from '../components/reviews';
import About from '../components/about';
import Contacts from '../components/contacts';
export default function(){
  return [
    {
      id: 0,
      menuItem: 'Home',
      title: 'Home page',
      text: 'This is home page',
      page: <Homepage />,
      img: '123.jpg'
    },
    {
      id: 1,
      menuItem: 'Reviews',
      title: 'Reviews page',
      text: 'This is Reviews page',
      page: <Reviews />,
      img: '123.jpg'
    },
    {
      id: 2,
      menuItem: 'What I do',
      title: 'About page',
      text: 'This is page about me',
      page: <About />,
      img: '123.jpg'
    },
    {
      id: 3,
      menuItem: 'Contacts',
      title: 'Contacts page',
      text: 'This is page with my contacts',
      page: <Contacts />,
      img: '123.jpg'
    },
    {
      id: 4,
      menuItem: 'Hire me',
      title: 'https://www.freelancer.com/hireme/Merfius',
      text: '',
      img: ''
    },
    {
      id: 5,
      menuItem: 'Wordpress version',
      title: 'http://www.merfius.com/',
      text: '',
      img: ''
    }
  ]
}
