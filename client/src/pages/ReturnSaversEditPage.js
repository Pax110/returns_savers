import {useNavigate, useParams } from 'react-router'
import {useEffect, useState } from 'react'
import ReturnSaversEditForm from '../components/ReturnSaversEditForm'

const ReturnSaversEditPage = ({editButton}) => {

    let params = useParams()
    let navigate = useNavigate()
    let productReturnId = params.id
    console.log("editBtton",editButton)
    const [returns, setReturns] = useState('') 

    useEffect(()=>{
      const fetchReturns = async () => {
          let fetchResult = await fetch('/api/returnSavers/'+productReturnId) //619d2b43382f586cb987a3da
          let fetchedReturns = await fetchResult.json()
          console.log(fetchedReturns)
          setReturns(fetchedReturns)
      }
      fetchReturns()
    },[productReturnId])

    async function updateReturnSavers(updatedReturnProduct){
        console.log('Posting to returnsavers id', productReturnId, 'with data', updatedReturnProduct)
        fetch('/api/returnSavers/'+productReturnId, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedReturnProduct)
        })
        navigate(-1)
      }

  return (
    <div>
    <ReturnSaversEditForm existingValues={returns} onSave={updateReturnSavers}/>
    </div>
  )
}

export default ReturnSaversEditPage
