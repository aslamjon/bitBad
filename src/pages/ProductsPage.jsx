import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { ProductsCard } from '../components/Card'
import ApiServices from '../services/api/ApiServices'
import { Col, Row } from '../components/Grid';


const ProductsPage = () => {
    const [cards, setCards] = useState({data:[], next:'', count:0, isFitched:false})
    const [limitOffset, setLimitOffset] = useState({limit:10, offset:0})
    

    useEffect(() => {
        setCards({data:[], next:'', count:0, isFitched:true})
        ApiServices.getProducts(limitOffset).then(res => {
            console.log(res)
            
            setCards({data: res.data.results, next: res.data.next, count: res.data.count, isFitched:false})
        }).catch(e => {
            console.log(e)
            setCards({data:[], next:'', count:0, isFitched:false})
        })
    },[])
    const handlePageClick = (e) => {
        console.log(e)
        const {query:{limit, offset}} = queryString.parseUrl(cards.next)
        setLimitOffset({limit, offset})

    }
    return (
        <>
        <Row row>
            <Col sm={6} md={3} mt={15}>Tab</Col>
            {cards.data.map(({id, ...value}) => <Col sm={6} md={3} mt={15}><ProductsCard key={id} {...value} /></Col>)}
            
        </Row>
        
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={cards.count/5}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
        </>
    )
}

export default ProductsPage
