import React, { useEffect, useState } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import NavBar from "../comps/NavBar";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Footer from "../comps/Footer";
import { themes, content_themes } from '../utils/variables';
import { useTheme } from '../utils/provider';

const Cont = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.p`
  font-family: 'Italiana', serif;
  font-weight:300;
  font-size:1.5rem;
  color:${props=>props.color};
  padding-right: 10vw;
  padding-left: 10vw;
  padding-top: 8vh;
`

const Content = styled.p`
    display:flex;
    flex-direction:column;
    text-decoration:none;
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:1rem;
    padding-right: 10vw;
    padding-left: 10vw;
    color:${props=>props.color};
`

export default function Privacy() {

    const {theme, setTheme} = useTheme();
    
    return <Cont>
        <Title color={content_themes[theme].color}>Terms of Use</Title>
        <Content color={content_themes[theme].color}>Eilidh Morrice-Ashdown welcomes you to her website. Using this website indicates your consent and agreement to be bound by this user agreement and any policies or practices contained herein. All content and information including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips, displayed on this website are owned or licensed by Eilidh Morrice-Ashdown. All content on this site is protected by copyright and other intellectual property laws. Any names, titles, logos and designs, displayed on the website that contain Eilidh Morrice-Ashdown's titles, logos, or brands are the exclusice property and trademarks of Eilidh Morrice-Ashdown or her members. </Content>
        <Title color={content_themes[theme].color}>Privacy Policy</Title> 
        {/* <Content color={content_themes[theme].color}> 
        This policy applies to Eilidh Morrice-Ashdown's Web site only. It is designed to inform you of how and why Eilidh Morrice-Ashdown gathers personal and non-personal information about you. This policy complies with provisions of the British Columbia Freedom of Information and Protection of Privacy Act. This may be Web site connected by hyperlinks to other Web sites. We are not responsible in any way for the privacy practices on other Web sites and suggest that you review the privacy policies on those linked Web sites before using them. We are accountable for this Privacy Policy and these practices on this Web site, including the Privacy Code set out below. If you have any questions or concerns regarding the privacy practices on this Web site, please e-mail us. What Information Is Collected? Eilidh Morrice-Ashdown collects two kinds of information from this Web site 1. Your voluntarily provided personal information. 2. Anonymous information about your visit. 1. Your Personal Information: During normal Web site usage, you can visit this site without communicating any personal information. However, to make use of certain features on this site, such as gift certificates, promotions, subscriptions or newsletters, users may be asked to register with Eilidh Morrice-Ashdown's Web site. As part of this voluntary registration, Eilidh Morrice-Ashdown may request contact information (such as name, mailing address, e-mail address, etc.) and other data required for operating these services. The only way we can collect personal information from you is if you voluntarily provide it. By voluntarily providing this personal information to us by sending us a comment or suggestion, by entering a contest that is posted on this Web site, you will be consenting to the collection, use and distribution of your personal information by Eilidh Morrice-Ashdown for the purposes set out. You are under no obligation to provide us with personal information and can access and enjoy many parts of Eilidh Morrice-Ashdown's Web site without providing us any personal information. Among other things, the following is a representative list of reasons we may ask for your personal information: To run contests, select entrants, and choose prize winners; To respond to your questions or the comments you e-mail to us; To provide you with newsletters, bulletins or other information about our design or communication activities. To keep aggregate information on Web site use. B. Anonymous Information About Your Visit: When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors. Eilidh Morrice-Ashdown may collect the following non-identifiable information when you visit this Web site: Your Internet Service Provider (ISP), Time of your visit, Pages you visited, Web Browser Used, What If I Do Not Agree With this Privacy Policy? By visiting this Web site and voluntarily providing personal information to Eilidh Morrice-Ashdown's Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein. However, We welcome your comments and/or suggestions on improving this Web site and policies. Eilidh Morrice-Ashdown + Digital Design and Development April 2, 2022 
        </Content> */}
        <Footer/>
    </Cont>
    
}