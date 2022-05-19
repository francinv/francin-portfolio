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

/**
 * Create simple button with a folder Icon for displaying under the image of selected repository.
 * @param repo of the specific button and setSelectedRepo function for updating the state. 
 * @returns JSX.Element
 */
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

/**
 * Main component for displaying the gallery view.
 * @returns JSX.Element
 */
const GalleryView: FC = () => {
    const { filteredRepositories } = useContext(PortfolioContext);
    const [selectedRepo, setSelectedRepo] = useState<repositoriesType>();

    useEffect(() => {

        // Set selectedRepo if not set yet. This is to prevent the selectedRepo from being undefined.
        if (filteredRepositories.length > 0 && !selectedRepo) {
            setSelectedRepo(filteredRepositories[0]);
        }
        
        // useEffect will be called every time the filteredRepositories and selectedRepo state changes.
    }, [filteredRepositories, selectedRepo]);

    /**
     * Helper function to check if the specific element is selected. 
     * @param repo wanted repository.
     * @returns string with styling classes based on if selected or not.
     */
    const getIsSelectedStyling = (repo: repositoriesType) => {
        let styles = `${paddingStyles.p_5} ${style.btn_container} ${layoutStyles.flex_row} ${layoutStyles.center_all}`
        return repo === selectedRepo ? styles + ` ${style.selected}` : styles;
    }

    interface InformationProps {
        label: string;
        text: string | number;
    }

    /**
     * Container for displaying information about the repository. This is a reusable component,
     * did not make it global because it is not used in other components.
     * @param {string} label of the specific element.
     * @param {string} text value.
     * @returns JSX.Element
     */
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
                            {/*Gallery Image is wrapped in a link to open in a new tab. */}
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
                        {/* Map repositories and display them in a row. */}
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
                        {/*Showing information about the selected repository. */}
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
        return <Loading /> //Shows Loading component if selectedRepo is not set yet.
    }
};

export default GalleryView;