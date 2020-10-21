import React, {useState, useContext, useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import NewsContext from '../../contexts/news/newsContext';


const SingleNews = props => {
    const newsContext = useContext(NewsContext);
    const { singleNews, clearSingle } = newsContext;

    const [modalShow, setModalShow] = useState(false);
    const onHide = () => {
        setModalShow(false);
        clearSingle()
    }

    useEffect(() => {
        if (singleNews) {
            setModalShow(true)
        }
        //eslint-disable-next-line
    },[singleNews])

    return (
        <Modal
            show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
            <p style={{fontSize:"80%"}}>{singleNews && singleNews[0].title}</p>
            <p style={{fontSize:"60%"}}>{singleNews && singleNews[0].description}</p>
            </Modal.Title>
        </Modal.Header>
            <Modal.Body>
                <img src={singleNews && singleNews[0].urlToImage} alt='img' style={{width:'auto', height:'200px'}} />
                <p>{singleNews && singleNews[0].content }</p>
        </Modal.Body>
            <Modal.Footer>
                <p style={{ fontSize: "80%" }}>
                    <strong>Written by: </strong>
                    <em>{singleNews && singleNews[0].author}</em>
                </p>
            <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    )
}

export default SingleNews
