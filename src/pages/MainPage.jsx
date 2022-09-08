import React from 'react';
import './MainPage.css';
import animationData from '../lotties/red-heart-growing.json';
import Lottie from 'react-lottie';
import { Button, Card, CardBody, CardText, CardTitle, Input, ListGroup } from 'reactstrap';
import { decrypt, encrypt } from '../util/Secret';

export const MainPage = ({ setOpen }) => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    const handleInput = (e) => {
        const key = e.target.value;
        console.log("dec", decrypt(e.target.value, "skate"));
    }

    return (
        <Card
            className='my-2'
            color="info"
            inverse
        >
            <div className="typewriter mt-2">
                <CardTitle tag={"h1"}>
                    Катюша, с первым месяцем!
                </CardTitle>
            </div>
            <Lottie
                options={defaultOptions}
                width={300}
            />
            <Input onChange={handleInput} />
            <CardBody>
                <CardText>
                    В 6 часов 7 числа 8 месяца мы стретились с тобой, что это как не джекпот?
                </CardText>
                <ListGroup>
                    <li>Я благодарен за то, что ты появилась в моей жизни</li>
                    <li>Я благодарен тебе за то, что доверилась и пошла делать бэкап</li>
                </ListGroup>
                <br />
                <CardText>
                    Вот уже бэкап за месяц можно делать, ведь столько событий произошло.
                    Котенька, ягодка, половничек, королева ты у меня самая красивая, нежная, заботливая, творческая.
                </CardText>
                <ListGroup>
                    <li>Я очень ценю, что ты видишь себя живой со мной через 5 лет</li>
                    <li>Я очень ценю, что тебе со мной ты чувствуешь себя комфортно и безопасно</li>
                </ListGroup>
                <br />
                <CardText>
                    P.S. В этот раз дарю тебе цифровые цветы, потому что настоящие я хочу вручить тебе лично.
                    <br />P.S.S. Выздоравливай скорее, Котенька! &#128315;
                </CardText>
                <Button color="primary" outline onClick={() => setOpen(false)}>
                    Свернуть конверт
                </Button>
            </CardBody>
        </Card>
    )
}