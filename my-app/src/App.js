import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home.js';
import Footer from './Footer.js';
import AboutUsPage from './AboutUsPage.js';
// import Login from './Login.js';
import Contactus from './contactus.js';
import Bproducts from './bproducts.js';
import Shredderproducts from './shredderproducts.js';
import Tyrecutting from './tyrecutting.js';
import Tyrefolding from './Tyrefolding.js';
import Baler from './Baler.js';
import Plasticbalers from './Plasticbaler.js';
import Cbpsb from './Card board and paper scrap balers.js';
import Metalbalers from './Metalbalers.js';
import Tyreshredder from './Tyreshredder.js';
import Metalshredder from './Metalshredder.js';
import Plasticshredder from './plasticshredder.js';
import Paperandcardboardshredder from './paperandcardboardshredder.js';
import Sht2000 from './sht2000.js';
import Sht4000 from './Sht4000.js';
import Sht8000 from './Sht8000.js';
import Blt200 from './Blt200.js';
import Blt250 from './Blt250.js';
import Blt150 from './Blt150.js';
import Tcpcr100 from './Tcpcr100.js';
import Tcotr100 from './Tcotr100.js';
import Tctb100 from './Tctb100.js';
import Tftbr100 from './Tftbr100.js';
import Tfpcr100 from './Tfpcr100.js';
import Login from './Login.js';
import Trade from './Tradefair.js';
import Ourproducts from './Ourproducts.js';

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <div>
                  <Routes>
                      <Route exact path="/" element={<Home />} />
                      <Route path="/AboutUsPage" element={<AboutUsPage />} /> 
                      
                      <Route path="/contact" element={<Contactus />} />
                      <Route path="/Login" element={<Login />} />
                      <Route path='/bproducts' element ={<Bproducts/>}/>
                      <Route path='/shredderproducts' element={<Shredderproducts/>}/>
                      <Route path="/Tyre cutting" element={<Tyrecutting />} />
                      <Route path="/Tyre Folding" element={<Tyrefolding />} />
                      <Route path="/Baler" element={<Baler />} />
                      <Route path='/Plasticbalers' element={<Plasticbalers/>}/>
                      <Route path='/cbpsb' element={<Cbpsb/>}/>
                      <Route path='/metalbalers' element={<Metalbalers/>}/>
                      <Route path='/tyreshredder' element={<Tyreshredder/>}/>
                      <Route path='/metalshredder' element={<Metalshredder/>}/>
                      <Route path='/plasticshredder' element={<Plasticshredder/>}/>
                      <Route path='/paperandcardboardshredder' element={<Paperandcardboardshredder/>}/>
                      <Route path="/Sht2000" element={<Sht2000 />} />
                      <Route path="/Sht4000" element={<Sht4000 />} />


                      <Route path="/Blt150" element={<Blt150 />} />
                        <Route path="/Blt200" element={<Blt200 />} />
                          <Route path="/Blt250" element={< Blt250/>} />
                          <Route path="/Sht8000" element={<Sht8000/>} />
                                  <Route path="/Tfpcr100" element={<Tfpcr100 />} />
                                    <Route path="/Tftbr100" element={<Tftbr100 />} />
                                      <Route path="/Tcpcr100" element={<Tcpcr100 />} />
                                        <Route path="/Tctb100" element={<Tctb100 />} />
                                          <Route path="/Tcotr100" element={<Tcotr100 />} />
                                          <Route path="/Trade" element={<Trade />} />
                                          <Route path="/ourproducts" element={< Ourproducts/>} />
                  </Routes>
              </div>
             <Footer/>
              
          </div>
      </Router>
  );
}

export default App;