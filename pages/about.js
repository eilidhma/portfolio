// import React, { useEffect, useState } from "react";
// import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
// import styled from "styled-components";
// import Loading from "../comps/Loading";
// import NavBar from "../comps/NavBar";
// import Intro from "../comps/Intro";
// import Social from "../comps/Social";
// import NavDots from "../comps/NavDots";
// import Spinner from "../comps/Spinner";
// import Title from "../comps/Title";
// import Girl from "../comps/Girl";
// import Cursor from "../comps/Cursor";
// import { motion } from "framer-motion";
// import About from "../comps/About";
// import Text from "../comps/Text";
// import Tools from "../comps/Tools";
// import Work from "../comps/Work";
// import WorkCont from "../comps/WorkCont";
// import Contact from "../comps/Contact";
// import ContactForm from "../comps/ContactForm";
// import SaveThePlate from "../comps/SaveThePlate";
// import Garden from "../comps/Garden";
// import Contendr from "../comps/Contendr";
// import Footer from "../comps/Footer";

// export default function Dev() {

//   const SectionCont = styled.div`
//     display:flex;
//     flex-direction:column;
//     width:100vw;
//   `

//   const [dev, setDev] = useState(false)
//   const [garden, setGarden] = useState(false)
//   const [contendr, setContendr] = useState(false)

//   return (
//     <div>
//       <NavBar />
//       <Social />
//       <NavDots />
//       <SectionCont id="about">
//         <About />
//         {/* <Text /> */}
//         <Tools />
//       </SectionCont>
//       <SectionCont id="contact">
//         <Contact />
//         <ContactForm />
//         <Footer />
//       </SectionCont>

//     </div>
//   )
// }

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mj0oxtr', 'template_mo1amod', form.current, 'Zv4txRxGpVFL5PPpK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


