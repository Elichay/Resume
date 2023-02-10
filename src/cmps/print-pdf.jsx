
import { FaFilePdf } from 'react-icons/fa'

export function PrintPdf() {
  return (
    <h2>
      <span> Download PDF: </span>
    <a href="/pdf/Elichay.pdf" download style={{ color: "inherit", textDecoration: "none" }}>
    <span className="pdf-icon"><FaFilePdf/></span>
    </a>
    </h2>
  )
}