import {useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import './ReturnSaversList.css'
// const ReturnSaversRow = ({ orderId, orderDate, productName, productPrice, soldBy, returnEligibility, onProductReturnSelected }) => (
//     <tr onClick={() => onProductReturnSelected()}>
//       <td>{orderId}</td>
//       <td>{orderDate}</td>
//       <td>{productName}</td>
//       <td>{productPrice}</td>
//       <td>{soldBy}</td>
//       <td>{returnEligibility}</td> 
//     </tr>
//   )    
  const ProductCardStyle = {
    
     
    
    margin: "10px",
    alignItems: "baseline"
    
  }

  

const ProductCard = ({ productName, orderDate, productPrice, onProductSelected,status,images }) => (
  <div onClick={()=>onProductSelected()}  style={ProductCardStyle} className="card"  >
    
  
  <div  className="card mb-3"  >
    <div className="row g-0">
      <div className="col-md-4">
        {console.log("image url",images[0])}

      <img src={images} className="img-fluid rounded-start" alt="..." />
      </div>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <h6>$ {productPrice}</h6>
        <div>{status}</div>
          <p className="card-text"><small className="text-muted">Purchase Date: {orderDate}</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
)


  const ReturnSaversList = ({setSelectedProductReturnId}) => {
    const [returnSavers, setReturnSavers] = useState([]) 
  useEffect(() => {
    async function fetchData() {
      console.log('Fetching return savers data!')
      let fetchResult = await fetch("/api/returnSavers")
      let returnSaversList = await fetchResult.json()
      console.log("fetch call result",returnSaversList)
      setReturnSavers(returnSaversList)
    }  
    fetchData()
  }, [])
  

    return(
      <div>
      <h2>Return Savers List</h2>
      {/* <Container fluid="sm">
      <Table className='contents' striped bordered hover size="sm" responsive="sm"> {/* style={{ margin: "auto" }} */}
        {/* <thead>
          <tr>
            <th>OrderId</th> 
            <th>OrderDate</th>          
            <th>ProductName</th>
            <th>ProductPrice</th>
            <th>SoldBy</th>
            <th>ReturnEligibility</th>
          </tr>
        </thead>
        <tbody>

          
          {
  
            returnSavers.map((returnproduct, index) => {
              function selectProductReturn(){
                console.log('selectProductReturn called on ', returnproduct)
                setSelectedProductReturnId(returnproduct._id)
              }
              return <ReturnSaversRow key={index} 
                    onProductReturnSelected={selectProductReturn}
                    orderId={returnproduct.orderId}
                    orderDate ={new Date(returnproduct.orderDate).toLocaleDateString('en-CA', {year : 'numeric', month: 'short', day: 'numeric'})}
                    productName={returnproduct.productName} 
                    productPrice={'$'+returnproduct.productPrice}  //.ToFixed(2) not worked in List
                    soldBy={returnproduct.soldBy}
                    returnEligibility={returnproduct.returnEligibility} />
            })           
            }
  
        </tbody>
      </Table>
      </Container> */} 



<Container fluid="lg">
<div className="card-group" >
        {
          returnSavers.map((product, index) => {
            function selectProduct(product){
              console.log("selected product called on", product)
              setSelectedProductReturnId(product._id)
            }
            
            return <ProductCard key={index}
            onProductSelected={()=>selectProduct(product)}
            
            
            images={product.imageUrl}
            
              // {...product.images.map((img,index)=>(
              //   <img key={index} image={img.url} />
              // ))}
              productName={product.productName}
              orderDate={product.orderDate}
              productPrice={product.productPrice}
              status={product.returnEligibility} />

          })
        }

      </div>
      </Container>
      </div>
    )
  }

  //
  export default ReturnSaversList
