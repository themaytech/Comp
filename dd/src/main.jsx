import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import uploadFile from './fileupload.jsx'
import Upload from './component/fille.jsx'
import DataFetchingComponent from './component/fetchCom.jsx'
import UploadComponent from './component/test.jsx'
import VideoUp from './component/video.jsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <DataFetchingComponent></DataFetchingComponent> */}
    {/* <Upload/> */}
    <VideoUp/>
  </StrictMode>,
)


