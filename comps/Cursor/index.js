import React, { useEffect, useState, useRef, useContext } from "react";
import styled from "styled-components";
import { useTheme } from '../../utils/provider';
import { themes, content_themes } from '../../utils/variables';
import useMousePosition from "../../utils/cursor";
import { MouseContext } from "../../utils/mousecontext";


const Cursor = () => {
const {theme, setTheme} = useTheme();
const { x, y } = useMousePosition();
const { cursorType, cursorChangeHandler } = useContext(MouseContext);
const [show, setShow] = useState(false);

return <div
      className={"dot " + cursorType}
      style={{ 
        left: `${x}px`, 
        top: `${y}px` , 
        backgroundColor:content_themes[theme].color,
      }}
    ></div>
};

export default Cursor;
