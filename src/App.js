import React, { useState, useEffect } from "react"

import AppItem from "./components/AppItem"

import ShouldIDoItIcon from "./assets/images/should-i-do-it.svg"
import QuoteItIcon from "./assets/images/quote-it.svg"
import QuickDodgeIcon from "./assets/images/quick-dodge.svg"

import axios from "axios"
import ReactMarkdown from "react-markdown"

import "./styles.scss"

const App = () => {
    const [writtenContent, setWrittenContent] = useState("")

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/mattperls-code/mattperls-code/main/README.md").then((res) => {
            setWrittenContent(res.data.replaceAll("<br />", ""))
        }).catch((e) => {
            setWrittenContent("### Sorry, Failed To Load")
            console.warn(e)
        })
    }, [])

    return (
        <React.Fragment>
            <h1 className={"main-header"}>Featured Releases</h1>
            <section className={"item-display"}>
                <AppItem url={"https://apps.apple.com/us/app/should-i-do-it/id1628436486"} name={"Should I Do It?"} icon={ShouldIDoItIcon} description={"A helpful app for decision making."} />
                <AppItem url={"https://apps.apple.com/us/app/quote-it/id1628678287"} name={"Quote-It"} icon={QuoteItIcon} description={"The perfect app for storing and sharing quotes."} />
                <AppItem url={"https://apps.apple.com/us/app/quick-dodge/id1517218313"} name={"Quick Dodge!"} icon={QuickDodgeIcon} description={"A fun game that combines split second decisions and fast paced gameplay with relaxing visuals and chill music."} />
            </section>
            <div className={"written-content"}>
                <ReactMarkdown>
                    {
                        writtenContent
                    }
                </ReactMarkdown>
            </div>
        </React.Fragment>
    )
}

export default App