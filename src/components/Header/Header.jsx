import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <div className='text-container'>
          <p className='title-text'>Hi! I am,</p>
          <h1>Thomas Baaré</h1>
          <p>Welcome to my portfolio!</p>
          <button type='button' className='btn btn-outline git-btn'>
            <a href='https://github.com/GitThomasP' target='_blank'>
              {" "}
              <i class='bi bi-github'></i> Github{" "}
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
