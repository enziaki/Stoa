import React, { useEffect, useState } from 'react'

function GetMarkdownHeading({ MarkDown }) {
    const [heading, setHeading] = useState('');


    const fetchMd = async (MarkDown) => {
        const mdText = await fetch(MarkDown).then((response) => response.text());
        const mdHeading = mdText.replace(/```(.|\n)+```/gm, "").split("\n").filter(line => line.startsWith("#"));
        setHeading(mdHeading);
    }

    useEffect(() => {
        fetchMd(MarkDown);
    }, [])



    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default GetMarkdownHeading
