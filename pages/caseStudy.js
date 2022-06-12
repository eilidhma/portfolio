import React, { useEffect, useState, useContext } from "react";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styled from "styled-components";
import Footer from "../comps/Footer";
import { MouseContext } from "../utils/mousecontext";
import { content_themes, themes } from "../utils/variables";
import { useTheme } from "../utils/provider";
import { device } from "../utils/breakpoints";
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform
  } from "framer-motion";

export default function CaseStudy() {

  const [isComplete, setIsComplete] = useState(false);
  const [isCompleteHand, setIsCompleteHand] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const ySpace = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const pathLength = useSpring(ySpace, { stiffness: 400, damping: 90 });

  const ySpaceHand = useTransform(scrollYProgress, [0, 0], [0, 5]);
  const pathLengthHand = useSpring(ySpaceHand, { stiffness: 400, damping: 90 });

  useEffect(() => {
      ySpace.onChange(x => setIsComplete(x >= 1))
      , [ySpace]
    });

useEffect(() => {
    ySpaceHand.onChange(x => setIsCompleteHand(x >= 1))
    , [ySpaceHand]
    });

const Cont = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:100vw;
`

const Display = styled.div`
    @media ${device.mobile} { 
    display: none;
    }

    @media ${device.tablet} { 
        display: flex;
    }
`

const MobDisplay = styled.div`
    @media ${device.mobile} { 
    display: flex;
    justify-content: center;
    align-items: center;
    }

    @media ${device.tablet} { 
        display: none;
    }
`

const Title = styled.p`
    margin-top: 170px;
    font-family: 'Italiana', serif;
    font-size:2rem;
    color:${props=>props.color};
`

const SubTitle = styled.p`
    font-family: 'Italiana', serif;
    font-size:1.7rem;
    color:${props=>props.color};
`

const Text = styled.p`
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    font-size:1.2rem;
    color:${props=>props.color};
`

const LeftBlock = styled.div`
    @media ${device.mobile} { 
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    @media ${device.tablet} { 
        flex-direction:row;
        justify-content: flex-start;
        align-items: flex-start;
    }
    display:flex;
    width:100vw;
`

const Col = styled.div`
    @media ${device.mobile} { 
        width: 80vw;
        padding-left: 20px;
        padding-right: 20px;
    }
    @media ${device.tablet} { 
        width: ${props=>props.width};
        padding-left: ${props=>props.paddingLeft};
        padding-right: ${props=>props.paddingRight};
    }
    display: flex;
    flex-direction: column;
`

const RightBlock = styled.div`
    @media ${device.mobile} { 
        flex-direction:column;
        justify-content: center;
        align-items: center;
    }
    @media ${device.tablet} { 
        flex-direction:row;
        justify-content: flex-end;
        align-items: flex-start;
    }
    display:flex;
    width:100vw;
`

const ImgBlock = styled.div`
    display:flex;
    flex-direction:row;
    justify-content: flex-end;
    align-items: flex-end;
    width:100vw;
    position: relative;
    right: 200px;
`

const Spacer = styled.div`
    display: flex;
    height: 200px;
    width: 100vw;
`

const {theme, setTheme} = useTheme();
const { cursorType, cursorChangeHandler } = useContext(MouseContext);


  return (
    <Cont>
        <Title color={content_themes[theme].color}>
          SaveThePlate: Case Study
        </Title>
        <LeftBlock>
            <Col paddingRight='0px' paddingLeft='12vw' width='60vw'>
                <SubTitle color={content_themes[theme].color}>
                    Stage I: Ideation
                </SubTitle>
                <Text color={content_themes[theme].color}>
                During the final year of my program, I was tasked with pitching an idea for an application that benefited the community in a sustainable way. 
                <br></br><br></br>
                SaveThePlate was my solution: an application that provides reasonably priced restaurant meals to users while simultaneously reducing food waste. 
                <br></br><br></br>
                Based on the user’s location, the app will show nearby meals that restaurants cannot sell at full price due to small mistakes, extra dishes prepared, extra banquet food, etc. 
                <br></br><br></br>
                The user can claim available meals they see and pick up their meal from the restaurant directly. 
                <br></br><br></br>
                In addition to saving the customer and restaurant money, the app provides a solution to the monumental food waste produced by the restaurant industry. 
                <br></br><br></br>
                The main benefits of the application are:
                <br></br><br></br>
                1. Reduction in food waste<br></br>
                2. Market penetration of consumers that cannot typically afford restaurant meals<br></br>
                3. Recovery of losses of unsellable meals for restaurants (28-32% of menu price)<br></br>
                <br></br>
                Amongst the pitches, my application was chosen to develop over the following months, so I had the opportunity to assemble a team of fellow students to bring the idea to life.  
                </Text>
            </Col>
            <Col paddingRight='0px' paddingLeft='2vw' width='30vw'>
                <svg width="100%" height="793" viewBox="0 0 277 793" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    d="M136.181 125.5C134.904 146.422 133.816 203.256 132.633 224.178V251.395C131.703 267.576 131.186 283.748 131.084 299.913C131.084 308.694 131.498 318.433 137.648 324.764C141.563 328.764 147.11 330.598 152.338 332.633C165.158 337.655 177.096 344.69 187.702 353.473C190.068 355.437 192.504 357.709 193.155 360.715C194.586 367.33 187.087 372.146 180.688 374.335C157.86 382.074 133.439 383.874 109.723 379.566C105.69 378.832 100.652 376.537 101.196 372.466C101.48 370.442 103.171 368.916 104.874 367.732C117.577 359.117 134.443 361.236 149.582 363.709L171.226 367.259C177.767 368.324 185.23 370.028 188.305 375.898C191.167 381.388 188.648 388.477 184.024 392.571C179.399 396.666 173.178 398.429 167.134 399.671C148.014 403.688 128.327 404.234 109.014 401.281C104.756 400.618 99.3033 398.121 100.202 393.908C120.244 390.104 140.499 387.519 160.854 386.169C171.735 385.447 184.662 386.039 190.683 395.139C197.152 404.902 191.085 418.546 182.037 425.99C161.54 442.853 131.592 439.598 105.643 434.025C102.686 433.397 99.0313 431.895 99.1141 428.865C99.3394 427.327 100.133 425.93 101.338 424.948C118.937 407.304 147.335 407.742 171.995 411.304C181.54 412.688 192.61 415.552 196.171 424.522C200.488 435.374 190.257 446.829 179.423 451.195C168.589 455.562 156.194 456.379 146.661 463.112C130.102 474.792 128.919 498.495 129.44 518.73C130.055 544.764 130.674 570.767 131.297 596.738C131.663 612.015 132.018 627.506 128.553 642.369C127.642 646.262 126.305 650.356 123.124 652.771C119.942 655.185 114.431 654.782 112.869 651.102C112.283 649.23 112.283 647.223 112.869 645.351C114.904 635.647 118.57 625.884 125.797 619.116C133.024 612.347 144.461 609.436 153.118 614.169C164.946 620.713 166.211 637.292 163.195 650.451C163.081 651.181 162.806 651.876 162.391 652.487C161.937 652.953 161.378 653.305 160.761 653.51C160.144 653.716 159.486 653.771 158.843 653.67C151.001 653.161 147.619 643.623 146.329 635.919C139.663 595.901 137.738 555.236 140.593 514.766C141.433 502.707 142.722 490.59 146.306 479.052C147.642 474.733 150.079 469.857 154.585 469.289C158.453 468.792 161.989 472.07 163.219 475.774C164.449 479.478 163.964 483.501 163.55 487.383C158.522 535.925 168.162 584.859 191.227 627.861C196.809 638.203 203.137 651.102 196.561 660.841C191.747 667.941 182.013 669.693 173.426 669.338C155.283 668.604 137.482 661.504 119.457 663.646C106.305 665.255 91.4853 671.42 80.9352 663.421C67.5465 653.22 101.823 614.595 108.541 588.928C112.515 573.757 113.047 557.935 113.555 542.256C114.194 523.05 114.738 503.204 107.464 485.359C103.916 476.732 97.5647 468.106 88.3511 466.78C78.6643 465.384 69.5808 472.886 65.3702 481.726C61.1596 490.566 60.5328 500.566 58.9479 510.269C53.2234 545.143 34.6069 576.301 20.1064 608.501C5.60589 640.7 -5.20444 677.432 5.70051 711.052C7.42732 716.377 12.2056 727.299 15.8485 731.536L16.1087 731.914C23.2052 742.328 31.0823 752.032 40.7454 760.161C56.1211 772.966 75.0451 780.646 94.454 785.557C121.657 792.444 150.469 794.183 177.885 788.101C205.301 782.018 231.227 767.818 249.311 746.328C266.577 725.674 275.986 699.577 275.876 672.651C275.714 663.534 274.712 654.45 272.884 645.517C270.729 634.474 267.715 623.618 263.871 613.045C248.945 572.041 221.493 535.38 214.196 492.341C212.185 480.342 211.393 467.147 203.243 458.106C193.58 447.397 177.377 446.592 162.971 445.811C138.493 444.472 114.182 440.96 90.3263 435.315C85.2168 434.131 79.3622 432.119 77.6827 427.149C75.6365 421.031 81.2309 415.256 86.2694 411.233C80.5094 411.671 76.3935 403.423 80.2019 399.08C81.5621 397.518 83.7502 395.944 83.0997 393.991C82.6384 392.63 81.0298 392.122 79.7761 391.411C74.6193 388.5 76.0386 379.057 81.8223 377.779C76.9967 375.897 71.1184 371.282 73.8269 366.868C75.1871 364.656 78.1676 364.005 79.8116 361.993C81.4556 359.981 81.3374 356.81 81.7277 354.076C82.6266 347.911 86.9081 342.775 91.5208 338.574C120.687 311.995 164.355 311.357 203.787 312.173L253.558 313.238" 
                    stroke={content_themes[theme].color} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"
                    style={{
                        pathLength,
                        scaleX: -1 // Reverse direction of line animation
                      }}/>
                </svg>
            </Col>
        </LeftBlock>
        <Spacer />
        <RightBlock>
            <Display>
                <Col paddingRight='50px' paddingLeft='12vw' width='40vw'>
                    <img src='/lofi.png' width={'80%'}/>
                </Col>
            </Display>
            <Col paddingRight='12vw' paddingLeft='0px' width='60vw'>
                <SubTitle color={content_themes[theme].color}>
                    Stage II: Design Sprints
                </SubTitle>
                <Text color={content_themes[theme].color}>
                To start the design process, we began by brainstorming ideal features, layouts, and user flow for SaveThePlate <br></br><br></br>
                From there, we assembled initial wireframes and then conducted user research to determine the most important features to include<br></br><br></br>
                </Text>
            </Col>
            <MobDisplay>
                <Col paddingRight='0px' paddingLeft='0px' width='100%'>
                    <img src='/lofi.png' width={'80%'}/>
                </Col>
            </MobDisplay>
        </RightBlock>
        <Display>
            <ImgBlock>
                <img src={content_themes[theme].color === '#252F1D' ? '/wireframe.svg' : '/wireframes-dm.svg'} width={'60%'}/>
            </ImgBlock>
        </Display>
        <Spacer/>
        <LeftBlock>
        <Col paddingRight='0px' paddingLeft='12vw' width='60vw'>
            <SubTitle color={content_themes[theme].color}>
                Stage III: Development
            </SubTitle>
            <Text color={content_themes[theme].color}>
            As lead developer, I began by reviewing the technical feasibility of our UI design. <br></br><br></br>
            Next, I began developing components using React Native Expo to maximize reusability and efficiency of code. I ensured cross-platform mobile functionality by continuously testing the application on both Xcode iOS simulators and Android devices.<br></br><br></br>
            I then focused on the application’s functionality and developed the core features.<br></br><br></br>
            After the front-end development reached the beta stage, I implemented a back-end for the application using Axios, PHP, and MySQL.<br></br><br></br>
            </Text>
        </Col>
        <Col paddingRight='0px' paddingLeft='0px' width='40vw'>
            <img src='/savetheplate.png' width={'100%'}/>
        </Col>
        </LeftBlock>
        <Spacer />
        <RightBlock>
            <Display>
                <Col paddingRight='0px' paddingLeft='12vw' width='40vw'>
                    <svg width="100%" height="453" viewBox="0 0 622 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                    initial={{ pathLength: 0 }} 
                    animate={{ pathLength: 1 }} 
                    d="M0 451.853H365.43C365.43 451.853 306.412 426.785 286.142 378.519C273.628 345.133 280.774 326.054 278.388 318.299C276.002 310.543 253.359 270.607 249.78 268.817C246.201 267.027 272.435 312.941 268.856 322.475C265.277 332.009 258.807 330.334 258.807 330.334C258.807 330.334 263.12 314.639 257.729 306.012C252.338 297.384 242.278 303.017 242.278 303.017C242.278 303.017 262.684 315.109 244.916 340.739C244.916 340.739 238.813 319.538 230.428 313.067C230.428 313.067 241.681 332.709 238.928 344.216C238.928 344.216 228.742 333.672 225.874 315.465C225.874 315.465 218.2 300.849 218.085 290.42C217.971 279.991 216.594 242.349 227.87 230.223C239.146 218.096 252.269 217.431 259.335 219.897C266.401 222.364 280.132 249.004 268.707 257.516C257.282 266.029 244.514 247.673 239.731 232.276C234.948 216.88 227.767 203.881 228.57 202.241C229.373 200.6 295.824 168.626 296.248 109.863C296.673 51.0994 259.989 1.14722 192.482 1.14722C124.976 1.14722 92.0543 53.6578 92.0543 112.433C92.0543 171.207 211.065 209.951 217.948 204.948C224.83 199.946 229.969 189.139 242.381 176.049C253.783 164.025 275.865 149.937 275.865 110.757C275.865 71.5782 249.94 17.8285 191.691 17.8285C133.441 17.8285 110.385 81.5824 110.385 111.171C110.385 140.759 138.328 163.589 148.239 163.475C157.679 163.36 159.71 163.085 164.608 159.677C170.103 155.903 168.141 144.132 170.94 142.468C173.739 140.805 202.955 150.969 213.233 130.915C223.511 110.861 216.457 104.608 214.449 104C212.442 103.392 191.599 102.004 190.67 85.5519C189.741 69.1001 218.785 87.2614 220.494 91.9308C222.203 96.6002 211.318 90.0492 210.17 88.489C209.023 86.9287 206.58 82.179 207.257 80.8367C207.934 79.4944 223.683 91.7128 221.836 98.1949C219.99 104.677 216.812 107.993 209.907 106.226C203.001 104.459 189.041 96.6116 187.401 86.16C187.401 86.16 162.646 96.2675 162.612 115.542C162.578 134.816 172.11 139.887 177.949 139.795C183.787 139.703 196.772 139.347 197.266 132.659C197.759 125.97 190.785 120.188 184.556 126.292C178.327 132.395 185.944 138.487 190.67 135.561C195.396 132.636 201.705 130.158 203.414 123.986C205.123 117.813 202.703 107.511 198.505 110.081C194.306 112.65 189.982 116.964 193.239 120.188C196.497 123.412 205.662 123.733 207.658 117.894C209.654 112.054 201.051 101.442 196.348 104.126C191.645 106.811 175.7 124.376 173.406 131.936C171.112 139.497 170.102 134.322 168.921 132.2C167.739 130.078 165.663 113.683 168.737 110.987C171.812 108.291 179.543 105.549 180.346 110.436C181.149 115.324 173.911 117.905 171.995 116.7C170.08 115.496 168.611 104.551 171.617 100.639C174.622 96.7264 183.088 90.8638 185.485 93.3075C187.882 95.7512 188.926 99.7437 186.529 101.499C184.131 103.254 178.362 105.572 176.939 100.122C175.517 94.6727 187.263 94.6613 188.227 92.8945C189.19 91.1277 187.676 82.787 185.164 83.2459C185.164 83.2459 181.08 81.5709 174.221 86.4009C167.361 91.2309 143.444 116.081 168.485 140.862C172.156 144.499 128.647 174.672 177.295 183.999C225.943 193.327 219.015 202.115 221.022 207.702C222.628 215.331 241.314 261.624 241.314 261.624C241.314 261.624 231.713 222.215 254.54 213.725C277.367 205.235 338.76 307.296 340.905 346.613C340.905 346.613 298.6 289.25 288.012 247.248C288.012 247.248 265.896 221.446 266.642 200.967C267.387 180.489 299.839 231.037 320.681 235.833C341.524 240.629 359.602 240.078 366.565 251.895C373.528 263.712 380.996 307.469 391.159 337.665C401.322 367.861 402.779 376.775 412.954 383.406C423.128 390.038 428.084 401.625 466.959 401.625C505.834 401.625 622.034 403.174 622.034 403.174" 
                    stroke={content_themes[theme].color} stroke-width="2" stroke-miterlimit="10"
                    style={{
                        pathLength:pathLengthHand,
                        scaleX: -1 // Reverse direction of line animation
                      }}
                    />
                    </svg> 
                </Col>
            </Display>
            <Col paddingRight='12vw' paddingLeft='0px' width='60vw'>
                <SubTitle color={content_themes[theme].color}>
                    Stage IV: User Testing &amp; Debugging
                </SubTitle>
                <Text color={content_themes[theme].color}>
                The application was deployed and thorougly tested by both colleagues and non-developers to gauge user experience and find potential bugs. From there, the developers on the team made necessary adjustments and redeployed the application in time for the showcase presentation.
                </Text>
            </Col>
            <MobDisplay>
                <Col paddingRight='0px' paddingLeft='0px' width='30vw'>
                <svg width="100%" height="453" viewBox="0 0 622 453" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.path 
                initial={{ pathLength: 0 }} 
                animate={{ pathLength: 1 }} 
                d="M0 451.853H365.43C365.43 451.853 306.412 426.785 286.142 378.519C273.628 345.133 280.774 326.054 278.388 318.299C276.002 310.543 253.359 270.607 249.78 268.817C246.201 267.027 272.435 312.941 268.856 322.475C265.277 332.009 258.807 330.334 258.807 330.334C258.807 330.334 263.12 314.639 257.729 306.012C252.338 297.384 242.278 303.017 242.278 303.017C242.278 303.017 262.684 315.109 244.916 340.739C244.916 340.739 238.813 319.538 230.428 313.067C230.428 313.067 241.681 332.709 238.928 344.216C238.928 344.216 228.742 333.672 225.874 315.465C225.874 315.465 218.2 300.849 218.085 290.42C217.971 279.991 216.594 242.349 227.87 230.223C239.146 218.096 252.269 217.431 259.335 219.897C266.401 222.364 280.132 249.004 268.707 257.516C257.282 266.029 244.514 247.673 239.731 232.276C234.948 216.88 227.767 203.881 228.57 202.241C229.373 200.6 295.824 168.626 296.248 109.863C296.673 51.0994 259.989 1.14722 192.482 1.14722C124.976 1.14722 92.0543 53.6578 92.0543 112.433C92.0543 171.207 211.065 209.951 217.948 204.948C224.83 199.946 229.969 189.139 242.381 176.049C253.783 164.025 275.865 149.937 275.865 110.757C275.865 71.5782 249.94 17.8285 191.691 17.8285C133.441 17.8285 110.385 81.5824 110.385 111.171C110.385 140.759 138.328 163.589 148.239 163.475C157.679 163.36 159.71 163.085 164.608 159.677C170.103 155.903 168.141 144.132 170.94 142.468C173.739 140.805 202.955 150.969 213.233 130.915C223.511 110.861 216.457 104.608 214.449 104C212.442 103.392 191.599 102.004 190.67 85.5519C189.741 69.1001 218.785 87.2614 220.494 91.9308C222.203 96.6002 211.318 90.0492 210.17 88.489C209.023 86.9287 206.58 82.179 207.257 80.8367C207.934 79.4944 223.683 91.7128 221.836 98.1949C219.99 104.677 216.812 107.993 209.907 106.226C203.001 104.459 189.041 96.6116 187.401 86.16C187.401 86.16 162.646 96.2675 162.612 115.542C162.578 134.816 172.11 139.887 177.949 139.795C183.787 139.703 196.772 139.347 197.266 132.659C197.759 125.97 190.785 120.188 184.556 126.292C178.327 132.395 185.944 138.487 190.67 135.561C195.396 132.636 201.705 130.158 203.414 123.986C205.123 117.813 202.703 107.511 198.505 110.081C194.306 112.65 189.982 116.964 193.239 120.188C196.497 123.412 205.662 123.733 207.658 117.894C209.654 112.054 201.051 101.442 196.348 104.126C191.645 106.811 175.7 124.376 173.406 131.936C171.112 139.497 170.102 134.322 168.921 132.2C167.739 130.078 165.663 113.683 168.737 110.987C171.812 108.291 179.543 105.549 180.346 110.436C181.149 115.324 173.911 117.905 171.995 116.7C170.08 115.496 168.611 104.551 171.617 100.639C174.622 96.7264 183.088 90.8638 185.485 93.3075C187.882 95.7512 188.926 99.7437 186.529 101.499C184.131 103.254 178.362 105.572 176.939 100.122C175.517 94.6727 187.263 94.6613 188.227 92.8945C189.19 91.1277 187.676 82.787 185.164 83.2459C185.164 83.2459 181.08 81.5709 174.221 86.4009C167.361 91.2309 143.444 116.081 168.485 140.862C172.156 144.499 128.647 174.672 177.295 183.999C225.943 193.327 219.015 202.115 221.022 207.702C222.628 215.331 241.314 261.624 241.314 261.624C241.314 261.624 231.713 222.215 254.54 213.725C277.367 205.235 338.76 307.296 340.905 346.613C340.905 346.613 298.6 289.25 288.012 247.248C288.012 247.248 265.896 221.446 266.642 200.967C267.387 180.489 299.839 231.037 320.681 235.833C341.524 240.629 359.602 240.078 366.565 251.895C373.528 263.712 380.996 307.469 391.159 337.665C401.322 367.861 402.779 376.775 412.954 383.406C423.128 390.038 428.084 401.625 466.959 401.625C505.834 401.625 622.034 403.174 622.034 403.174" 
                stroke={content_themes[theme].color} stroke-width="2" stroke-miterlimit="10"
                style={{
                        pathLength:pathLengthHand,
                        scaleX: -1 // Reverse direction of line animation
                      }}
                />
                </svg>               
                </Col>
            </MobDisplay>
        </RightBlock>
      <Footer />
    </Cont>
  )
}
