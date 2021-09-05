import style from './Card.module.scss';

const Card = ({ setSelect, id, data, clean }) => {

    const select = () => {
        setSelect(id);
        clean();
        document.getElementById('card_' + id).classList.add('active');
    }

    return (
        <div className={style.container}>
            <div onClick={select} className={style.card} id={'card_' + id}>
                <div>
                    <div><img className={style.titleImg} src={process.env.PUBLIC_URL + '/img/' + data.img} alt="" /></div>
                </div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
            </div>
        </div>
    )
}

export default Card;