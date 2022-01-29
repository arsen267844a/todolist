export const ToDoListPage = () => {
  const list = [1, 2, 3];

  return (
    <div style={{ width: "600px" }}>
      <div>
        <input />
        <button>ADD</button>
      </div>
      <div>
        {list.map((item, index) => (
          <div
            key={index}
            style={{ border: "1px solid green", display: "flex" }}
          >
            <input type={"checkbox"} />
            <p>{item}</p>
            <div style={{}}>
              <span>edit</span>
              <span>del</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
