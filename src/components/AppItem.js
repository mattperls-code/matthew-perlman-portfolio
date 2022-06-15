import React from "react"

const AppItem = ({ url, name, icon, description }) => {
    return (
        <article className={"app-item"}>
            <a href={url} target={"_blank"}>
                <div className={"title-bar"}>
                    <img src={icon} alt={name} />
                    <div className={"app-name-container"}>
                        <div className={"app-name-text"}>
                            {
                                name
                            }
                        </div>
                    </div>
                </div>
            </a>
            <div className={"description"}>
                {
                    description
                }
            </div>
        </article>
    )
}

export default AppItem