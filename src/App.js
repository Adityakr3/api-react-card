import React from "react";
import "./App.css";
import { ApiData } from "./pages/ApiData";
import { InfiniteScroll } from "./pages/InfiniteScroll";
import { ExcelFilePage } from "./pages/ExcelFilePage";
import { Task } from "./pages/Task";
import { Card } from "./pages/Card";
import { Image } from "./pages/Image";
import { Nav } from "./pages/Nav";
import { MultistepForm } from "./pages/MultiStepForm";
import { Throttle } from "./pages/Throttle";
import { Accordion } from "./pages/Accordion";
import { Counter } from "./pages/Counter";
import { BackgroundChange } from "./pages/BackgroundChange";
import { Crud } from "./pages/Crud";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Task1 } from "./pages/Task1";
import { Form } from "./pages/Form";
import { TodoList } from "./pages/TodoList";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="Nav">
        <NavLink to="/todo">TodoList</NavLink>
         <NavLink to="/form">Form</NavLink>
         <NavLink to="/task1">Task</NavLink>
          <NavLink to="/crud">Crud</NavLink>
          <NavLink to="/browserRouter">Background Change</NavLink>
          <NavLink to="/">Counter</NavLink>
          <NavLink to="/image">Image Tiles</NavLink>
          <NavLink to="/multistepform">MultiStepForm</NavLink>
          <NavLink to="/throttle">Throttle/Debounce</NavLink>
          <NavLink to="/card">Card</NavLink>
          <NavLink to="/nav">Nav</NavLink>
          <NavLink to="/accordion">Accordion</NavLink>
          <NavLink to="/task">Task</NavLink>
          <NavLink to="/ApiData">Data</NavLink>
          <NavLink to="/InfiniteScroll">InfiniteScroll</NavLink>
          <NavLink to="/excel-file">ExcelFilePage</NavLink>
        </div>
        <Routes>
        <Route path="/todo" element={<TodoList/>} />
        <Route path="/form" element={<Form/>} />
          <Route path="/task1" element={<Task1/>} />
          <Route path="/multistepform" element={<MultistepForm />} />
          <Route path="/crud" element={<Crud/>} />
          <Route path="/browserRouter" element={<BackgroundChange />} />
          <Route path="/" element={<Counter />} />
          <Route path="/image" element={<Image />} />
          <Route path="/throttle" element={<Throttle />} />
          <Route path="/card" element={<Card />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/task" element={<Task />} />
          <Route path="/excel-file" element={<ExcelFilePage />} />
          <Route path="/ApiData" element={<ApiData />}></Route>
          <Route path="/InfiniteScroll" element={<InfiniteScroll />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
