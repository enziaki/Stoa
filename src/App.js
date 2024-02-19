import './App.css';
import GetMarkdownHeading from './components/GetMarkdownHeading';
import PostComponent from './components/PostComponent';
import SideBar from './components/SideBar';
import file from './Articles/Test.md'

function App() {
  return (
    <div className='ArticleClass'>
      {/* <SideBar /> */}
      <PostComponent />
      <GetMarkdownHeading MarkDown={file} />
    </div>
  );
}

export default App;
