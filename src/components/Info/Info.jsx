import { useEffect } from 'react';
import style from './Info.module.scss';

const Info = ({ selectCard, info }) => {
    const data = info[selectCard];

    useEffect(() => {
        const sliderLine = document.getElementById('slider_line');
        const images = document.querySelectorAll('#slider #slider_line img');
        let count = 0;
        let width;
        sliderLine.style.transform = 'translate(0px)';

        const rollSlider = (count) => {
            sliderLine.style.transform = 'translate(-' + count * width + 'px)';
        }

        const init = () => {
            width = document.getElementById('slider').offsetWidth;
            sliderLine.style.width = width * data.sliderImg.length + 'px';
            images.forEach((el) => {
                el.style.width = width + 'px';
            });
            rollSlider(count);
        }

        init();
        window.addEventListener('resize', init);

        document.getElementById('btn_next').addEventListener('click', () => {
            count++;
            if (count >= data.sliderImg.length) {
                count = 0;
            }
            rollSlider(count);
        });

        document.getElementById('btn_back').addEventListener('click', () => {
            count--;
            if (count < 0) {
                count = data.sliderImg.length - 1;
            }
            rollSlider(count);
        })

        return () => {
            window.removeEventListener('resize', init);
        }

    }, [selectCard, data.sliderImg.length])

    return (
        <div className={style.info}>
            <div className={style.slider} id="slider">
                <div className={style.slider_line} id="slider_line">
                    {
                        data.sliderImg.map((el, id) => {
                            return <img className={style.slider_img} key={'img_' + id} src={process.env.PUBLIC_URL + '/img/' + el} alt="" />;
                        })
                    }
                </div>
                <div className={style.slider_btn}>
                    <div id="btn_back" className={`${style.slider_btn_all} ${style.slider_btn_left}`}></div>
                    <div id="btn_next" className={`${style.slider_btn_all} ${style.slider_btn_right}`}></div>
                </div>
            </div>
            <div className={style.content}>
                <h1 className={style.title}>{data.name}</h1>
                <p className={style.description}>{data.description}</p>
                <h2>Технологии:</h2>
                <ul>
                    {
                        data.tech.map((el, id) => {
                            return <li key={'unit_' + id}>{el}</li>
                        })
                    }
                </ul>
                <div className={style.link}>
                    <a className={style.link_site} href={data.href}>Перейти на сайт</a>
                    <a className={style.link_git} href={data.gitHub}>Перейти на GitHub проекта</a>
                </div>
            </div>
        </div>
    )
}

export default Info;