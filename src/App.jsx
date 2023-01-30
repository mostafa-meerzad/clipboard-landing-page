import React from 'react'
import Header from './components/Header';
import SnippetsTrack from './components/SnippetsTrack';
import ClipboardAccess from './components/ClipboardAccess';
import SupperChargeWorkflow from './components/SupperChargeWorkflow';
import Download from './components/Download';
import Footer from './components/Footer';

import "./styles.css"

const App = () => {
  return (
    <><Header/>
   <main>
   <SnippetsTrack/>
    <ClipboardAccess/>
    <SupperChargeWorkflow/>
    <Download/>
   </main>
    <Footer/>
   </>
  )
}

export default App