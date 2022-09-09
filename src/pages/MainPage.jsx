import React, { useState } from 'react';
import './MainPage.css';
import animationData from '../lotties/red-heart-growing.json';
import Lottie from 'react-lottie';
import { Button, Card, CardBody, CardText, CardTitle, Input, ListGroup } from 'reactstrap';
import { decrypt } from '../util/Secret';

const defaultContent = {
    "CardTitle": "U2FsdGVkX1+Zv1O8nGShyiM6yCKds5C34aUXHPkydJyKzEMdrFVCxytGAQWLrJO607VZdWvVg8GFgXomK2A77w==",
    "CardText": "U2FsdGVkX1/MfiPjvcn0CuNGfSHIA7PnbMRvqqIi1md1Od48STeQlgZ95Z3GuVvgzhSMWL8JeBP3Q7RB03t1GEnI32OeACKusb1CGVlhOmGFv0c22VSav4fN5Nm2zisRuRyYYUN/wFrgGzqO+w/B0lP3EdvjKHOhzKDo46Jb7mcsY/6Tg44S6q0Lzs8Irj8Z",
    "List": [
        "U2FsdGVkX19QYUrYm+oAFducT0BkUhTuDLqbyeW9iHngwx6VsToKnlq7q6kMM1ks3IX/K9gpr9RNWMMl1S2ci8aXjMTJ+tBoeO/LCFy/ZVBWFku9ixq4DgDpoE/n6m1K55B78gD/h33ftCokB5vXhw==",
        "U2FsdGVkX19bCT45muTaFCR7cB1/76bBZv16PRD4N7nmQcGQev/dXr+lSfA1DpuZSoD8jCr8Nrc4bMdd8yauTNLdb3OCBPCl1Clu/bpiZFof9Y+wiZ+5a2aG2yK3CLxZBIyKjHt5mQUI6Lrcpz2LvJ4Q9Bls0Tbr5aJFzONRmtI="
    ],
    "CardTextSecond": "U2FsdGVkX1+glFyPPnC+Sd2PkpH2gQ9jWwpAauuDNvs2TGTZwUfgSPIPxw18p1KGJ6h8OSEu3UuDlL8XcE773Pvba2tc7I4i/ir5+jyKAntEludYjgsYZgGtVUuyqvPuKGm4GFm3TpA8pi4sMZLq7F4wRnXuiB+gBUyzXYSO0n4Nz+hzb6atgwFZYyaQqxRsfDviQRMOVawufhKb/HNgk2e8q4CenrdSovtsZEBRATfOmwPWKs1W5b3eH9gNKTMBOytZNhiZZtgxLzukZJn+M7oU5hVNEp4rzIz6itlmtyt3gf5SWvo3oajaEOhViZW0gFtEwthdOYt/SCTsYIMrQEmGxfTrEN5ikdhMqjkHDEZsrhunYme+39WrxrtC131zlPz/Yg840iH3YcHHlVak8lWivFAsdKACtxIHTB22MR8=",
    "ListSecond": [
        "U2FsdGVkX19KveiIqDFZzhe3I4Mauhv9beJyGgVPRuZ1ihdYFAAHhz838CTVw4NUKxR0ozksbc0wEMGJqxNWjOi0Db96Ye+K768Au3kAdg6DCLrbnxwirK1iggvLsQ2O0F76g4mHGD/F5qpBztfHSAGWHEhM0hodNhM/DP2JCTc=",
        "U2FsdGVkX1/Lzl/KuBIyotf4T+3Mx1201ypa1tRcosqwEcJJqFf2DParlkYc0e5aUHF2J1Q2mt999FwOfJiV6JIv7NgJlVUi76pkObl4GH2YP/tHcawpkMx0TYb5Az47dCamH/MvKa62JJA+yH34p29ydz7hnypxbXVB5G3/ClGwczOie8vp4PdgVbw2VCNW75CUnLYBdz2uZ+rRJAGG1g=="
    ],
    "ListThird": [
        "U2FsdGVkX19IRmOzvXp09zs/MUQQJ3k6hwZkimx7RFBM8P9OUGKS75dfOj5RyFguypk2/kOt55u7YMUzFplbR1CVoTec4zNXP+ipwpOOUZWOUj9f24D3yw0oDTPWpjSg9NnZQfrgkHr/fZ0jY+nuk7sKin1gqQZvQsHCJeIjOUdCAQn60/g1bN6o4VnZKa7/EF0lvUlKy+0SgHs63xy2DxbkSpAdu2HjyFP+VfWUC/U=",
        "U2FsdGVkX19Y1fZXbpECmVnUCt30ZCuiWkJyQkX6cwcE7uSXkwryrUc5/NLseAlzDLDR0RYbq9AUb4SqHI/SdGE1nAMoBt/fl5ADxL2ZiT50Pv5l6pkyjXxlpBRpyX76"
    ],
}

export const MainPage = ({ setOpen }) => {
    const [content, setContent] = useState(defaultContent);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleInput = (e) => {
        const secretkey = e.target.value;

        let check = decrypt(defaultContent.CardTitle, secretkey)

        if (!check) {
            setContent(defaultContent)
            return
        }

        let decryptedContent = {};

        for (let key in defaultContent) {
            if (Array.isArray(defaultContent[key])) {
                decryptedContent[key] = defaultContent[key].map((val) => decrypt(val, secretkey))
            } else {
                decryptedContent[key] = decrypt(defaultContent[key], secretkey)
            }
        }

        setContent(decryptedContent);
    }

    return (
        <Card
            className='my-2'
            color="info"
            inverse
        >
            <div className="typewriter mt-2">
                <CardTitle tag={"h1"}>
                    {content.CardTitle}
                </CardTitle>
            </div>
            <Lottie
                options={defaultOptions}
                width={300}
            />
            <Input onChange={handleInput} type={"password"} />
            <CardBody>
                <CardText>
                    {content.CardText}
                </CardText>
                <ListGroup>
                    <li>{content.List[0]}</li>
                    <li>{content.List[1]}</li>
                </ListGroup>
                <br />
                <CardText>
                    {content.CardTextSecond}
                </CardText>
                <ListGroup>
                    <li>{content.ListSecond[0]}</li>
                    <li>{content.ListSecond[1]}</li>
                </ListGroup>
                <br />
                <CardText>
                    {content.ListThird[0]}
                    <br />{content.ListThird[1]} &#128315;
                </CardText>
                <Button color="primary" outline onClick={() => setOpen(false)}>
                    Свернуть конверт
                </Button>
            </CardBody>
        </Card>
    )
}