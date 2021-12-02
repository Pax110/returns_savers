import { useNavigate } from 'react-router'
import ReturnSaversList from '../components/ReturnSaversList'

const ReturnSaversListPage = () => {

    let navigate = useNavigate()

    function setSelectedProductReturnId(id){
        navigate('/returnSavers/'+id)
    }
  return (
    <div>
      <ReturnSaversList setSelectedProductReturnId={setSelectedProductReturnId} />
    </div>
  )
}

export default ReturnSaversListPage
