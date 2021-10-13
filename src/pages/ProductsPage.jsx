import React, {useState, useEffect} from 'react'
import queryString from 'query-string';
import ReactPaginate from 'react-paginate';
import { ProductsCard } from '../components/Card'
import ApiServices from '../services/api/ApiServices'
import { Col, Row } from '../components/Grid';
import Loader from '../components/Loader';
import Title from '../components/Title';
import { ProductsPageStyled } from './styleOfPages/ProductsPageStyle';

const ProductsPage = () => {
    const [cards, setCards] = useState({data:[], next:'', count:0, isFitched:false})
    const [limitOffset, setLimitOffset] = useState({limit:10, offset:0})
    

    useEffect(() => {
        setCards({data:[], next:'', count:0, isFitched:true})
        ApiServices.getProducts(limitOffset).then(res => {
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
        setCards({data:[], next:'', count:0, isFitched:true})
        ApiServices.getProducts(limitOffset).then(res => {
            setCards({data: res.data.results, next: res.data.next, count: res.data.count, isFitched:false})
        }).catch(e => {
            console.log(e)
            setCards({data:[], next:'', count:0, isFitched:false})
        })
    }
    const handleTabClick = (id) => {
        setCards({data:[], next:'', count:0, isFitched:true})
        if (id === 0) ApiServices.getProducts({}).then(res => {
            setCards({data: res.data.results, next: res.data.next, count: res.data.count, isFitched:false})
        }).catch(e => setCards({data:[], next:'', count:0, isFitched:false})) 
        else ApiServices.getProductsByCategoryId(id).then(res => setCards({data: res.data.results, next: res.data.next, count: res.data.count, isFitched:false}))
        .catch(e => setCards({data:[], next:'', count:0, isFitched:false}))
    }
    return (
        <ProductsPageStyled>
        <Row row>
            <Col sm={6} md={3} mt={15}>
                <div className="products_tab">
                    <ul>
                        <li >KATEGORIYALAR</li>
                        <li onClick={() => handleTabClick(0)} >Barchasi</li>
                        <li onClick={() => handleTabClick(2)} >Maishiy texnikalar</li>
                        <li onClick={() => handleTabClick(1)} >Bad mahsulotlari</li>
                        <li onClick={() => handleTabClick(3)} >Aqlli texnikalar</li>
                        <li onClick={() => handleTabClick(4)} >Oshxona jihozlari</li>
                    </ul>
                </div>
            </Col>
            { cards.isFitched ? <Loader loading={cards.isFitched.toString()} /> 
            : cards.data.map(({id, ...value}) => <Col key={id} sm={6} md={3} mt={15}><ProductsCard {...value} /></Col>)}
            
        </Row>
        
        <ReactPaginate
            previousLabel={'previous'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={cards.count/10}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
        />
        </ProductsPageStyled>
    )
}

export default ProductsPage
