import style from './Container.module.scss';
import Card from '../Card/Card';
import { useEffect } from 'react';

const Container = ({setSelect, info}) => {
    useEffect(() => {
        document.getElementById('card_0').classList.add('active');
    }, []);

    const clean = () => {
        document.getElementById('container').childNodes.forEach((el) => {
            el.childNodes[0].classList.remove("active");
        });
    }
    
    return(
        <div className={style.container} id="container">
            {info.map((data, id) => {
                return <Card setSelect={setSelect} key={"card_" + id} id={id} data={data} clean={clean}/>;
            })}
        </div>
    )
}

export default Container;