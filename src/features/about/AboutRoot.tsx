import React from 'react'

export function AboutRoot() {
  return (<div className="container mx-auto">
      <h2 className="text-5xl m-10">About</h2>

      <p>Site is under construction still. Check back later for new updates</p>
      <h2 className="text-3xl m-10">Other sites to check out</h2>
      <ul>
        <li><a className="text-purple-600 hover:underline" href="http://www.dyson.city">Dyson City - Boring Man Stats</a></li>
        <li><a className="text-purple-600 hover:underline" href="http://wiki.dyson.city">Boring Man Wiki</a></li>
        <li><a className="text-purple-600 hover:underline" href="http://bmangg.dyson.city">Bman.gg - Boring Man V.1 Stats</a></li>
        <li><a className="text-purple-600 hover:underline" href="https://discord.com/api/oauth2/authorize?client_id=615737632768393254&permissions=3237952&scope=bot">Invite Coyote Bot to Discord Servers</a></li>
      </ul>
    </div>)
}
