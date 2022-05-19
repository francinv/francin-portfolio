import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { RepositoryType } from "../../typings/commonTypes";
import layoutStyles from "../../styles/layout.module.css";
import style from "./Finder.module.css";
import paddingStyles from "../../styles/padding.module.css";
import buttonStyle from "../Button/Button.module.css";
import marginStyles from "../../styles/margin.module.css";
import colorStyle from "../../styles/colors.module.css";
import commonStyle from "../../styles/common.module.css";
import Image from "next/image";
import { FolderIcon } from "../Icons/Folder";
import { PortfolioContext } from "../../features/AppContext";
import Loading from "../common/Loading/Loading";

interface ButtonProps {
    repo: RepositoryType;
    setSelectedRepo: Dispatch<SetStateAction<RepositoryType | undefined>>;
}

const GalleryButton: FC<ButtonProps> = ({repo, setSelectedRepo}) => {

    const handleClick = () => {
        setSelectedRepo(repo);
    }

    return (
        <button className={`${buttonStyle.btn_remove_style}`} onClick={handleClick}>
            <FolderIcon height={"50"} />
        </button>
    );
};

const GalleryView: FC = () => {
    const { filteredRepositories } = useContext(PortfolioContext);
    const [selectedRepo, setSelectedRepo] = useState<RepositoryType>();

    useEffect(() => {
        if (filteredRepositories.length > 0 && !selectedRepo) {
            setSelectedRepo(filteredRepositories[0]);
        }
        
    }, [filteredRepositories, selectedRepo]);

    const getIsSelectedStyling = (repo: RepositoryType) => {
        let styles = `${paddingStyles.p_5} ${style.btn_container} ${layoutStyles.flex_row} ${layoutStyles.center_all}`
        return repo === selectedRepo ? styles + ` ${style.btn_selected}` : styles;
    }

    interface InformationProps {
        label: string;
        text: string | number;
    }

    const InformationContainer: FC<InformationProps> = ({label, text}) => {
        return (
            <div className={`${layoutStyles.flex_row} ${style.info_container} ${paddingStyles.px_8}`}>
                <p className={`${colorStyle.text_gray} ${commonStyle.text_14}`} style={{width: '30%'}}>{label}</p>
                <p className={`${colorStyle.text_white} ${commonStyle.text_14} ${marginStyles.ml_6}`} style={{width: '70%'}}>{text}</p>
            </div>
        )
    }

    if (selectedRepo) {
        return (
            <div className={`${layoutStyles.flex_row} ${paddingStyles.pt_5}`} style={{height: '100%'}}>
                <div className={`${style.left_gallery_content} ${layoutStyles.flex_col}`}>
                    <div className={`${style.gallery_img_container} ${paddingStyles.px_50} ${layoutStyles.flex_row} ${layoutStyles.center_all}`}>
                        <div className={`${style.inner_img}`}>
                            <a href={selectedRepo.url} target="_blank" rel="noreferrer">
                                <Image
                                src={selectedRepo.openGraphImageUrl}
                                alt={selectedRepo.name}
                                layout="fill"
                                />
                            </a>
                        </div>
                    </div>
                    <div className={`${layoutStyles.flex_row} ${paddingStyles.py_16} ${paddingStyles.px_8} ${layoutStyles.items_center}`} style={{overflowY: "hidden", overflowX: 'scroll'}}>
                        {filteredRepositories.map((repo, index) => (
                            <div key={index} className={getIsSelectedStyling(repo)}>
                                <GalleryButton repo={repo} setSelectedRepo={setSelectedRepo} />
                            </div>
                        ))}
                    </div>

                </div>
                <div className={`${style.right_gallery_content} ${layoutStyles.flex_col}`}>
                    <div className={`${style.desc_container} ${marginStyles.mx_32} ${marginStyles.my_auto}`}>
                        <a href={selectedRepo.url} target="_blank" rel="noreferrer" className={`${layoutStyles.flex_row} ${layoutStyles.items_center} ${marginStyles.ml_8}`}>
                            <FolderIcon height="50" />
                            <h4 className={`${colorStyle.text_white}`}>{selectedRepo?.name}</h4>
                        </a>
                    </div>
                    <div className={`${style.desc_container} ${marginStyles.mx_16} ${layoutStyles.flex_col} ${marginStyles.my_auto}`} style={{overflowY: 'scroll'}}>
                        <h4 className={`${colorStyle.text_white} ${marginStyles.mt_5}`}>Information</h4>
                        <InformationContainer label="Description:" text={selectedRepo.description} />
                        <InformationContainer label="Issues:" text={selectedRepo.issues.totalCount} />
                        <InformationContainer label="Languages:" text={selectedRepo.languages.nodes.map(lang => lang.name).join(', ')} />
                        <InformationContainer label="Pull request:" text={selectedRepo.pullRequests.totalCount} />
                        {
                            selectedRepo.deployments.nodes[0] === undefined ? null :
                            <InformationContainer label="Deployed status:" text={selectedRepo.deployments.nodes[0].latestStatus.state} />
                        }
                    </div>
                </div>
            </div>
        )
    } else {
        return <Loading />
    }
};

export default GalleryView;