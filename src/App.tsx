import {Route, Routes} from "react-router-dom"
import React from "react";
import {Home} from "./components/pages/home/Home";
import {NotFoundPage} from "./components/pages/not-found-page/NotFoundPage";
import {Header} from "./components/Header";
import {Flex} from "./components/style/Flex";
import {TestScroll} from "./components/link/preventScrollReset/TestScroll";
import {ItemScroll} from "./components/link/preventScrollReset/ItemScroll";
import TestUseNavigate from "./components/use-navigate/TestUseNavigate";
import Book from "./components/use-navigate/Book";
import {TestUseLocation} from "./components/use-location/TestUseLocation";
import {Course} from "./components/use-location/Course";
import {TestUseSearchParam} from "./components/use-search-param/TestUseSearchParam";
import Card from "./components/use-search-param/Card";





function App() {
    return (
        <Flex dir='column'>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/scroll" element={<TestScroll/>}/>
                <Route path="/itemscroll" element={<ItemScroll/>}/>

                <Route path="/navigate" element={<TestUseNavigate/>}/>

                <Route path="/navigate/book/:id" element={<Book/>}/>
                <Route path="/uselocation" element={<TestUseLocation/>}/>
                <Route path="/uselocation/course/:id"  element={<Course/>}/>
                <Route path="/usesearchparam"  element={<TestUseSearchParam/>}/>
                <Route path="/usesearchparam/card/:id"  element={<Card/>}/>

                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </Flex>
    );
}

export default App;
