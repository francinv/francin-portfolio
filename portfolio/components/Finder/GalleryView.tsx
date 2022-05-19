import React, { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import layoutStyles from "../../styles/layout.module.css";
import style from "./Finder.module.css";
import paddingStyles from "../../styles/padding.module.css";
import buttonStyle from "../Button/Button.module.css";
import marginStyles from "../../styles/margin.module.css";
import commonStyle from "../../styles/common.module.css";
import Image from "next/image";
import { FolderIcon } from "../Icons/Folder";
import { PortfolioContext } from "../../features/AppContext";
import Loading from "../common/Loading/Loading";
import { repositoriesType } from "../../typings/repoTypes";

interface ButtonProps {
    repo: repositoriesType;
    setSelectedRepo: Dispatch<SetStateAction<repositoriesType | undefined>>;
}

const GalleryButton: FC<ButtonProps> = ({repo, setSelectedRepo}) => {

    const handleClick = () => {
        setSelectedRepo(repo);
    }

    return (
        <button className={`${buttonStyle.btn_custom}`} onClick={handleClick}>
            <FolderIcon height={"50"} />
        </button>
    );
};

const GalleryView: FC = () => {
    const { filteredRepositories } = useContext(PortfolioContext);
    const [selectedRepo, setSelectedRepo] = useState<repositoriesType>();

    useEffect(() => {
        if (filteredRepositories.length > 0 && !selectedRepo) {
            setSelectedRepo(filteredRepositories[0]);
        }
        
    }, [filteredRepositories, selectedRepo]);

    const getIsSelectedStyling = (repo: repositoriesType) => {
        let styles = `${paddingStyles.p_5} ${style.btn_container} ${layoutStyles.flex_row} ${layoutStyles.center_all}`
        return repo === selectedRepo ? styles + ` ${style.selected}` : styles;
    }

    interface InformationProps {
        label: string;
        text: string | number;
    }

    const InformationContainer: FC<InformationProps> = ({label, text}) => {
        return (
            <div className={`${layoutStyles.flex_row} ${style.information_container} ${paddingStyles.px_8}`}>
                <p 
                    className={`${commonStyle.text_14}`} style={{width: '30%', color: '#908E90'}}>{label}</p>
                <p className={commonStyle.text_14} style={{width: '70%', marginLeft: '6px'}}>{text}</p>
            </div>
        )
    }

    if (selectedRepo) {
        return (
            <div className={`${layoutStyles.flex_row} ${paddingStyles.pt_5}`} style={{height: '100%'}}>
                <div className={`${style.left_content} ${layoutStyles.flex_col}`}>
                    <div className={`${style.repo_img_container} ${paddingStyles.px_50} ${layoutStyles.flex_row} ${layoutStyles.center_all}`}>
                        <div className={`${style.repo_img_inner}`}>
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
                <div className={`${style.right_content} ${layoutStyles.flex_col}`}>
                    <div className={`${style.description_container} ${marginStyles.mx_32} ${marginStyles.my_auto}`}>
                        <a href={selectedRepo.url} target="_blank" rel="noreferrer" className={`${layoutStyles.flex_row} ${layoutStyles.items_center} ${marginStyles.ml_8}`}>
                            <FolderIcon height="50" />
                            <h4>{selectedRepo?.name}</h4>
                        </a>
                    </div>
                    <div className={`${style.description_container} ${marginStyles.mx_16} ${layoutStyles.flex_col} ${marginStyles.my_auto}`} style={{overflowY: 'scroll'}}>
                        <h4 className={`${marginStyles.mt_5}`}>Information</h4>
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