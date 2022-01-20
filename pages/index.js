import React from "react";
import Loading from "../comps/Loading";
import NavBar from "../comps/NavBar";
import Intro from "../comps/Intro";
import Social from "../comps/Social";
import NavDots from "../comps/NavDots";
import Spinner from "../comps/Spinner";


export default function Home() {
  return (
    <div>
      <NavBar />
      <Loading />
      <Intro />
      <Social />
      <NavDots />
      <Spinner />
    </div>
  )
}
