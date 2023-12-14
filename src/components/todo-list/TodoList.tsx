import { Button, Checkbox, Input, Modal, Popconfirm, Table } from "antd";
import Search from "antd/es/input/Search";
import React, { ReactNode, useState } from "react";
import useTodoList from "utils/todoList";
import type { ColumnsType } from "antd/es/table";
import editIcon from "images/edit.png";
import deleteIcon from "images/delete.png";

const TodoList: React.FC = () => {
  const { todoList, setTodoList } = useTodoList();

  const [newWork, setNewWork] = useState("");
  const [edit, setEdit] = useState({ index: 0, name: "", done: false });

  const handleAdd = (workName: string) => {
    setTodoList([
      ...todoList,
      { index: todoList.length + 1, name: workName, done: false },
    ]);
    setNewWork("");
  };

  const handleEdit = () => {
    const cloneTodoList = [...todoList];
    cloneTodoList[edit.index - 1] = edit;
    console.log(cloneTodoList);
    setTodoList(cloneTodoList);
    setEdit({ index: 0, name: "", done: false });
  };

  const handleDelete = (index: number) => {
    const cloneTodoList = [...todoList];
    cloneTodoList.splice(index - 1, 1);
    cloneTodoList.sort((a, b) => a.index - b.index);
    let nextIndex = 1;
    cloneTodoList.forEach((item) => {
      item.index = nextIndex;
      nextIndex++;
    });
    setTodoList(cloneTodoList);
  };

  interface DataType {
    name: string;
    index: number;
    done: boolean;
  }

  const columns: ColumnsType<DataType> = [
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
      dataIndex: "done",
      width: 120,
      render: (done: boolean, record: DataType) => (
        <div className="flex justify-center items-center">
          <Checkbox
            checked={done}
            onChange={() => {
              const cloneTodoList = [...todoList];
              const workChangeStatus = cloneTodoList.find(
                (item) => item.index === record.index
              );
              workChangeStatus.done = !workChangeStatus.done;
              setTodoList(cloneTodoList);
            }}
          />
        </div>
      ),
    },
    {
      title: <div className="flex justify-center">Thao tác</div>,
      width: 120,
      render: (done: boolean, record: DataType) => (
        <div className="flex justify-center items-center gap-x-4">
          <img
            src={editIcon}
            alt=""
            className="w-5 h-5 cursor-pointer"
            onClick={() =>
              setEdit({
                index: record.index,
                name: record.name,
                done: record.done,
              })
            }
          />
          <Popconfirm
            title="Xoá công việc"
            description="Bạn có chắc chắn muốn xoá công việc này?"
            onConfirm={() => handleDelete(record.index)}
            cancelButtonProps={{ className: "cancelButton" }}
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

  return (
    <div className="flex flex-col items-center">
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

      <div>
        <Table
          bordered={true}
          className="mt-4"
          dataSource={todoList}
          columns={columns}
          locale={{ emptyText: "Chưa có dữ liệu" }}
          pagination={{
            pageSize: 5,
          }}
        />
      </div>

      <Modal
        title="Sửa công việc"
        open={edit.index !== 0}
        onOk={handleEdit}
        onCancel={() => {
          setEdit({ index: 0, name: "", done: false });
          console.log(edit);
        }}
        cancelButtonProps={{ className: "cancelButton" }}
        cancelText="Huỷ"
        okText="OK"
        okType="default"
      >
        <Input
          placeholder="Nhập tên công việc mới"
          className="font-medium h-12"
          value={edit.name}
          onChange={(e) => setEdit({ ...edit, name: e.target.value })}
        />
        <div className="flex gap-x-2 mt-2 font-medium">
          <span>Hoàn thành</span>
          <Checkbox
            checked={edit.done}
            onChange={() => setEdit({ ...edit, done: !edit.done })}
          />
        </div>
      </Modal>
    </div>
  );
};

export default TodoList;
