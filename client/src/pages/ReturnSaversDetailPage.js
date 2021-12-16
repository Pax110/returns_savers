import {useParams} from 'react-router-dom'
import ReturnSaversDetail from '../components/ReturnSaversDetail'

const ReturnSaversDetailPage = ({firstname,lastname,address,city,province,postalCode}) => {
    let params = useParams()
  return (
    <div>
      <ReturnSaversDetail productReturnId={params.id} address={address} lastname={lastname} firstname={firstname} city={city} province={province} postalCode={postalCode}/>
      
      
    </div>
  )
}

export default ReturnSaversDetailPage
