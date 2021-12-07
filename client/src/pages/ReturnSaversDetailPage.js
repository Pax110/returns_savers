import {useParams, Link} from 'react-router-dom'
import ReturnSaversDetail from '../components/ReturnSaversDetail'
import PdfGenerate from '../components/pdfGenerate'

const ReturnSaversDetailPage = () => {
    let params = useParams()
  return (
    <div>
      <ReturnSaversDetail productReturnId={params.id} />
      <Link to="edit">Edit</Link>
      <PdfGenerate />
    </div>
  )
}

export default ReturnSaversDetailPage
