import React, {useState, useEffect} from 'react'
import { StreamsCard } from '../components/Card'
import Empty from '../components/Empty'
import { Col, Row } from '../components/Grid'
import ApiServices from '../services/api/ApiServices'

const Streams = () => {
    const temp = {title:'sdfsdfs', des: 'sdfsdf', url: 'sdfsdfs'}
    const [flows, setFlows] = useState({data:[], isFetched: false});
    useEffect(() => {
        setFlows({data: [], isFetched: true})
        ApiServices.getFlows().then(res => {
            setFlows({data: res.data.results, isFetched: false})
            return res
        }).catch(e => setFlows({data: [], isFetched: false}))
    },[])
    
    return (
        <>
            <Row row mt={15} ml={-15}>
                {flows.data.length ? flows.data.map((value) => 
                    <Col sm={12} md={4}>
                        <StreamsCard {...temp} />
                    </Col>) :<Empty />}
            </Row>
        </>
    )
}

export default Streams
