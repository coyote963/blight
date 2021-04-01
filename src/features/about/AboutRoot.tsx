import React from 'react'
import { HeaderDisplay } from '../../app/HeaderDisplay'

export function AboutRoot() {
  return (<div className="container mx-auto ">
      <h1 className="text-5xl m-10 text-navy dark:text-chestnut"> Thanks for visiting</h1>
      
      <p className="dark:text-grullo">Site is under construction still. Check back later for new updates. In the meantime check out these resources!</p>
      <ul className="mt-6">
        <li><a className="text-darkgreen dark:text-lemon hover:underline" href="http://www.dyson.city">Dyson City - Boring Man Stats</a></li>
        <li><a className="text-darkgreen dark:text-lemon hover:underline" href="http://wiki.dyson.city">Boring Man Wiki</a></li>
        <li><a className="text-darkgreen dark:text-lemon hover:underline" href="http://bmangg.dyson.city">Bman.gg - Boring Man V.1 Stats</a></li>
        <li><a className="text-darkgreen dark:text-lemon hover:underline" href="https://discord.com/api/oauth2/authorize?client_id=615737632768393254&permissions=3237952&scope=bot">Invite Coyote Bot to Discord Servers</a></li>
      </ul>
    </div>)
}
