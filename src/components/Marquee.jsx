import React from "react";
import styled, { keyframes, css } from "styled-components";
import { certificationsOdd, certificationsEven } from "../constants";

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const MarqueeWrapper = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
    user-select: none;
    border-radius: 2rem;

    mask-image: linear-gradient(
        to right, 
        hsl(0 0% 0% / 0),
        hsl(0 0% 0% / 1) 10%,
        hsl(0 0% 0% / 1) 90%,
        hsl(0 0% 0% / 0)
    );
`;

const scrollX = keyframes`
    from {
        left: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`

const common = css`
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    white-space: nowrap;
    border-radius: 2rem;

    animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
    ${common};
`;

const MarqueeGroup2 = styled.div`
    ${common};
    animation-direction: reverse;
    animation-delay: -3s;
`;

const ImageGroup = styled.div`
    display: grid;
    place-items: center;
    width: clamp(10rem, 1rem + 40vmin, 30rem);
    padding: calc(clamp(10rem, 1 rem + 30vmin, 30rem) / 10);
`;

const Image = styled.img`
    object-fit: contain;
    width: 80%;
    height: 80%;
    aspect-ratio: 1/1
    border-radius: 2rem;
    padding: 5px 20px;
`;

const MarqueeComponent = () => {
    return (
        <motion.div variants={textVariant()}>
            <MarqueeWrapper>
                <MarqueeGroup>
                    {certificationsOdd.map((el, index) => (
                        <ImageGroup key={index}>
                            <Image src={el.icon} alt={`certification-${index}`} />
                        </ImageGroup>
                    ))}
                </MarqueeGroup>
                <MarqueeGroup>
                    {certificationsOdd.map((el, index) => (
                        <ImageGroup key={index}>
                            <Image src={el.icon} alt={`certification-${index}`} />
                        </ImageGroup>
                    ))}
                </MarqueeGroup>
            </MarqueeWrapper>

            <MarqueeWrapper>
                <MarqueeGroup2>
                    {certificationsEven.map((el, index) => (
                        <ImageGroup key={index}>
                            <Image src={el.icon} alt={`certification-${index}`} />
                        </ImageGroup>
                    ))}
                </MarqueeGroup2>
                <MarqueeGroup2>
                    {certificationsEven.map((el, index) => (
                        <ImageGroup key={index}>
                            <Image src={el.icon} alt={`certification-${index}`} />
                        </ImageGroup>
                    ))}
                </MarqueeGroup2>
            </MarqueeWrapper>
        </motion.div>
    );
};

export default MarqueeComponent;
