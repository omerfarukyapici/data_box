interface ILlinkProps {
    linkName: string,
    linkAddress: string
}

export const Link = (
    { linkName, linkAddress }: ILlinkProps
) => {
    return (
        <a href={linkAddress}>
            {linkName}
        </a>
    )
}
