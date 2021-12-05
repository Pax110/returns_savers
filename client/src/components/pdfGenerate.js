import React from 'react'
import jsPDF from 'jspdf'
import {Button} from 'reactstrap'

const pdfGenerate = () =>{

const pdf = () => {

  var doc = new jsPDF('landscape','px','a4','false')
  
  doc.text(266,50,'Shipping Label')
  doc.text(66,80,'Sender:')
  doc.text(66,100,'Name: John')
  doc.text(66,120,'Adress: 123 street 1st ave Calgary, AB T1T 1T1')
  
  doc.text(66,160,'Receiver:')
  doc.text(66,180,'Name: Harry')
  doc.text(66,200,'Adress: 789 street 8th ave Calgary, AB T1T 1T1')
  doc.save()

}

return (
  <div className="App">
    <p>Item is ready to return!</p>
    <p>Please print and attach the shipping label on the package</p>
    <Button onClick={pdf}>Download Shipping Label</Button>
  </div>
      )

}
export default pdfGenerate
