import React, { useEffect, useState } from 'react'
import ReactMarkdown from "react-markdown";

function MarkdownReader() {
    const [markdown, setMarkdown] = useState("");

    const getMarkdown = async () => {
        const markdownPath = require('../Articles/Test.md');

        try {
            const markdownFile = await fetch(markdownPath);
            const markdownText = await markdownFile.text();

            setMarkdown(markdownText);
        } catch (err) {
            console.error("Problem: ", err);
        }
    };

    useEffect(() => {
        getMarkdown();
    }, [getMarkdown]);

    return (
        <div>
            <ReactMarkdown escapeHTML={false} >
                {markdown}
            </ReactMarkdown>
        </div>
    )
}

export default MarkdownReader
