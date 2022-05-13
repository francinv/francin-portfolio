import React, { FC } from "react";
import style from "./CV.module.css";
import layoutStyle from "../../styles/layout.module.css";
import marginStyles from "../../styles/margin.module.css";
import paddingStyles from "../../styles/padding.module.css";
import Image from "next/image";
import contactJson from "../../assets/cvContent.json";
import commonStyles from "../../styles/common.module.css";
import Competence from "./Competence";

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

const ContactHeader = ({title}: {title: string}) => {return <p style={{fontWeight: 500}} className={marginStyles.mb_0}>{title}</p>}

const ContactInfo = ({ text }: { text: string }) => {return <p style={{wordWrap: 'break-word'}} className={marginStyles.m_0}>{text}</p>}

const ContentHeader = ({title}: {title: string}) => {
    return <h2 className={`${commonStyles.text_22} ${commonStyles.font_semibold}`} style={{borderBottom: '1px solid #141400'}}>{title}</h2>
}

const LeftContent: FC = () => {
    const competencies = contactJson.contact_info.competencies;

    return (
        <div
            className={`
                ${style.left_container}
                ${layoutStyle.flex_column}
                ${paddingStyles.px_70}
            `}
        >
            <div className={`${style.inner_container} ${marginStyles.my_auto}`}>
                <h2 style={{textAlign: 'center'}}>Francin Vincent</h2>
                <div className={`${marginStyles.my_auto} ${style.img_container}`}>
                    <Image alt="Profile picture" src="/dev_profile_pic.jpg" width={170} height={200} />
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
    const Typography15 = ({text}: {text: string}) => {return <p className={`${commonStyles.text_15} ${marginStyles.m_0}`} style={{lineHeight: '22px'}}>{text}</p>}
    const Typography18 = ({text}: {text: string}) => { return <p className={`${commonStyles.text_18} ${marginStyles.m_0}`} style={{lineHeight: '22px'}}>{text}</p> }
    const Typography18M = ({text}: {text: string}) => { return <p className={`${commonStyles.text_18} ${commonStyles.font_medium} ${marginStyles.m_0}`} style={{lineHeight: '22px'}}>{text}</p> }

    return (
        <div
            className={`
                ${style.right_container}
                ${paddingStyles.px_70}
            `}
        >
            <div className={`${style.right_inner_container} ${marginStyles.my_auto} ${layoutStyle.flex_column}`}>
                <div>
                    <ContentHeader title={'Summary'} />
                    <Typography18 text={contactJson.cv.summary} />
                </div>
                <div>
                    <ContentHeader title={'Experience'} />
                    {experiences.map((exp, index) => (
                        <div key={exp.company} className={layoutStyle.flex_row}>
                            <div className={style.exp_left}>
                                <Typography18M text={exp.position} />
                                <Typography18 text={exp.company} />
                                
                                <ul className={`${marginStyles.mb_10} ${marginStyles.mt_0}`}>
                                    {exp.work.map((work, index) => (
                                        <li key={index} className={`${commonStyles.text_18} ${marginStyles.m_0}`}>{work}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={style.exp_right}>
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