import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginNotWithAuth } from "./components/auth/Login";
import { HomeWithAuth } from "./components/home/Home";
import MainLayout from "./layouts/MainLayout";
import TodoList from "./components/home/TodoList";
import UnfinishedList from "./components/home/UnfinishedList";
import FinishedList from "./components/home/FinishedList";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayout>
              <Routes>
                <Route index element={<HomeWithAuth />} />
              </Routes>
            </MainLayout>
          }
        />

        <Route
          path="/todo-list/*"
          element={
            <MainLayout>
              <Routes>
                <Route path="/list" element={<TodoList />} />
                <Route path="/unfinished-list" element={<UnfinishedList />} />
                <Route path="/finished-list" element={<FinishedList />} />
              </Routes>
            </MainLayout>
          }
        />

        <Route path="/login" element={<LoginNotWithAuth />} />
      </Routes>
    </Router>
  );
};

export default App;
