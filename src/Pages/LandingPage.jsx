import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
    <Row className='d-flexx justify-content-center align-items-center mt-5 mb-5'>
      <Col lg={1}></Col>
      <Col lg={5}>
        <h3>Welcome to <span className='text-warning'>Media player</span></h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut dolores expedita non totam iste ducimus, repellendus deserunt ipsum adipisci corporis vitae asperiores deleniti aspernatur quisquam voluptatum necessitatibus quis soluta! Delectus!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis vel ipsum beatae ut neque exercitationem officiis magni quaerat. Nostrum obcaecati libero iusto asperiores eum eius, omnis accusamus quas aperiam ad.</p>

        <button onClick={()=>navigate('/home')} className='btn btn-warning mt-4'>Get started  <i class="fa-solid fa-arrow-right"></i></button>
      </Col>
      <Col lg={1}></Col>
      <Col lg={5}>
        <img src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="" />
      </Col>
    </Row>
      
      <div className='container d-flex justify-content-center align-items-center flex-column'>
         <h3>Features</h3>
         <div className='d-flex justify-content-center align-items-center'>
         <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Managing Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
      <Card.Body>
        <Card.Title className='text-center'>categorized Video</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='p-4 m-3' style={{ width: '22rem' }}>
      <Card.Img variant="top" style={{width:'100%',height:'300px'}} src="https://64.media.tumblr.com/6bb79faf55461ee01a87d5bedb9081f1/tumblr_onn734q6Rv1ue08b9o1_500.gif" />
      <Card.Body>
        <Card.Title className='text-center'>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>

         </div>
      </div>

      <Row className='mb-5 mt-5' >

<Col lg={1}></Col>

<Col lg={10} style={{ border: '1px solid white' }}>



<Row>

 <Col lg={6} className='p-5 '>

 <h3 style={{ color: 'orange', marginBottom: '20px' }}>Simple fast and powerfull</h3>

 <div>

 <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
  meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa magni esse, doloremque vero, a labore rem
  </h6>

 </div>


 <div>

  <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
  meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa magni esse, doloremque vero, a labore rem
  </h6>

  </div>


   <div>

    <h6 style={{ textAlign: 'justify', color: 'grey' }}> <span className='fw-bold fs-5' style={{ color: 'grey' }} >playeverything:</span>
     meLorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis nesciunt, culpa maxime qui nobis nihil voluptatum? Saepe molestiae, hic non culpa m
     </h6>

     </div>


    </Col>


    <Col lg={6} className='d-flex justify-content-center alighn-items-center   ' style={{ marginTop: '60px' }}>
    <iframe width="500" height="350" src="https://www.youtube.com/embed/gh3FyLT7WVg?si=KbEg-bMYCc2S0l4j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    
    </Col>

    </Row>


    </Col>


    <Col lg={1}></Col>


    </Row>
    </>
  )
}

export default LandingPage
