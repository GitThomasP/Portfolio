import "./Header.css";

export default function Header() {
  return (
    <header>
      <div className='header-container section-container'>
        <div>
          <p className='title-text'>Hi! I am,</p>
          <h1>Thomas Baaré</h1>
          <h2 className="title-handle">Aspiring Front-End Developer</h2>
          <p className="anchor-text">Welcome to my portfolio!</p>
          <button type='button' className='btn btn-outline git-btn'>
            <a href='https://github.com/GitThomasP' target='_blank'>
              {" "}
              <i className='bi bi-github'></i> Github{" "}
            </a>
          </button>
        </div>
      </div>
    </header>
  );
}
