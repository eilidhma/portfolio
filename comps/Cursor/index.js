import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import useMousePosition from "../../utils/cursor";
import { MouseContext } from "../../utils/mousecontext";
import { device } from "../../utils/breakpoints";

const Cont = styled.div`
  @media ${device.mobile} { 
    display: none;
  }
  @media ${device.tablet} { 
    display: none;
  }
  @media ${device.laptop} { 
    display: inline-block;
  }
`

const Cursor = ({
  
}) => {
const {theme, setTheme} = useTheme();
const { x, y } = useMousePosition();
const { cursorType, cursorChangeHandler } = useContext(MouseContext);
const [show, setShow] = useState(false);

return <Cont
      className={"dot"}
      style={{ 
        left: `${x}px`, 
        top: `${y}px` , 
        backgroundColor:content_themes[theme].color,
      }}
    ></Cont>
};

export default Cursor;
