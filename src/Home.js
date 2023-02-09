import React from "react";
import { useState,useEffect } from "react";
import NavigationBar from "./NavigationBar";
import LandingPage from "./LandingPage";
import Objectives from "./Objectives";
import Plants from "./Plants";
import Footer from "./Footer";

export default function Home() {


    return (

        
        <>
        <NavigationBar />
        <LandingPage  />
        <Objectives />
        <Plants />
        <Footer />
        </>
        
            
        )





}