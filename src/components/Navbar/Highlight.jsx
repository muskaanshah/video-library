function Highlight({ text = "", highlight = "" }) {
    if (!highlight.trim()) {
        return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return (
        <span>
            {parts.map((part, i) => (
                <span
                    key={i}
                    style={
                        part.toLowerCase() === highlight.toLowerCase()
                            ? { fontWeight: "bold" }
                            : {}
                    }
                >
                    {part}
                </span>
            ))}{" "}
        </span>
    );
}

export { Highlight };
