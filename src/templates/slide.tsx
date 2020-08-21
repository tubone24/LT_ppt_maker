import React from "react"
import { PageContext } from "../../gatsby-node/createPages"

type Props = {
    pageContext: PageContext
}

// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
    <section data-markdown>
        <textarea data-template>
            {pageContext.node.node.html}
        </textarea>
    </section>
)
// ______________________________________________________
//
export default Component