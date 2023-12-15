import { Checkbox, Input, Modal } from "antd";
import React from "react";
import useTodoList from "utils/todoList";
import { TodoListType } from "interfaces/totoList";

interface ModalEditWorkProps {
  edit: TodoListType;
  setEdit: React.Dispatch<React.SetStateAction<TodoListType>>;
  setDataRender: React.Dispatch<React.SetStateAction<any[]>>;
}

const ModalEditWork: React.FC<ModalEditWorkProps> = ({
  edit,
  setEdit,
  setDataRender,
}) => {
  const { todoList, setTodoList } = useTodoList();

  const handleEdit = () => {
    const cloneTodoList = [...todoList];
    cloneTodoList[edit.index - 1] = edit;
    setTodoList(cloneTodoList);
    setDataRender(cloneTodoList);
    setEdit({ index: 0, name: "", status: false });
  };

  return (
    <Modal
      title="Sửa công việc"
      open={edit.index !== 0}
      onOk={handleEdit}
      onCancel={() => {
        setEdit({ index: 0, name: "", status: false });
      }}
      cancelButtonProps={{ className: "grayButton" }}
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
          checked={edit.status}
          onChange={() => setEdit({ ...edit, status: !edit.status })}
        />
      </div>
    </Modal>
  );
};

export default ModalEditWork;
