import { AiOutlineConsoleSql } from "react-icons/ai"
import styled from "styled-components"
import Announcement from "../components/Announcement"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import NewsLetter from "../components/NewsLetter"
import * as FaIcons from "react-icons/fa"

const Container = styled.div`

` 

const Wrapper = styled.div`
    display: flex;
    padding: 20px;
`

const ImageContainer = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc= styled.p`
    margin: 20px 0px;;
`

const Price= styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    display: flex;
`

const Filter = styled.div`
    flex: 1;
    display: flex;
`

const FilterTitle = styled.p`
    font-size: 20px;
    margin-top: 10px;
    font-weight: 200;
`

const FilterColor= styled.span`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    margin-top: 10px;
    background-color: ${props=> props.color};
    margin-left: 5px;
    border: 1px solid #f4f4f4;
    opacity: 0.5;
    cursor: pointer;
    transition: all 0.5s ease;


    &:hover {
        opacity: 1;
    }
`

const FilterSelect= styled.select`
    margin-left: 5px;
    height: 70%;
    margin-top: 8px;
    padding: 5px 10px;
    &:focus,
    &:hover {
        outline: 0;
    }
`

const FilterOption = styled.option``

const AddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`

const AmountContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border: 1px solid aliceblue;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    font-weight: 600;
`

const Button = styled.button`
    padding: 5px 10px; 
    border: 1px solid #f4f4f4;
    background-color: #ffaa00;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.5;
    }
`
const Product = () => {
  return (
    <Container>
        <Announcement />
        <Navbar />
        <Wrapper>
            <ImageContainer>
                <Image src="https://images.pexels.com/photos/1094684/pexels-photo-1094684.jpeg?cs=srgb&dl=pexels-mentatdgt-1094684.jpg&fm=jpg"/>
            </ImageContainer>
            <InfoContainer>
                <Title>Red Dress</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae error saepe sapiente, temporibus perferendis id sit, ut, odit suscipit laboriosam at sequi explicabo natus expedita! Magnam a maiores nesciunt assumenda ullam modi nobis id labore, vero eveniet impedit maxime nam commodi harum laboriosam dolorem soluta. Ratione, quam libero! Unde, temporibus.</Desc>
                <Price>$30</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        <FilterColor color="black" />
                        <FilterColor color="red" />
                        <FilterColor color="blue" />
                    </Filter>
                    <Filter>
                        <FilterTitle>Size:</FilterTitle>
                        <FilterSelect>
                            <FilterOption>XS</FilterOption>
                            <FilterOption>S</FilterOption>
                            <FilterOption>M</FilterOption>
                            <FilterOption>L</FilterOption>
                            <FilterOption>XL</FilterOption>
                        </FilterSelect>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <FaIcons.FaMinusSquare />
                        <Amount>1</Amount>
                        <FaIcons.FaPlusSquare />
                    </AmountContainer>
                    <Button>Add to Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Footer />
    </Container>
  )
}

export default Product