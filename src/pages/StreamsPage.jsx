import React from 'react'
import { StreamsCard } from '../components/Card'
import Empty from '../components/Empty'
import { Col, Row } from '../components/Grid'

const Streams = () => {
    const temp = {title:'sdfsdfs', des: 'sdfsdf', url: 'sdfsdfs'}
    return (
        <>
            <Row row mt={15} ml={-15}>
                <Col sm={12} md={4}>
                    <StreamsCard {...temp} />
                </Col>
            </Row> 
            <Empty />
        </>
    )
}

export default Streams
