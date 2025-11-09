import React from "react";


const LINKS = [
["https://www.iscte-iul.pt/event/3096/trio-de-jazz-concerto", "Página do concerto no Iscte"],
["https://www.youtube.com/results?search_query=trio+de+jazz", "Outros trios de jazz (YouTube)"],
["https://www.allaboutjazz.com/", "All About Jazz"],
["https://open.spotify.com/search/trio%20jazz", "Playlists de trio de jazz (Spotify)"],
];


export default function Links() {
return (
<section id="links" aria-labelledby="titulo-links">
<h2 id="titulo-links">Links associados</h2>
<ul>
{LINKS.map(([href, label]) => (
<li key={href}>
<a href={href} target="_blank" rel="noreferrer noopener">{label}</a>
</li>
))}
</ul>
</section>
);
}
