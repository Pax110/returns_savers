import { useNavigate } from 'react-router'
//import {useEffect} from 'react'
import ReturnSaversList from '../components/ReturnSaversList'


const ReturnSaversListPage = () => {  

    let navigate = useNavigate()
    //Landing page to display while loading the application
    // const isLogin = false
    // useEffect(()=>{
    //   if(!isLogin){
    //     console.log('Redirecting when user not logged in')
    //     navigate('/login')
    //     return null
    //   }
    // },[])

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



