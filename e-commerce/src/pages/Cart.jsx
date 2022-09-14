import * as  FaIcons  from 'react-icons/fa'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props=> props.type === 'filled' && 'none'};
    background-color: ${props => props.type === 'filled' ? '#ffaa00' : 'transparent'};
    color: ${props => props.type === 'filled' && 'black'};
`

const TopTexts = styled.div``

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;

`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Summary = styled.div`
    flex: 1;
    border: 1px solid #444;
    padding: 20px;
    background-color: #f4f4f4;
`

const Info = styled.div`
    flex: 3;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`
const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
    margin-top: 10px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ProductName = styled.span`
`
const ProductId = styled.span`
`

const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color:#${props => props.color};
`
const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`

const Hr = styled.div``

const SummaryTitle = styled.h1`
    margin-bottom: 10px;
`
const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
const SummaryItemText = styled.span`
    font-size: ${props => props.type === "total" ? "14px" : "20px"};
`
const SummaryItemPrice = styled.span`
    font-size: 18px;
    font-weight: 600;
    color: ${props => props.type === "discount" ? "red" : "black"};
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: #ffaa00;
    border: 1px solid #f4f4f4;
    border-radius: 5px;
    color: #f4f4f4;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }
`



const Cart = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <Title>Your Bag</Title>
            <Top>
                <TopButton>Continue Shopping</TopButton>
                <TopTexts>
                    <TopText>Shopping Bag(2)</TopText>
                    <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>Checkout Now</TopButton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?cs=srgb&dl=pexels-godisable-jacob-1394882.jpg&fm=jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Lebron James Shirt</ProductName>
                                <ProductId><b>ID:</b> 934593459345</ProductId>
                                <ProductColor color="444" />
                                <ProductSize><b>Size:</b>40.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <FaIcons.FaPlus/>
                                <ProductAmount>2</ProductAmount>
                                <FaIcons.FaMinus/>
                            </AmountContainer>
                            <ProductPrice>$45</ProductPrice>
                        </PriceDetail>
                    </Product>
                    <Hr />
                    <Product>
                        <ProductDetail>
                            <Image src="https://images.pexels.com/photos/1394882/pexels-photo-1394882.jpeg?cs=srgb&dl=pexels-godisable-jacob-1394882.jpg&fm=jpg" />
                            <Details>
                                <ProductName><b>Product:</b> Lebron James Shirt</ProductName>
                                <ProductId><b>ID:</b> 934593459345</ProductId>
                                <ProductColor color="444" />
                                <ProductSize><b>Size:</b>40.5</ProductSize>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <AmountContainer>
                                <FaIcons.FaPlus/>
                                <ProductAmount>2</ProductAmount>
                                <FaIcons.FaMinus/>
                            </AmountContainer>
                            <ProductPrice>$45</ProductPrice>
                        </PriceDetail>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>Your Order Summary</SummaryTitle>
                    <SummaryItem>
                        <SummaryItemText>Subtotal</SummaryItemText>
                        <SummaryItemPrice>$80</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Estimated Shipping</SummaryItemText>
                        <SummaryItemPrice>$5.0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText>Shipping Discount</SummaryItemText>
                        <SummaryItemPrice type="discount">-$5.0</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummaryItemText type="total">Total</SummaryItemText>
                        <SummaryItemPrice>$75</SummaryItemPrice>
                    </SummaryItem>
                    <Button>Check Out Now</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer />
    </Container>
  )
}

export default Cart