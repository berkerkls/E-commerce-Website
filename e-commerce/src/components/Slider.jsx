import styled from "styled-components"
import * as FaArrow from "react-icons/fa"
import { useState } from "react"
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width:100%;
    height:100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display:"none"})};
`

const Arrow = styled.div`
    width:50px;
    height: 50px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top:0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.4;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw); 
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: #${props=> props.bg};
`

const ImageContainer = styled.div`
    flex:1;
`

const InfoContainer = styled.div`
    flex:1;
    padding:50px;
`

const Image = styled.img`
    height:80%;
    width:70%;
`

const Title = styled.h1`
    font-size:70px;
`
const Desc = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight:500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    background-color: transparent;
    cursor: pointer;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex- 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
            <FaArrow.FaArrowLeft />
        </Arrow>
        <Wrapper slideIndex = {slideIndex}>

            {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
            </Slide>
            ))}
        </Wrapper>

        <Arrow direction="right"  onClick={() => handleClick("right")}>
            <FaArrow.FaArrowRight />
        </Arrow>
    </Container>
  )
}

export default Slider