import React,{useState} from 'react';
import './App.css';

function App() {
  const [textInput, setTextInput] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

const handleChange = () => {
  if (textInput.trim()) {
    setAvatarUrl (`http://robohash.org/${encodeURIComponent(textInput)}.png`);
  } else {
    setAvatarUrl("");
  }
  
};

return (
  <div className="App">
    <h3 className="title">Avatar Name</h3>
    <header className="App-Header">
      <div>
        <input
          type="text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          placeholder="Masukkan Nama!"
          className="input-box"
        />
      </div>
      <div>
        <button onClick={handleChange} className="generate-btn">
          Buat Profil Picture!
        </button>
      </div>
      {avatarUrl && (
        <div>
          <img src={avatarUrl} alt="Wait..!" className="avatar-image" />
        </div>
      )}
    </header>
  </div>
);


}


export default App;
