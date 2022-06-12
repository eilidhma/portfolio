import styled from 'styled-components';
import { motion } from "framer-motion";
import { useState, useContext  } from 'react';
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import { AiOutlineClose, AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { MouseContext } from '../../utils/mousecontext';
import { device } from '../../utils/breakpoints';
import { useRouter } from 'next/router';

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100vw;
  min-height: 100vh;
`

const Cont = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
  background-color:${props=>props.background};
  padding-bottom:100px;
`

const SubCont = styled.div`
@media ${device.mobile} { 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding-left:100px;
  padding-right:100px;
  width:80vw;
  }
  @media ${device.laptop} { 
    display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:flex-start;
  padding-left:100px;
  padding-right:100px;
  width:80vw;
  }
`

const Left = styled.div`
@media ${device.mobile} { 
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:80vw;
}
@media ${device.laptop} {
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:50vw;
}
`

const Right = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:30vw;
  object-fit:cover;
`

const Title = styled.p`
  margin-top: 170px;
  font-family: 'Italiana', serif;
  font-size:2rem;
  color:${props=>props.color};
`

const SubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight:300;
  font-size:1.2rem;
  color:${props=>props.color};
`

const Button = styled.a`
    font-family: 'Poppins', sans-serif;
    font-weight:300;
    border:1px solid ${props=>props.color};
    color:${props=>props.color};
    background-color:${props=>props.background};
    padding:10px;
    text-align: center;
  @media ${device.mobile} { 
    width: 130px;
    font-size:1rem;
    margin-right: 10px;
  }
  @media ${device.tablet} {
    width:200px;
    font-size:1.2rem;
    margin-right: 20px;
  }
  &:hover{
    border:1px solid ${props=>props.background};
    color:${props=>props.background};
    background-color:${props=>props.color};
  }
`

const Gif = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:100%;
`

const BackButton = styled.button`
  font-family: 'Italiana', serif;
  position:absolute;
  top:20px;
  right:10vw;
  font-size:1.5rem;
  padding:5px 10px 5px 10px;
  color:${props=>props.color};
  background-color:${props=>props.background};
  border:none;
`

const Img = styled.img`
  @media ${device.mobile} { 
    width: 400px;
  }
  @media ${device.laptop} { 
    width: 800px;
  }
`

const ButCont = styled.div`
  display: flex;
`


const SaveThePlate = ({
  background='black',
  overlay='black',
  title='SaveThePlate',
  Back=()=>{},
  NextArrow=()=>{}
}) => {

  const {theme, setTheme} = useTheme();
  const [on, setOn] = useState(true)
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const r = useRouter();

  return <Wrapper>
    <Cont background={themes[theme].body}>
        <Title color={content_themes[theme].color}>
          {title}
        </Title>
        <SubCont>
          <Left>
            <SubTitle color={content_themes[theme].color}>
            • Lead Developer and Designer for a fully functional mobile app <br></br>
            • Created digital solution to food waste while offering lower priced food to users<br></br>
            • Developed with React Native, PHP, MySQL, and Firebase<br></br><br></br>
            <ButCont>
              <Button
                onMouseOver={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} 
              target='_blank' href='https://github.com/eilidhma/save-the-plate' color={content_themes[theme].color} background={themes[theme].body}>
                Source Code
              </Button>
              <Button
                onClick={()=>r.push('./caseStudy')}
                onMouseOver={() => cursorChangeHandler("hovered")}
                onMouseLeave={() => cursorChangeHandler("")} 
                color={content_themes[theme].color} background={themes[theme].body}>
                Case Study
              </Button>
            </ButCont>
            </SubTitle>
            <Img src='savetheplate.png'/>
          </Left>
          <Right>
            <Gif>
              <SubTitle color={content_themes[theme].color}>Demo:</SubTitle>
              <img width={200} src='savetheplate.gif' />
            </Gif>
          </Right>
        </SubCont>
      </Cont>

  </Wrapper>
}

export default SaveThePlate;