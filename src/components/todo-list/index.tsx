import { Button, Checkbox, Popconfirm, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import deleteIcon from "images/delete.png";
import editIcon from "images/edit.png";
import React, { useEffect, useState } from "react";
import useTodoList from "utils/todoList";
import AddWork from "./AddWork";
import ModalEditWork from "./ModalEditWork";
import { TodoListType } from "interfaces/totoList";

const TodoList: React.FC = () => {
  const { todoList, setTodoList } = useTodoList();

  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [dataRender, setDataRender] = useState<any[]>(todoList);
  const [edit, setEdit] = useState<TodoListType>({
    index: 0,
    name: "",
    status: false,
  });

  const columns: ColumnsType<TodoListType> = [
    {
      title: <div className="flex justify-center">STT</div>,
      dataIndex: "index",
      width: 50,
      render: (text: any, record: any, index: number) => index + 1,
    },
    {
      title: <div className="flex justify-center">Tên</div>,
      dataIndex: "name",
      width: 250,
    },
    {
      title: <div className="flex justify-center">Hoàn thành</div>,
      dataIndex: "status",
      width: 120,
      render: (status: boolean, record: TodoListType) => (
        <div className="flex justify-center items-center">
          <Checkbox
            checked={status}
            onChange={() => {
              const cloneTodoList = [...todoList];
              const workChangeStatus = cloneTodoList.find(
                (item) => item.index === record.index
              );
              workChangeStatus.status = !workChangeStatus.status;
              setTodoList(cloneTodoList);
              setDataRender(cloneTodoList);
            }}
          />
        </div>
      ),
    },
    {
      title: <div className="flex justify-center">Thao tác</div>,
      width: 120,
      render: (status: boolean, record: TodoListType) => (
        <div className="flex justify-center items-center gap-x-4">
          <img
            src={editIcon}
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={() => {
              setEdit(record);
            }}
          />

          <Popconfirm
            title="Xoá công việc"
            description="Bạn có chắc chắn muốn xoá công việc này?"
            onConfirm={() => handleDelete(record.index)}
            cancelButtonProps={{ className: "grayButton" }}
            cancelText="Huỷ"
            okText="OK"
            okType="default"
          >
            <img src={deleteIcon} alt="" className="w-5 h-5 cursor-pointer" />
          </Popconfirm>
        </div>
      ),
    },
  ];

  const handleDelete = (index: number) => {
    const cloneTodoList = [...todoList];
    cloneTodoList.splice(index - 1, 1);
    setTodoList(cloneTodoList);
    setDataRender(cloneTodoList);
  };

  useEffect(() => {
    let cloneTodoList = [...todoList];

    for (let i = 0; i < cloneTodoList.length - 1; i++) {
      if (cloneTodoList[i].index !== i + 1) {
        cloneTodoList.sort((a, b) => a.index - b.index);
        let nextIndex = 1;
        cloneTodoList.forEach((item) => {
          item.index = nextIndex;
          nextIndex++;
        });
        setTodoList(cloneTodoList);
      }
    }

    switch (filterStatus) {
      case "all":
        setDataRender(todoList);
        break;
      case "finished":
        cloneTodoList = todoList.filter((item) => item.status === true);
        setDataRender(cloneTodoList);
        break;
      case "unfinished":
        cloneTodoList = todoList.filter((item) => item.status === false);
        setDataRender(cloneTodoList);
        break;
    }

    setDataRender(cloneTodoList);
  }, [todoList, filterStatus]);

  return (
    <div className="flex flex-col items-center">
      <AddWork setDataRender={setDataRender} />

      <div className="flex justify-center items-center mt-4 gap-x-4">
        <Button
          className="redButton"
          onClick={() => {
            setFilterStatus("all");
          }}
        >
          Tất cả công việc
        </Button>
        <Button
          className="redButton"
          onClick={() => {
            setFilterStatus("finished");
          }}
        >
          Đã hoàn thành
        </Button>
        <Button
          className="redButton"
          onClick={() => {
            setFilterStatus("unfinished");
          }}
        >
          Chưa hoàn thành
        </Button>
      </div>

      <Table
        bordered={true}
        className="mt-4"
        dataSource={dataRender}
        columns={columns}
        locale={{ emptyText: "Chưa có dữ liệu" }}
        pagination={{
          pageSize: 5,
        }}
      />

      <ModalEditWork
        edit={edit}
        setEdit={setEdit}
        setDataRender={setDataRender}
      />
    </div>
  );
};

export default TodoList;
