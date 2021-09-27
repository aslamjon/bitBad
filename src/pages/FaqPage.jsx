import React from 'react';
import Collapse from '../components/Collapse';
import { Col, Row } from '../components/Grid';

const FaqPage = () => {
    return (
        <>
        <Row row>
            <Col sm={12} md={6}>
                <Collapse title={"lorem"} body={'sdlfsdlf lskdjfls dfls lskdjf sdklfks'} />
            </Col>
            <Col sm={12} md={6}>
                <Collapse title={"lorem"} body={'sdlfsdlf lskdjfls dfls lskdjf sdklfks'} />
            </Col>
        </Row>
        </>
    )
}

export default FaqPage;
