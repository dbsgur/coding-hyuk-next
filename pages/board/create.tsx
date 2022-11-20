import React, { useState, useRef } from "react";

function Create() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState({
    title: "",
    content: "",
  });

  const { title, content } = form;

  const onChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  const onClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(form);
    setForm({
      title: "",
      content: "",
    });
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  };
  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        onChange={onChange}
        value={title}
        name="title"
      />
      <textarea
        placeholder="내용을 입력하세요."
        name="content"
        value={content}
        onChange={onChange}
      />
      <input type="submit" value="부웅" />
    </form>
  );
}

export default Create;
