import {useNavigate } from 'react-router-dom'
import ReturnSaversEditForm from '../components/ReturnSaversEditForm'

const CreateReturnSaversPage = () => {

    let navigate = useNavigate()

    async function createReturnSavers(newReturnProduct){   
        fetch('/api/returnSavers', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReturnProduct)
        })
        navigate('/')
  }

  return (
    <div>
      <ReturnSaversEditForm onSave={createReturnSavers} />
    </div>
  )
}

export default CreateReturnSaversPage