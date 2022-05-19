import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyle from "../../styles/layout.module.css";
import marginStyles from "../../styles/margin.module.css";
import paddingStyles from "../../styles/padding.module.css";
import Image from "next/image";
import contactJson from "../../assets/cvContent.json";
import commonStyles from "../../styles/common.module.css";
import Competence from "./Competence";
import { FETCH_PROFILE_PIC } from "../../services/dataQueries";
import { useQuery } from "@apollo/client";

const CVContent: FC = () => {
    return (
        <div
            className={`
                ${style.content_container}
                ${layoutStyle.flex_row}
                ${marginStyles.my_auto}
                ${marginStyles.mx_16}
            `}
        >
            <LeftContent />
            <RightContent />
        </div>
    )
}

const ContactHeader = ({title}: {title: string}) => {return <p className={`${marginStyles.mb_0} ${commonStyles.font_medium}`}>{title}</p>}

const ContactInfo = ({ text }: { text: string }) => {return <p style={{wordWrap: 'break-word'}} className={marginStyles.m_0}>{text}</p>}

const ContentHeader = ({title}: {title: string}) => {
    return <h2 style={{borderBottom: '1px solid #141400', fontSize: 22, fontWeight: 600}}>{title}</h2>
}

const LeftContent: FC = () => {
    const competencies = contactJson.contact_info.competencies;
    
    const Avatar = () => {
        const { loading, error, data } = useQuery(FETCH_PROFILE_PIC);
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error! error.message</p>;
        return <Image alt="Profile picture" src={data.viewer.avatarUrl} width={170} height={200} />
    }

    return (
        <div
            className={`
                ${style.left_container}
                ${layoutStyle.flex_column}
                ${paddingStyles.px_70}
            `}
        >
            <div className={`${style.left_inner} ${marginStyles.my_auto}`}>
                <h2 className={layoutStyle.text_center}>Francin Vincent</h2>
                <div className={`${marginStyles.my_auto} ${style.img_container}`}>
                    <Avatar />
                </div>
                <div className={`${marginStyles.mt_30}`}>
                    <h4 style={{borderBottom: '1px solid #141400'}} className={paddingStyles.pb_5}>Contact</h4>
                    <ContactHeader title={'Address:'} />
                    <ContactInfo text={contactJson.contact_info.address} />
                    <ContactInfo text={contactJson.contact_info.city} />
                    <ContactHeader title="Phone:" />
                    <ContactInfo text={contactJson.contact_info.phone} />
                    <ContactHeader title="Email:" />
                    <a href="mailto:francin.vinc@gmail.com">
                        <ContactInfo text={contactJson.contact_info.email} />
                    </a>
                    <ContactHeader title="LinkedIn:" />
                    <a href={contactJson.contact_info.linkedin} target="_blank" rel="noreferrer" >
                        <ContactInfo text={contactJson.contact_info.linkedin} />
                    </a>
                </div>
                <div className={`${marginStyles.mt_30}`}>
                    <h4 style={{borderBottom: '1px solid #141400'}} className={paddingStyles.pb_5}>Competence</h4>
                    {competencies.map((competence, index) => (
                        <Competence key={index} title={competence.name} value={competence.value} sizeOfArray={competencies.length} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const RightContent: FC = () => {
    const experiences = contactJson.cv.experience;
    const education = contactJson.cv.education;
    const Typography15 = ({text}: {text: string}) => {return <p className={`${marginStyles.m_0}`} style={{lineHeight: '22px', fontSize: '15px'}}>{text}</p>}
    const Typography18 = ({text}: {text: string}) => { return <p className={`${commonStyles.text_18} ${marginStyles.m_0}`} style={{lineHeight: '22px'}}>{text}</p> }
    const Typography18M = ({text}: {text: string}) => { return <p className={`${commonStyles.text_18} ${commonStyles.font_medium} ${marginStyles.m_0}`} style={{lineHeight: '22px'}}>{text}</p> }

    return (
        <div
            className={`
                ${style.right_container}
                ${paddingStyles.px_70}
            `}
        >
            <div className={`${style.right_inner} ${marginStyles.my_auto} ${layoutStyle.flex_column}`}>
                <div>
                    <ContentHeader title={'Summary'} />
                    <Typography18 text={contactJson.cv.summary} />
                </div>
                <div>
                    <ContentHeader title={'Experience'} />
                    {experiences.map(exp => (
                        <div key={exp.company} className={layoutStyle.flex_row}>
                            <div className={style.experience_left}>
                                <Typography18M text={exp.position} />
                                <Typography18 text={exp.company} />
                                
                                <ul>
                                    {exp.work.map((work, index) => (
                                        <li key={index} className={`${commonStyles.text_18} ${marginStyles.m_0}`}>{work}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.experience_right}>
                                <Typography15 text={exp.work_period} />
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <ContentHeader title={'Education'} />
                    {education.map((ed, index) => (
                        <div key={index} className={layoutStyle.flex_row}>
                            <div className={style.exp_left}>
                                <Typography18M text={ed.degree} />
                                <Typography18 text={ed.school} />
                            </div>
                            <div className={style.exp_right}>
                                <Typography15 text={ed.period} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CVContent;