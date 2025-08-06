import React from 'react'
import { Helmet } from 'react-helmet'

export default function Helmetcomponent({ title, canonical }) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="International Conference, Computing, Networking, Data Science, Artificial Intelligence, Machine Learning, IoT, Cloud Computing, Big Data, Research Conference, Technology Innovation, Computer Science, Academic Conference, 2025 Conference" />
            <meta name="description" content="Join the International Conference on Computing, Networking, and Data Science to explore the latest innovations, research findings, and advancements in technology. Connect with global experts in AI, ML, IoT, Big Data, and more." />
            <meta name="author" content="ICCNDS Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Computing, Networking, and Data Science" />
            <meta property="og:description" content="Join the International Conference on Computing, Networking, and Data Science to explore the latest innovations, research findings, and advancements in technology. Connect with global experts in AI, ML, IoT, Big Data, and more." />
            <meta property="og:url" content="https://iccnds.com/" />
            <meta property="og:image" content="https://iccnds.com/assets/images/logo1.png" />
            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://iccnds.com/assets/images/Fav.png" />

        </Helmet>
    )
}

