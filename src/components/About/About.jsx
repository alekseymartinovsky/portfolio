import data from '../../about.json';
import style from './About.module.scss';

const About = () => {
    return (
        <div className={style.about}>
            <div className={style.container}>
                <div className={style.container_content}>
                    <div className={style.name_block}>
                        <h1 className={style.fio}>{data.name}</h1>
                        <div><img className={style.avatar} src={process.env.PUBLIC_URL + '/img/' + data.avatar} alt="" /></div>
                    </div>

                    <h2 className={style.title}>Личная информация:</h2>

                        <div>
                            <div className={style.personal_block}>
                                <div className={style.personal_title}>Место проживания: </div>
                                <div className={style.personal_content}>{data.location}</div>
                            </div>
                            <div className={style.personal_block}>
                                <div className={style.personal_title}>Образование:</div>
                                <div className={style.personal_content}>{data.education}</div>
                            </div>
                            <div className={style.personal_block}>
                                <div className={style.personal_title}>E-mail: </div>
                                <div className={style.personal_content}><a href={'mailto:' + data.emailLink}>{data.email}</a></div>
                            </div>
                            <div className={style.personal_block}>
                                <div className={style.personal_title}>GitHub: </div>
                                <div className={style.personal_content}><a href={data.githubLink}>перейти на gitHub</a></div>
                            </div>
                            <div className={style.personal_block}>
                                <div className={style.personal_title}>CV: </div>
                                <div className={style.personal_content}><a href={data.cv}>посмотреть CV</a></div>
                            </div>
                        </div>

                    <h2 className={style.title}>Технологии и библиотеки:</h2>
                    <ul>
                        {
                            data.tech.map((el, id) => {
                                return <li key={'tech_' + id}>{el}</li>;
                            })
                        }
                        <li>И другие...</li>
                    </ul>

                    <div className={style.expiriens}>
                        <h2 className={style.title}>Опыт работы:</h2>
                        <div className={style.content}>{data.expiriens}</div>
                    </div>

                    <div className={style.additional}>
                        <h2 className={style.title}>Дополнительная информация:</h2>
                        <div className={style.content}>{data.addInfo}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;   