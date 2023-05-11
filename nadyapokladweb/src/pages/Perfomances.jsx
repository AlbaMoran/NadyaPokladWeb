import { Container, Row, Col } from 'react-bootstrap'
import { VideoYouTube } from '../components/VideoYouTube'
import '../../src/styles/App.css'
import useHookToRender from '../components/dashboard/FirebaseHooks/useHookToRender';

export function Perfomances() {

  const { performancesPost } = useHookToRender()

  return (
    <>
      <Container>
        <h4 className='title home-h5 mx-2'>Perfomances</h4><br />
      </Container>
      <Container>
        <Row>
          {
            performancesPost.map(item =>
              <Col key={item.id} className='video-item mb-5 '>
                <VideoYouTube
                  url={item.url}
                  title={item.title} />
              </Col>
            )
          }
        </Row>
      </Container>
    </>
  )
}
