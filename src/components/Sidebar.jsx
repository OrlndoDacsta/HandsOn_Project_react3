const showSidebar = ({ handleSidebar }) => {
  return (
    <div>
      <button onClick={handleSidebar}>X</button>
      <p>home</p>
      <p>contact</p>
      <p>profile</p>
    </div>
  );
};

export default showSidebar;
