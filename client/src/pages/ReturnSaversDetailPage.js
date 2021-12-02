import {useParams, Link} from 'react-router-dom'
import ReturnSaversDetail from '../components/ReturnSaversDetail'

const ReturnSaversDetailPage = () => {
    let params = useParams()
  return (
    <div>
      <ReturnSaversDetail productReturnId={params.id} />
      <Link to="edit">Edit</Link>
    </div>
  )
}

export default ReturnSaversDetailPage
