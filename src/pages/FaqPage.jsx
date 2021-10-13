import React, {useState, useEffect} from 'react';
import Collapse from '../components/Collapse';
import Empty from '../components/Empty';
import { Col, Row } from '../components/Grid';
import ApiServices from '../services/api/ApiServices';

const FaqPage = () => {
    const [faqs, setFaqs] = useState({data:[], isFetched: false})
    useEffect(() => {
        setFaqs({data:[], isFetched: true})
        ApiServices.getFaqs().then(res => setFaqs({data: res.data.results, isFetched: false})).catch(e => setFaqs({data:[], isFetched: false}))
    },[])
    return (
        <>
        <Row row>
            {faqs.data.length ? <Col sm={12} md={6}>
                <Collapse title={"lorem"} body={'sdlfsdlf lskdjfls dfls lskdjf sdklfks'} />
            </Col> : <Empty title="ma'lumot mavjud emas"/> }
        </Row>
        </>
    )
}

export default FaqPage;
