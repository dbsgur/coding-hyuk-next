import React, { useState } from "react";

function Create() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("second");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const onClickSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`title : ${title}`);
    console.log(`content : ${content}`);
  };
  return (
    <form onSubmit={onClickSubmit}>
      <input
        type="text"
        placeholder="제목을 입력하세요."
        onChange={onChangeTitle}
        value={title}
      />
      <textarea
        placeholder="내용을 입력하세요."
        value={content}
        onChange={onChangeContent}
      />
      <input type="submit" value="부웅" />
    </form>
  );
}

export default Create;
