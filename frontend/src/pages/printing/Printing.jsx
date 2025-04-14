import React from "react";
import "./Printing.scss";
import PrintIcon from "@mui/icons-material/Print";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
// import CircleIcon from "@mui/icons-material/Circle";
import "@cyntler/react-doc-viewer/dist/index.css";
import { useNavigate , useParams} from "react-router-dom";
import { useState } from "react";
const Printing = () => {
  const navigate = useNavigate();
  const {id} = useParams()
  const [selectedDocs, setSelectedDocs] = useState([])
  const [field, setField] = useState({
    printerId:id,
    doubleSide:false,
    pagePrinted:"",
    pageSize:4,
    numCopy:1
  })
  const setFieldValue = ({target:{name,value}}) =>{
     setField(prev =>({
        ...prev,
        [name]:value
     }))
  }
  const handlePrinting = () =>{
    const formData = new FormData()
    formData.append('file', selectedDocs[0]);
    formData.append('printerId',field.printerId)
    formData.append('doubleSide',field.doubleSide)
    formData.append('pageSize',field.pageSize)
    formData.append('numCopy',field.numCopy)
    formData.append('pagePrinted',field.pagePrinted)
    fetch("http://localhost:5050/api/logs",{
      method:'POST',
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body:formData
    })
    .then(res=>res.json())
    .then(()=>navigate("/history"))
    .catch(err=>console.log(err))
  }
  return (
    <div className="printing">
       {/* <KeyboardReturnIcon
          className="returnIcon"
          onClick={() => navigate(`/printerInfo/${id}`)}
        /> */}
      {/* <div className="printerInfoHeader">
       
        <div className="printerReady">
          <PrintIcon />
          <div className="printerName">
            <h1>Canon M10</h1>
            <div className="printerStatus">
              <CircleIcon />
              <span>Sẵn sàng</span>
            </div>
          </div>
        </div>
        <h1 className="BKSmart">BKSmart</h1>
      </div> */}
      <div className="wrapper">
      <div className="preview">
      <input
        type="file"
        name="file"
        accept=".pdf"
        onChange={(el) =>
          el.target.files?.length &&
          setSelectedDocs(Array.from(el.target.files))
        }  
      />
      <DocViewer
        documents={selectedDocs.map((file) => ({
          uri: window.URL.createObjectURL(file),
          fileName: file.name,
        }))}
        config={{
          header: {
            disableHeader: false,
            disableFileName: true,
            retainURLParams: true,
          },
          csvDelimiter: ",", // "," as default,
          pdfZoom: {
            defaultZoom: 0.6, // 1 as default,
            zoomJump: 0.2, // 0.1 as default,
          },
          pdfVerticalScrollByDefault: false,
          pdfPageMode:'single' ,// false as default
          disableDownload:true
        }}
        pluginRenderers={DocViewerRenderers}
      />
      </div>
      <div className="printing-service">
        {/* File Upload Section */}
        {/* <section className="file-upload">
          <h2>Upload File</h2>
          <input type="file" accept=".pdf,.png,.jpg" />
          <p className="hint">Accepted formats: PDF, PNG, JPEG</p>
          <button className="preview-btn">Preview File</button>
        </section> */}
        {/* Print Specifications Section */}
        <section className="print-settings">
          <h2>Print Settings</h2>
          <div className="setting">
            <label>Page Size:</label>
            <select name="pageSize" onChange={setFieldValue}>
              <option value={4}>A4</option>
              <option value={3}>A3</option>
              <option value={2}>A2</option>
              <option value={1}>A1</option>
              <option value={0}>A0</option>
            </select>
          </div>
          <div className="setting">
            <label>Pages to be printed: </label>
            <label >{"(Defaut is all of pages if you don't specify)"}</label>
            <input name="pagePrinted" type="text" min="1" placeholder="Enter Pages to be printed" onChange={setFieldValue} />
          </div>
          <div className="setting">
            <label>Double-Sided:</label>
            <input type="checkbox" name="doubleSide" value={true} onChange={setFieldValue}/>
          </div>
          <div className="setting">
            <label>Number of Copies:</label>
            <input type="number" min="1" placeholder="Enter number of copies" name="numCopy"onChange={setFieldValue}/>
          </div>
        </section>

        {/* Footer Actions */}
        <footer>

          <button style={{display:'flex', justifyContent:'center' , alignItems:'center', gap:'10px'}}
            onClick={handlePrinting}
          >
              <PrintIcon/>
              Print
          </button>
          {/* <button>Cancel</button> */}
        </footer>
        </div>
      </div>
    </div>
  );
};

export default Printing;
