import { Button } from "antd";
import Search from "antd/es/input/Search";
import React, { useState } from "react";
import useTodoList from "utils/todoList";

const AddWork: React.FC<any> = ({ setDataRender }) => {
  const { todoList, setTodoList } = useTodoList();
  const [newWork, setNewWork] = useState("");

  const handleAdd = (workName: string) => {
    const cloneTodoList = [...todoList];
    cloneTodoList.unshift({
      index: todoList.length + 1,
      name: workName,
      status: false,
    });
    setTodoList(cloneTodoList);
    setDataRender(cloneTodoList);
    setNewWork("");
  };

  return (
    <div className="font-medium max-w-[400px] w-[100%]">
      <Search
        placeholder="Nhập tên công việc"
        allowClear
        enterButton={
          <Button htmlType="submit" className="h-12">
            Thêm
          </Button>
        }
        value={newWork}
        size="large"
        onSearch={(value) => handleAdd(value)}
        onChange={(e) => setNewWork(e.target.value)}
      />
    </div>
  );
};

export default AddWork;
