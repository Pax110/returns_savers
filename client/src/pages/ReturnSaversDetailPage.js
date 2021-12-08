import {useParams} from 'react-router-dom'
import ReturnSaversDetail from '../components/ReturnSaversDetail'

const ReturnSaversDetailPage = () => {
    let params = useParams()
  return (
    <div>
      <ReturnSaversDetail productReturnId={params.id} />
      
      
    </div>
  )
}

export default ReturnSaversDetailPage
