import { LoginNotWithAuth } from "components/auth/Login";
import FinishedList from "components/todo-list/FinishedList";
import { HomeWithAuth } from "components/home/Home";
import TodoList from "components/todo-list/TodoList";
import UnfinishedList from "components/todo-list/UnfinishedList";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayoutHome from "layouts/MainLayoutHome";
import MainLayoutAuth from "layouts/MainLayoutAuth";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/*"
          element={
            <MainLayoutHome>
              <Routes>
                <Route index element={<HomeWithAuth />} />
              </Routes>
            </MainLayoutHome>
          }
        />

        <Route
          path="/todo-list/*"
          element={
            <MainLayoutHome>
              <Routes>
                <Route path="/list" element={<TodoList />} />
                <Route path="/unfinished-list" element={<UnfinishedList />} />
                <Route path="/finished-list" element={<FinishedList />} />
              </Routes>
            </MainLayoutHome>
          }
        />

        <Route
          path="/login/*"
          element={
            <MainLayoutAuth>
              <Routes>
                <Route index element={<LoginNotWithAuth />} />
              </Routes>
            </MainLayoutAuth>
          }
        />

        {/* <Route path="/login" element={<LoginNotWithAuth />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
