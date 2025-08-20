import { validate } from "@/lib/utils/parseData";
import { addPostSchema, type AddPostModalProps } from "@/types/post.types";
import { Form, Input, Modal } from "antd";
import FormItem from "antd/es/form/FormItem";

export const AddPostModal = ({
  isOpen,
  onClose,
  onSave,
}: AddPostModalProps) => {
  const [form] = Form.useForm();
  const handleOk = () => {
    form.validateFields().then((values) => {
      const data = validate(addPostSchema, values);
      onSave(data);
      form.resetFields();
      onClose();
    });
  };

  return (
    <div>
      <Modal
        title="Thêm mới bài viết"
        open={isOpen}
        onOk={handleOk}
        onCancel={onClose}
        okText="Thêm mới"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical">
          <FormItem
            label="Tiêu đề"
            name="title"
            rules={[{ required: true, message: "Nhập tiêu đề" }]}
          >
            <Input></Input>
          </FormItem>
          <FormItem
            label="Nội dung"
            name="body"
            rules={[{ required: true, message: "Nhập nội dung" }]}
          >
            <Input.TextArea rows={3}></Input.TextArea>
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
};
