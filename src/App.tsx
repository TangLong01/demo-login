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
        <Route path="/" element={<MainLayoutHome />}>
          <Route index element={<HomeWithAuth />} />
          <Route path="/todo-list/list" element={<TodoList />} />
          <Route
            path="/todo-list/unfinished-list"
            element={<UnfinishedList />}
          />
          <Route path="/todo-list/finished-list" element={<FinishedList />} />
        </Route>

        <Route path="/login" element={<MainLayoutAuth />}>
          <Route index element={<LoginNotWithAuth />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
