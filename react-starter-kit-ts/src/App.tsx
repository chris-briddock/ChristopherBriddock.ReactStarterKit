// import { useState } from 'react'
import Routing from './routes/Routing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <BrowserRouter>
      {/* <Header /> */}
        <Routes>
          {Routing.map(({ path, element }, key) => (
            <Route key={key} path={path} element={element} />
          ))}
        </Routes>
        {/* <Footer /> */}
        </BrowserRouter>
      </RecoilRoot>
  )
}

export default App
