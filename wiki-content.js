/* ================================================================
   EarthWars Season 2  —  Complete Wiki Content
   Each key matches a sidebar data-section id.
   Values are raw HTML injected into the <main> area.
   ================================================================ */

const WIKI = {

/* ──────────────────────────────────────────
   GETTING STARTED
   ────────────────────────────────────────── */

home: `
<h2>🏠 Welcome to EarthWars Season 2</h2>
<p>EarthWars is a geopolitical Minecraft server where players create countries, wage wars, form alliances, and compete for global dominance. This wiki covers every system available in Season 2.</p>

<div class="card">
  <h4>What's New in Season 2</h4>
  <ul>
    <li><strong>30 Skills & Perks</strong> — Level up unique abilities</li>
    <li><strong>Custom Enchantments</strong> — Over a dozen unique enchants</li>
    <li><strong>Dungeon System</strong> — PvE boss encounters with loot</li>
    <li><strong>Valuable Blocks</strong> — Unlock country-wide perks</li>
    <li><strong>God Items</strong> — 20+ legendary weapons & armor</li>
    <li><strong>Overhauled War System</strong> — Sieges, walls, and tactical combat</li>
    <li><strong>Trade System</strong> — Secure player-to-player trading</li>
    <li><strong>Mob Catcher</strong> — Capture and relocate mobs</li>
    <li><strong>Loot Boxes</strong> — Randomized reward crates</li>
  </ul>
</div>

<div class="info-box">Use the sidebar to navigate every system. Click any topic to jump straight to its guide.</div>
`,

quickstart: `
<h2>⚡ Quick Start Guide</h2>
<p>Get up and running on EarthWars in five minutes.</p>

<h3>Step 1 — Join & Tutorial</h3>
<p>When you first join, you'll spawn in the <strong>Safe Zone</strong>. A guided tutorial walks you through the basics. Complete it to earn starter rewards.</p>

<h3>Step 2 — Create or Join a Country</h3>
<ul>
  <li><code>/country create &lt;name&gt;</code> — Start your own nation</li>
  <li><code>/country join &lt;name&gt;</code> — Request to join an existing one</li>
</ul>

<h3>Step 3 — Claim Territory</h3>
<p>Stand in a chunk and run <code>/c claim</code>. Your country's territory grows chunk by chunk. Build walls with <code>/c wall</code> for extra defense.</p>

<h3>Step 4 — Grow & Fight</h3>
<ul>
  <li>Mine <strong>Valuable Blocks</strong> to unlock country perks</li>
  <li>Level up <strong>Skills</strong> with <code>/skills</code></li>
  <li>Acquire <strong>Custom Enchants</strong> and <strong>God Items</strong></li>
  <li>Declare <strong>War</strong> on rival nations with <code>/war declare &lt;country&gt;</code></li>
</ul>

<div class="info-box success">Tip: Open the shop with <code>/shop</code> to buy & sell resources early.</div>
`,

serversetup: `
<h2>🔧 Server Information</h2>
<p>Everything you need to know about connecting and settings.</p>

<h3>Connection</h3>
<table>
  <tr><th>Detail</th><th>Value</th></tr>
  <tr><td>Server IP</td><td><code>play.earthwarsmp.com</code></td></tr>
  <tr><td>Version</td><td>1.21.x (Java Edition)</td></tr>
  <tr><td>Discord</td><td><a href="https://discord.gg/earthwars" style="color:var(--accent)">discord.gg/earthwars</a></td></tr>
</table>

<h3>Rules Overview</h3>
<ol>
  <li>No hacking, cheating, or exploiting</li>
  <li>No hate speech or harassment</li>
  <li>No real-money trading (RMT)</li>
  <li>No excessive griefing in safe zones</li>
  <li>Staff decisions are final</li>
</ol>
`,

/* ──────────────────────────────────────────
   COUNTRIES
   ────────────────────────────────────────── */

countries: `
<h2>🏰 Country System</h2>
<p>Countries are the core unit of EarthWars. Players band together under a national banner to claim land, build, and wage war.</p>

<h3>Creating a Country</h3>
<div class="card">
  <p><span class="cmd">/country create &lt;name&gt;</span> — Creates a new country. You become the <strong>Leader</strong>.</p>
  <p>Country names must be 3–20 characters, alphanumeric, and unique.</p>
</div>

<h3>Country Info</h3>
<ul>
  <li><code>/c info</code> — View your country's stats</li>
  <li><code>/c info &lt;name&gt;</code> — View another country's public stats</li>
  <li><code>/c list</code> — List all countries</li>
  <li><code>/c online</code> — See online members</li>
</ul>

<h3>Managing Members</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite a player to your country</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Remove a member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Promote to a higher rank</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Demote to a lower rank</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave your current country</td></tr>
  <tr><td><code>/c disband</code></td><td>Disband the country (Leader only)</td></tr>
</table>

<h3>Country Settings</h3>
<ul>
  <li><code>/c setspawn</code> — Set the country spawn location</li>
  <li><code>/c spawn</code> — Teleport to your country's spawn</li>
  <li><code>/c sethome</code> — Set country home</li>
  <li><code>/c rename &lt;name&gt;</code> — Rename the country</li>
  <li><code>/c description &lt;text&gt;</code> — Set a public description</li>
</ul>
`,

ranks: `
<h2>👑 Ranks & Permissions</h2>
<p>Every country has a rank hierarchy that determines what members can do.</p>

<h3>Default Ranks</h3>
<table>
  <tr><th>Rank</th><th>Permissions</th></tr>
  <tr><td><span class="badge leader">Leader</span></td><td>Full control — manage members, declare wars, set ranks, disband</td></tr>
  <tr><td><span class="badge admin">Co-Leader</span></td><td>Invite/kick, manage claims, build walls, set ranks below co-leader</td></tr>
  <tr><td><strong>General</strong></td><td>Claim, build, interact, access country storage</td></tr>
  <tr><td><strong>Member</strong></td><td>Build, interact in claimed territory</td></tr>
  <tr><td><strong>Recruit</strong></td><td>Limited interaction — cannot break, place, or interact without permission</td></tr>
</table>

<h3>Rank Permissions</h3>
<p>Leaders and Co-Leaders can configure what each rank can do:</p>
<ul>
  <li><strong>BUILD</strong> — Place blocks in territory</li>
  <li><strong>BREAK</strong> — Break blocks in territory</li>
  <li><strong>INTERACT</strong> — Use doors, chests, buttons, etc.</li>
  <li><strong>CLAIM</strong> — Claim new chunks</li>
  <li><strong>INVITE</strong> — Invite new members</li>
</ul>

<div class="info-box warn">Recruits have no permissions by default. Leaders must manually grant them access.</div>
`,

government: `
<h2>🏛️ Government Types</h2>
<p>Each country can choose a government type that provides passive bonuses.</p>

<h3>Available Governments</h3>
<table>
  <tr><th>Type</th><th>Bonus</th></tr>
  <tr><td>Democracy</td><td>+10% tax income, members can vote on decisions</td></tr>
  <tr><td>Monarchy</td><td>+15% claim radius, leader gets bonus perks</td></tr>
  <tr><td>Dictatorship</td><td>+20% war damage, faster declarations</td></tr>
  <tr><td>Republic</td><td>Balanced bonuses across all stats</td></tr>
  <tr><td>Anarchy</td><td>No upkeep costs, but no diplomatic bonuses</td></tr>
</table>

<p>Change government with <code>/c government &lt;type&gt;</code>. There is a 7-day cooldown between changes.</p>
`,

claims: `
<h2>📍 Claims & Territory</h2>
<p>Territory is claimed in 16×16 chunks. Your country's power determines how much land you can hold.</p>

<h3>Claiming Land</h3>
<ul>
  <li><code>/c claim</code> — Claim the chunk you're standing in</li>
  <li><code>/c unclaim</code> — Unclaim a chunk</li>
  <li><code>/c autoclaim</code> — Automatically claim chunks as you walk</li>
  <li><code>/c map</code> — View a text-based map of nearby claims</li>
</ul>

<h3>Claim Rules</h3>
<div class="card">
  <ul>
    <li>New claims must be <strong>adjacent</strong> to existing territory</li>
    <li>You cannot claim chunks within another country's territory</li>
    <li>Each country has a <strong>max claim limit</strong> based on member count and perks</li>
    <li>Valuable Blocks can increase your claim limit</li>
  </ul>
</div>

<h3>Territory Protection</h3>
<p>Claimed chunks are protected from outsiders. Only members with the right rank permissions can build, break, or interact in your territory. During war, enemy attackers can siege your outer chunks.</p>

<h3>Fly in Territory</h3>
<p>If your country unlocks the <strong>Claim Flight</strong> perk (via Valuable Blocks), members automatically gain flight when entering owned territory. Use <code>/c fly</code> to toggle it manually.</p>
`,

walls: `
<h2>🧱 Walls & Defense</h2>
<p>Walls provide an extra layer of defense for your country during war. They do <strong>not</strong> grant territory — they protect it.</p>

<h3>Building Walls</h3>
<ul>
  <li><code>/c wall</code> — Open the wall management menu</li>
  <li>Walls are built around your claimed territory</li>
  <li>Walls have levels that determine their HP</li>
</ul>

<h3>Wall Mechanics in War</h3>
<div class="card">
  <h4>Attack Order</h4>
  <ol>
    <li>Attackers must first <strong>siege all outer chunks</strong> (chunks outside the wall)</li>
    <li>Only after outer chunks are captured can the wall be <strong>damaged</strong></li>
    <li>Destroying the wall does <strong>NOT</strong> transfer chunks — it removes the defense layer</li>
    <li>Attackers must then <strong>siege inner chunks</strong> manually</li>
  </ol>
</div>

<h3>Wall HP Boss Bar</h3>
<p>When an attacker hits a wall during war, a boss bar appears showing the wall's current HP, level, and owning country name. The bar color changes based on remaining HP.</p>

<div class="info-box warn">Walls are defensive structures only. Destroying them never automatically grants territory to the attacker.</div>
`,

neutral: `
<h2>🕊️ Neutral Status</h2>
<p>Countries can declare themselves <strong>Neutral</strong>, opting out of the war system.</p>

<h3>Benefits</h3>
<ul>
  <li>Cannot be declared war upon</li>
  <li>Territory is fully protected</li>
  <li>Peaceful building & trading</li>
</ul>

<h3>Restrictions</h3>
<ul>
  <li>Cannot declare war on others</li>
  <li>Cannot participate in sieges</li>
  <li>Reduced land claim limit</li>
  <li>7-day cooldown to switch between Neutral and Active</li>
</ul>

<p>Toggle with <code>/c neutral</code>.</p>
`,

decline: `
<h2>📉 Decline & Annex</h2>
<p>Countries that become inactive will slowly lose territory and may be annexed.</p>

<h3>Decline Mechanics</h3>
<ul>
  <li>If all members are offline for <strong>7+ days</strong>, the country enters <strong>Decline</strong></li>
  <li>Declining countries lose 1 chunk per day from the edges</li>
  <li>Any member logging back in stops the decline</li>
</ul>

<h3>Annexation</h3>
<p>A fully declined country (0 claims) is automatically disbanded. Nearby countries can annex the freed chunks.</p>
`,

/* ──────────────────────────────────────────
   WARFARE
   ────────────────────────────────────────── */

war: `
<h2>⚔️ War System</h2>
<p>Wars are the primary way countries conquer territory. The system is designed for tactical, multi-phase combat.</p>

<h3>Declaring War</h3>
<div class="card">
  <p><span class="cmd">/war declare &lt;country&gt;</span></p>
  <p>Costs in-game currency. The defending country receives a warning. After a preparation period, the war goes <strong>ACTIVE</strong>.</p>
</div>

<h3>War Phases</h3>
<table>
  <tr><th>Phase</th><th>Description</th></tr>
  <tr><td>Preparation</td><td>Both sides receive warning; time to prepare defenses</td></tr>
  <tr><td>Active</td><td>Attackers can siege outer chunks and damage walls</td></tr>
  <tr><td>Wall Breach</td><td>Walls are destroyed; inner territory is exposed</td></tr>
  <tr><td>Resolution</td><td>War ends when objectives are met or time runs out</td></tr>
</table>

<h3>War Flow (with Walls)</h3>
<ol>
  <li>Siege outer chunks first (chunks outside walls)</li>
  <li>Once outer territory is captured, damage the wall</li>
  <li>Wall destruction exposes inner territory</li>
  <li>Siege inner chunks to fully conquer</li>
</ol>

<h3>War Commands</h3>
<ul>
  <li><code>/war declare &lt;country&gt;</code> — Start a war</li>
  <li><code>/war status</code> — View active wars</li>
  <li><code>/war continue</code> — Pay to extend the war timer</li>
  <li><code>/war surrender</code> — End the war (losing side)</li>
</ul>

<div class="info-box danger">If a country has walls, you MUST siege outer chunks before you can damage the wall.</div>
`,

sieges: `
<h2>🏴 Sieges</h2>
<p>Sieges are how attackers capture individual chunks during an active war.</p>

<h3>Starting a Siege</h3>
<ul>
  <li><code>/siege start</code> — Begin sieging the chunk you're standing in</li>
  <li>You must be in the enemy's territory during an active war</li>
  <li>Outer chunks (outside walls) must be sieged before walls can be attacked</li>
</ul>

<h3>Siege Mechanics</h3>
<div class="card">
  <ul>
    <li>Sieging takes time — stay in the chunk to maintain progress</li>
    <li>Defenders can contest by entering the chunk</li>
    <li>If the attacker is killed or leaves, the siege stalls</li>
    <li>Successfully captured chunks become the attacker's territory</li>
  </ul>
</div>

<h3>After Capturing</h3>
<p>Captured chunks immediately transfer to the attacking country. Structures remain but the land changes ownership.</p>
`,

combat: `
<h2>🗡️ Combat & PvP</h2>
<p>EarthWars features enhanced combat with custom mechanics, enchants, and combat tagging.</p>

<h3>Combat Tag</h3>
<ul>
  <li>Attacking or being attacked places you <strong>in combat</strong> for 15 seconds</li>
  <li>You cannot enter safe zones while combat tagged</li>
  <li>Logging out while in combat causes you to die</li>
</ul>

<h3>Ender Pearl Cooldown</h3>
<div class="card">
  <p>While in combat, ender pearls have a <strong>10-second cooldown</strong>. You can still use them tactically, but no pearl spam.</p>
  <p>A message displays the remaining cooldown time.</p>
</div>

<h3>Moshpit Zones</h3>
<p>Designated PvP arenas where combat is always enabled. WorldGuard protections are overridden in moshpit areas so players can freely fight.</p>

<h3>Anti-Collision</h3>
<p>Player collision is globally disabled to prevent push exploits.</p>
`,

tnt: `
<h2>💣 TNT & Bombs</h2>
<p>Explosives play a tactical role in wars and sieges.</p>

<h3>TNT Usage</h3>
<ul>
  <li>TNT can damage enemy walls during active wars</li>
  <li>TNT damage is scaled based on wall level</li>
  <li>TNT does not work in safe zones</li>
  <li>Friendly territory is protected from TNT</li>
</ul>

<h3>Bombs</h3>
<div class="card">
  <p>Special craftable bombs deal extra wall damage. They can be purchased from the shop or crafted with rare materials.</p>
</div>
`,

/* ──────────────────────────────────────────
   DIPLOMACY
   ────────────────────────────────────────── */

diplomacy: `
<h2>🤝 Diplomacy</h2>
<p>Countries can form alliances, trade agreements, and diplomatic relationships.</p>

<h3>Alliance System</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Send an alliance request</td></tr>
  <tr><td><code>/c unally &lt;country&gt;</code></td><td>Break an alliance</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark a country as an enemy</td></tr>
</table>

<h3>Alliance Benefits</h3>
<ul>
  <li>Allied players cannot damage each other</li>
  <li>Shared territory access (configurable)</li>
  <li>Joint war declarations</li>
</ul>
`,

espionage: `
<h2>🕵️ Espionage</h2>
<p>Spying on enemies gives tactical advantages in war.</p>

<h3>Spy Actions</h3>
<ul>
  <li>Scout enemy territory to reveal their claim layout</li>
  <li>Identify wall HP and country resources</li>
  <li>Costs in-game currency to execute</li>
</ul>
`,

trade: `
<h2>📦 Trade Routes & Trading</h2>
<p>Secure player-to-player trading is built into the server.</p>

<h3>Player Trading</h3>
<div class="card">
  <p><span class="cmd">/trade &lt;player&gt;</span> — Send a trade request</p>
  <p>A secure GUI opens where both players can add items and money. Both must confirm before the trade executes.</p>
</div>

<h3>Trade Safety</h3>
<ul>
  <li>Both players must confirm the trade</li>
  <li>Items and money are exchanged atomically</li>
  <li>No risk of scamming</li>
</ul>
`,

colonies: `
<h2>🏗️ Colonies</h2>
<p>Colonies allow countries to establish outposts away from their main territory.</p>
<ul>
  <li>Colonies are separate claim clusters not connected to the main territory</li>
  <li>They require additional upkeep costs</li>
  <li>Can serve as forward bases during wars</li>
</ul>
`,

plots: `
<h2>🗺️ Plots</h2>
<p>Leaders can subdivide their territory into plots for individual members.</p>

<h3>Plot Commands</h3>
<ul>
  <li><code>/c plot create</code> — Create a plot in the current chunk</li>
  <li><code>/c plot assign &lt;player&gt;</code> — Assign a plot to a member</li>
  <li><code>/c plot remove</code> — Remove a plot</li>
</ul>
<p>Plot owners have full build/break/interact permissions within their assigned plot, regardless of their rank.</p>
`,

/* ──────────────────────────────────────────
   PROGRESSION
   ────────────────────────────────────────── */

skills: `
<h2>⭐ Skills (30 Perks)</h2>
<p>The skill system lets individual players specialize and unlock powerful perks.</p>

<h3>Opening the Skill Menu</h3>
<p><span class="cmd">/skills</span> — Opens the interactive skill GUI</p>

<h3>How It Works</h3>
<ul>
  <li>Earn XP by mining, fighting, farming, and completing tasks</li>
  <li>Spend skill points to unlock perks across multiple trees</li>
  <li>30 unique perks available</li>
</ul>

<h3>Skill Categories</h3>
<table>
  <tr><th>Category</th><th>Example Perks</th></tr>
  <tr><td>Combat</td><td>Increased melee damage, lifesteal, critical chance</td></tr>
  <tr><td>Mining</td><td>Auto-smelt, fortune boost, haste</td></tr>
  <tr><td>Farming</td><td>Replanting, double drops, growth boost</td></tr>
  <tr><td>Defense</td><td>Damage reduction, fire resistance, knockback resist</td></tr>
  <tr><td>Utility</td><td>Speed boost, night vision, extra hearts</td></tr>
</table>

<div class="info-box">Skill progress is saved per-player and persists across sessions.</div>
`,

valuableblocks: `
<h2>💎 Valuable Blocks</h2>
<p>Mining and storing valuable blocks in your country's territory unlocks country-wide perks for all members.</p>

<h3>How It Works</h3>
<ol>
  <li>Place valuable blocks (diamond, emerald, netherite, etc.) in your territory</li>
  <li>The server counts your country's total valuable blocks</li>
  <li>Hit milestones to unlock passive perks for the whole country</li>
</ol>

<h3>Available Perks</h3>
<table>
  <tr><th>Perk</th><th>Requirement</th><th>Effect</th></tr>
  <tr><td>Claim Flight</td><td>High tier</td><td>All members can fly in owned territory (auto-enabled)</td></tr>
  <tr><td>Extra Claims</td><td>Mid tier</td><td>Increased max claim limit</td></tr>
  <tr><td>Member Slots</td><td>Mid tier</td><td>More members can join</td></tr>
  <tr><td>Defense Boost</td><td>High tier</td><td>Reduced damage in own territory</td></tr>
</table>

<div class="info-box success">Claim Flight automatically activates when you enter your territory — no command needed. Toggle manually with <code>/c fly</code>.</div>
`,

enchants: `
<h2>✨ Custom Enchants</h2>
<p>EarthWars features a unique custom enchantment system separate from vanilla enchants.</p>

<h3>Obtaining Custom Enchants</h3>
<ul>
  <li>Purchase enchantment books from the <code>/shop</code></li>
  <li>Find them in <strong>Loot Boxes</strong></li>
  <li>Earn them as <strong>dungeon rewards</strong></li>
</ul>

<h3>Using Enchant Books</h3>
<div class="card">
  <p>Custom enchant books display detailed info in their lore:</p>
  <ul>
    <li><strong>Enchant Name & Level</strong></li>
    <li><strong>Description</strong> — What the enchant does</li>
    <li><strong>Max Level</strong> — Highest possible level</li>
    <li><strong>Applies To</strong> — Which items it can be applied to (Swords, Pickaxes, Armor, etc.)</li>
  </ul>
  <p>Drag and drop the book onto an item in an anvil to apply it.</p>
</div>

<h3>Example Enchants</h3>
<table>
  <tr><th>Enchant</th><th>Effect</th><th>Applies To</th></tr>
  <tr><td>Gravity Bow</td><td>Pulls targets toward you on hit (+35% damage)</td><td>Bows</td></tr>
  <tr><td>Replant</td><td>Automatically replants crops when harvested</td><td>Hoes</td></tr>
  <tr><td>Earthquake</td><td>AoE ground slam damage</td><td>Swords, Axes</td></tr>
  <tr><td>Tracking</td><td>Arrows home toward nearest enemy</td><td>Bows</td></tr>
  <tr><td>Lifesteal</td><td>Heal on hit</td><td>Swords</td></tr>
  <tr><td>Venom</td><td>Poisons targets on hit</td><td>Swords</td></tr>
</table>
`,

dungeons: `
<h2>🏚️ Dungeons</h2>
<p>PvE dungeon encounters where parties face off against powerful bosses for epic loot.</p>

<h3>How to Enter</h3>
<ul>
  <li>Find dungeon portals in the world or use <code>/dungeon</code></li>
  <li>Form a party of 1–4 players</li>
  <li>Enter and defeat all waves to reach the boss</li>
</ul>

<h3>The Wraith (Final Boss)</h3>
<div class="card">
  <h4>Boss Abilities</h4>
  <table>
    <tr><th>Ability</th><th>Description</th></tr>
    <tr><td>Swipe Attack</td><td>AoE melee — hits ALL players within 4.5 blocks</td></tr>
    <tr><td>Teleport</td><td>Teleports to locked-on player if they're 2+ blocks away</td></tr>
    <tr><td>Soul Drain</td><td>Channeled damage that heals the Wraith</td></tr>
    <tr><td>Spectral Strike</td><td>High damage single-target slam</td></tr>
    <tr><td>Soul Pillars</td><td>Summons pillars that must be destroyed with <strong>critical hits only</strong></td></tr>
    <tr><td>Enrage</td><td>At low HP, damage and speed increase significantly</td></tr>
  </table>
</div>

<div class="info-box danger">Soul Pillars can only be damaged by critical hits! (Jump and strike while falling.)</div>

<h3>Loot</h3>
<p>Defeating the boss drops God Items, custom enchant books, rare materials, and currency.</p>
`,

playtime: `
<h2>⏱️ Playtime Rewards</h2>
<p>Earn rewards just by playing on the server.</p>

<h3>Milestones</h3>
<ul>
  <li>Rewards are given at set playtime thresholds</li>
  <li>Includes money, items, crate keys, and cosmetics</li>
  <li>Check your playtime with <code>/playtime</code></li>
</ul>
`,

/* ──────────────────────────────────────────
   ITEMS
   ────────────────────────────────────────── */

goditems: `
<h2>🔱 God Items (20+)</h2>
<p>Legendary items with unique abilities that go beyond vanilla Minecraft.</p>

<h3>Obtaining God Items</h3>
<ul>
  <li>Dungeon boss drops</li>
  <li>Loot Box rewards</li>
  <li>Special event prizes</li>
  <li>Admin shop (limited availability)</li>
</ul>

<h3>Item Tiers</h3>
<table>
  <tr><th>Tier</th><th>Color</th><th>Power Level</th></tr>
  <tr><td>Legendary</td><td style="color:#ffd700">Gold</td><td>Maximum — game-changing abilities</td></tr>
  <tr><td>Epic</td><td style="color:#bc8cff">Purple</td><td>High — strong unique effects</td></tr>
  <tr><td>Rare</td><td style="color:#58a6ff">Blue</td><td>Moderate — useful passive bonuses</td></tr>
</table>

<div class="info-box">God items are soulbound — they cannot be dropped or traded. They persist through death.</div>
`,

lootboxes: `
<h2>🎁 Loot Boxes</h2>
<p>Loot Boxes contain randomized rewards ranging from common items to legendary God Items.</p>

<h3>Types</h3>
<ul>
  <li><strong>Common Crate</strong> — Basic resources and money</li>
  <li><strong>Rare Crate</strong> — Custom enchant books, rare items</li>
  <li><strong>Legendary Crate</strong> — God Items, large money prizes</li>
</ul>

<h3>Obtaining Keys</h3>
<ul>
  <li>Playtime rewards</li>
  <li>Event prizes</li>
  <li>Server store</li>
  <li>Vote rewards</li>
</ul>
`,

kits: `
<h2>🎒 Kits</h2>
<p>Kits provide pre-made item sets on a cooldown timer.</p>
<ul>
  <li><code>/kit</code> — Open the kit selection GUI</li>
  <li>Different kits are available based on your rank/perks</li>
  <li>Kits have individual cooldowns (e.g., 24h for starter kit)</li>
</ul>
`,

vouchers: `
<h2>🎫 Vouchers</h2>
<p>Vouchers are redeemable items that grant rewards when right-clicked.</p>

<h3>Voucher Types</h3>
<ul>
  <li><strong>Money Voucher</strong> — Grants a set amount of currency</li>
  <li><strong>XP Voucher</strong> — Grants experience levels</li>
  <li><strong>Rank Voucher</strong> — Temporary rank upgrades</li>
  <li><strong>Crate Key Voucher</strong> — Redeems for loot box keys</li>
</ul>

<h3>Redeeming</h3>
<p>Simply right-click the voucher in your hand. The reward is applied instantly.</p>
`,

wands: `
<h2>🪄 Wands</h2>
<p>Building wands help you construct structures faster.</p>

<h3>Building Wand</h3>
<div class="card">
  <ul>
    <li>Right-click a block face to extend it in that direction</li>
    <li>Consumes matching blocks from your inventory</li>
    <li>Preview mode shows where blocks will be placed before confirming</li>
    <li>Works in your own claimed territory only</li>
  </ul>
</div>
`,

mobcatcher: `
<h2>🥚 Mob Catcher</h2>
<p>Capture mobs and relocate them anywhere in your territory.</p>

<h3>Usage</h3>
<ul>
  <li>Right-click a mob with the Mob Catcher egg to capture it</li>
  <li>Right-click on the ground to release the captured mob</li>
  <li>Works on most passive and neutral mobs</li>
  <li>Hostile mobs and bosses cannot be captured</li>
</ul>

<p>Obtain mob catchers from the shop or as event rewards.</p>
`,

spawners: `
<h2>🔲 Spawners</h2>
<p>Spawners can be obtained and placed for mob farming.</p>

<h3>Obtaining Spawners</h3>
<ul>
  <li>Mine spawners with <strong>Silk Touch</strong> to pick them up</li>
  <li>Purchase from the shop</li>
  <li>Certain spawner types are rarer than others</li>
</ul>

<h3>Spawner Rules</h3>
<ul>
  <li>Spawners only work in claimed territory</li>
  <li>There's a limit on spawners per chunk</li>
  <li>Spawners can be upgraded for faster spawn rates</li>
</ul>
`,

/* ──────────────────────────────────────────
   ECONOMY
   ────────────────────────────────────────── */

economy: `
<h2>💰 Economy & Shop</h2>
<p>The server economy is based on in-game currency earned through gameplay.</p>

<h3>Earning Money</h3>
<ul>
  <li>Sell items at <code>/shop</code></li>
  <li>Kill mobs and players</li>
  <li>Complete quests and events</li>
  <li>Collect bounties</li>
</ul>

<h3>Shop Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open the buy/sell GUI</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell the item you're holding</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell all sellable items in inventory</td></tr>
  <tr><td><code>/bal</code></td><td>Check your balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amount&gt;</code></td><td>Send money to another player</td></tr>
</table>
`,

taxes: `
<h2>🏦 Taxes & Upkeep</h2>
<p>Countries must maintain their territory through regular upkeep costs.</p>

<h3>Upkeep</h3>
<ul>
  <li>Daily cost based on number of claimed chunks</li>
  <li>Funded from the country treasury</li>
  <li>If the treasury runs dry, territory starts to decline</li>
</ul>

<h3>Tax System</h3>
<ul>
  <li><code>/c tax set &lt;%&gt;</code> — Set the tax rate (Leader only)</li>
  <li>A percentage of member earnings goes to the country treasury</li>
  <li>Members can deposit directly with <code>/c deposit &lt;amount&gt;</code></li>
</ul>
`,

bounties: `
<h2>🎯 Bounties</h2>
<p>Place bounties on enemy players for others to collect.</p>

<h3>Commands</h3>
<ul>
  <li><code>/bounty set &lt;player&gt; &lt;amount&gt;</code> — Place a bounty</li>
  <li><code>/bounty list</code> — View active bounties</li>
  <li>Kill a bountied player to collect the reward</li>
</ul>
`,

coinflip: `
<h2>🪙 Coinflip</h2>
<p>Gamble your money against other players in a 50/50 coinflip.</p>

<h3>How to Play</h3>
<ul>
  <li><code>/coinflip &lt;amount&gt;</code> — Create a coinflip wager</li>
  <li>Another player accepts the challenge</li>
  <li>Winner takes all (minus a small server tax)</li>
</ul>
`,

/* ──────────────────────────────────────────
   SOCIAL
   ────────────────────────────────────────── */

chat: `
<h2>💬 Chat System</h2>
<p>Multiple chat channels keep communication organized.</p>

<h3>Channels</h3>
<table>
  <tr><th>Channel</th><th>Command</th><th>Visibility</th></tr>
  <tr><td>Global</td><td><code>/g &lt;message&gt;</code></td><td>All players</td></tr>
  <tr><td>Country</td><td><code>/cc &lt;message&gt;</code></td><td>Country members only</td></tr>
  <tr><td>Alliance</td><td><code>/ac &lt;message&gt;</code></td><td>Allied countries</td></tr>
  <tr><td>Local</td><td><code>/l &lt;message&gt;</code></td><td>Players within 100 blocks</td></tr>
</table>

<h3>Chat Format</h3>
<p>Chat messages display your country tag, rank, and name with colored formatting.</p>
`,

duels: `
<h2>⚔️ Duels</h2>
<p>Challenge other players to fair 1v1 combat.</p>

<h3>Commands</h3>
<ul>
  <li><code>/duel &lt;player&gt;</code> — Send a duel request</li>
  <li>Both players are teleported to an arena</li>
  <li>Inventory is saved and restored after the duel</li>
  <li>Winner earns money and bragging rights</li>
</ul>
`,

resumes: `
<h2>📋 Resumes & Recruitment</h2>
<p>Players looking for a country can post resumes; country leaders can recruit.</p>
<ul>
  <li>Post your resume with your skills and experience</li>
  <li>Country leaders can browse available players</li>
  <li>Send recruitment invites directly</li>
</ul>
`,

polls: `
<h2>📊 Polls</h2>
<p>Country leaders can create polls for members to vote on decisions.</p>
<ul>
  <li>Useful for democratic government types</li>
  <li>Results are displayed after the poll closes</li>
</ul>
`,

discordlink: `
<h2>🔗 Discord Link</h2>
<p>Link your Minecraft account to the Discord server for cross-platform features.</p>

<h3>Features</h3>
<ul>
  <li>Synced roles based on in-game rank</li>
  <li>Country channels in Discord</li>
  <li>War notifications and alerts</li>
  <li>Cross-chat between Discord and in-game</li>
</ul>

<h3>Linking</h3>
<p>Use <code>/discord link</code> in-game and follow the instructions to link your accounts.</p>
`,

/* ──────────────────────────────────────────
   EVENTS
   ────────────────────────────────────────── */

events: `
<h2>🎮 Server Events</h2>
<p>Regular server-wide events with unique rewards.</p>

<h3>Event Types</h3>
<table>
  <tr><th>Event</th><th>Description</th></tr>
  <tr><td>Capture the Flag</td><td>Team-based CTF with country vs country</td></tr>
  <tr><td>King of the Hill</td><td>Hold a location to earn points</td></tr>
  <tr><td>Boss Raids</td><td>Server-wide boss spawn with shared loot</td></tr>
  <tr><td>Build Competition</td><td>Judged building contests with themes</td></tr>
  <tr><td>War Games</td><td>Practice wars with no permanent consequences</td></tr>
</table>

<h3>Event Schedule</h3>
<p>Events are announced in Discord and via in-game broadcasts. Check <code>/events</code> for upcoming events.</p>
`,

/* ──────────────────────────────────────────
   WORLD
   ────────────────────────────────────────── */

safezones: `
<h2>🛡️ Safe Zones & Moshpits</h2>

<h3>Safe Zones</h3>
<p>Protected areas where PvP is disabled and players are safe.</p>
<ul>
  <li>Spawn area is a safe zone</li>
  <li>Cannot enter while combat tagged</li>
  <li>No block breaking/placing allowed</li>
  <li>Villagers in safe zones are protected from all harm</li>
</ul>

<h3>Moshpit Zones</h3>
<div class="card">
  <p>Dedicated PvP areas where all players can fight freely. Protection plugins are overridden in these zones.</p>
  <ul>
    <li>Free-for-all combat</li>
    <li>No combat tag restrictions for entry/exit</li>
    <li>Popular for practice and tournaments</li>
  </ul>
</div>
`,

portals: `
<h2>🌀 Portals & Nether</h2>
<p>The Nether dimension is accessible and plays a role in resource gathering and warfare.</p>
<ul>
  <li>Standard Nether portals work as expected</li>
  <li>Claims can extend into the Nether</li>
  <li>Special portal locations around the map</li>
</ul>
`,

territory: `
<h2>🚧 Territory Mechanics</h2>
<p>Advanced details on how territory works in EarthWars.</p>

<h3>Entry Notifications</h3>
<p>When you enter another country's territory, a notification displays the country name, relationship status, and whether you're safe or in danger.</p>

<h3>Territory Permissions</h3>
<ul>
  <li>Outsiders cannot build, break, or interact in claimed land</li>
  <li>During war, attackers gain limited access to siege mechanics</li>
  <li>Allies may have configurable access levels</li>
</ul>

<h3>Scoreboard</h3>
<p>The sidebar scoreboard shows your country info, balance, current territory, and active wars at a glance.</p>
`,

holograms: `
<h2>✏️ Holograms</h2>
<p>Floating text displays used for information and decoration.</p>
<ul>
  <li>Country capitals display holographic signs</li>
  <li>Leaderboards shown via holograms at spawn</li>
  <li>Custom holograms can be created by admins</li>
</ul>
`,

/* ──────────────────────────────────────────
   ADMIN
   ────────────────────────────────────────── */

config: `
<h2>⚙️ Configuration</h2>
<p>Server configuration guide for administrators.</p>

<h3>Main Config</h3>
<p>The primary <code>config.yml</code> file controls most server settings including:</p>
<ul>
  <li>Economy rates and shop prices</li>
  <li>War declaration costs and timers</li>
  <li>Claim limits and territory settings</li>
  <li>Combat tag duration</li>
  <li>Safe zone and moshpit definitions</li>
</ul>

<h3>Reload</h3>
<p><code>/cw reload</code> — Reloads the configuration without restarting.</p>
`,

punishments: `
<h2>🔨 Punishments</h2>
<p>Staff tools for maintaining order on the server.</p>

<h3>Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/ban &lt;player&gt; &lt;reason&gt;</code></td><td>Permanently ban a player</td></tr>
  <tr><td><code>/tempban &lt;player&gt; &lt;time&gt; &lt;reason&gt;</code></td><td>Temporary ban</td></tr>
  <tr><td><code>/mute &lt;player&gt; &lt;time&gt;</code></td><td>Mute a player</td></tr>
  <tr><td><code>/kick &lt;player&gt; &lt;reason&gt;</code></td><td>Kick from server</td></tr>
  <tr><td><code>/warn &lt;player&gt; &lt;reason&gt;</code></td><td>Issue a warning</td></tr>
</table>
`,

tutorial: `
<h2>📖 Tutorial System</h2>
<p>New players are guided through an interactive tutorial on first join.</p>

<h3>Features</h3>
<ul>
  <li>Step-by-step walkthrough of core mechanics</li>
  <li>Rewards for completing each stage</li>
  <li>Can be replayed with <code>/tutorial</code></li>
  <li>Covers: joining countries, claiming, combat basics, economy</li>
</ul>
`,

homes: `
<h2>🏡 Homes System</h2>
<p>Set personal teleport points around the world.</p>

<h3>Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/sethome &lt;name&gt;</code></td><td>Set a home at your location</td></tr>
  <tr><td><code>/home &lt;name&gt;</code></td><td>Teleport to a home</td></tr>
  <tr><td><code>/delhome &lt;name&gt;</code></td><td>Delete a home</td></tr>
  <tr><td><code>/homes</code></td><td>List all your homes</td></tr>
</table>

<p>Home limit depends on your rank and perks.</p>
`,

vaults: `
<h2>🔒 Player Vaults</h2>
<p>Personal storage accessible from anywhere.</p>

<h3>Commands</h3>
<ul>
  <li><code>/pv</code> or <code>/playervault</code> — Open your vault</li>
  <li><code>/pv &lt;number&gt;</code> — Open a specific vault page</li>
</ul>
<p>Vault size depends on your rank. Items in vaults are safe from death and raids.</p>
`,

scoreboard: `
<h2>📊 Scoreboard</h2>
<p>The sidebar scoreboard displays real-time information.</p>

<h3>Displayed Info</h3>
<ul>
  <li>Country name and rank</li>
  <li>Personal balance</li>
  <li>Current territory name</li>
  <li>Active wars status</li>
  <li>Online country members</li>
  <li>Kill/death stats</li>
</ul>

<p>Toggle with <code>/sb toggle</code>.</p>
`,

broadcasts: `
<h2>📢 Auto Broadcasts</h2>
<p>Periodic server-wide messages to inform and engage players.</p>
<ul>
  <li>Tips & tricks rotate every few minutes</li>
  <li>Event announcements are broadcast server-wide</li>
  <li>War declarations trigger alerts</li>
  <li>Configurable in <code>config.yml</code></li>
</ul>
`,

datafiles: `
<h2>💾 Data Files</h2>
<p>Overview of data storage for administrators.</p>

<h3>File Structure</h3>
<table>
  <tr><th>File</th><th>Contents</th></tr>
  <tr><td><code>countries.yml</code></td><td>All country data (members, claims, treasury, etc.)</td></tr>
  <tr><td><code>players.db</code></td><td>SQLite database for player stats and skills</td></tr>
  <tr><td><code>config.yml</code></td><td>Server configuration</td></tr>
  <tr><td><code>valuable_blocks.db</code></td><td>Valuable block counts per country</td></tr>
  <tr><td><code>skill_data.db</code></td><td>Player skill progress</td></tr>
</table>

<div class="info-box warn">Always back up data files before making changes. Use the built-in backup system.</div>
`,

commands: `
<h2>📜 All Commands</h2>
<p>Complete command reference for EarthWars Season 2.</p>

<h3>Country Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c create &lt;name&gt;</code></td><td>Create a country</td></tr>
  <tr><td><code>/c join &lt;name&gt;</code></td><td>Request to join</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave your country</td></tr>
  <tr><td><code>/c claim</code></td><td>Claim a chunk</td></tr>
  <tr><td><code>/c unclaim</code></td><td>Unclaim a chunk</td></tr>
  <tr><td><code>/c info [name]</code></td><td>View country info</td></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite a player</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Kick a member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Promote a member</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Demote a member</td></tr>
  <tr><td><code>/c spawn</code></td><td>Teleport to country spawn</td></tr>
  <tr><td><code>/c setspawn</code></td><td>Set country spawn</td></tr>
  <tr><td><code>/c fly</code></td><td>Toggle flight (requires Claim Flight perk)</td></tr>
  <tr><td><code>/c wall</code></td><td>Wall management</td></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Send alliance request</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark as enemy</td></tr>
  <tr><td><code>/c neutral</code></td><td>Toggle neutral status</td></tr>
  <tr><td><code>/c deposit &lt;amount&gt;</code></td><td>Deposit to treasury</td></tr>
  <tr><td><code>/c disband</code></td><td>Disband country</td></tr>
</table>

<h3>War & Siege Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/war declare &lt;country&gt;</code></td><td>Declare war</td></tr>
  <tr><td><code>/war status</code></td><td>View active wars</td></tr>
  <tr><td><code>/war continue</code></td><td>Pay to extend war</td></tr>
  <tr><td><code>/war surrender</code></td><td>Surrender</td></tr>
  <tr><td><code>/siege start</code></td><td>Begin sieging a chunk</td></tr>
</table>

<h3>Economy Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open the shop GUI</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell held item</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell all sellable items</td></tr>
  <tr><td><code>/bal</code></td><td>Check balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amount&gt;</code></td><td>Send money</td></tr>
  <tr><td><code>/bounty set &lt;player&gt; &lt;amount&gt;</code></td><td>Place a bounty</td></tr>
  <tr><td><code>/coinflip &lt;amount&gt;</code></td><td>Start a coinflip</td></tr>
  <tr><td><code>/trade &lt;player&gt;</code></td><td>Trade with a player</td></tr>
</table>

<h3>Personal Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/skills</code></td><td>Open skills GUI</td></tr>
  <tr><td><code>/kit</code></td><td>Open kit menu</td></tr>
  <tr><td><code>/pv</code></td><td>Open player vault</td></tr>
  <tr><td><code>/sethome &lt;name&gt;</code></td><td>Set a home</td></tr>
  <tr><td><code>/home &lt;name&gt;</code></td><td>Teleport to home</td></tr>
  <tr><td><code>/duel &lt;player&gt;</code></td><td>Challenge to a duel</td></tr>
  <tr><td><code>/tutorial</code></td><td>Replay tutorial</td></tr>
  <tr><td><code>/playtime</code></td><td>Check playtime</td></tr>
  <tr><td><code>/discord link</code></td><td>Link Discord account</td></tr>
</table>

<h3>Admin Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/cw reload</code></td><td>Reload configuration</td></tr>
  <tr><td><code>/cw admin</code></td><td>Admin panel</td></tr>
  <tr><td><code>/ban &lt;player&gt;</code></td><td>Ban a player</td></tr>
  <tr><td><code>/tempban &lt;player&gt; &lt;time&gt;</code></td><td>Temporary ban</td></tr>
  <tr><td><code>/mute &lt;player&gt; &lt;time&gt;</code></td><td>Mute a player</td></tr>
  <tr><td><code>/kick &lt;player&gt;</code></td><td>Kick a player</td></tr>
</table>
`

};

/* ================================================================
   DOM Injection — Build sections from WIKI data
   ================================================================ */
(function injectSections() {
  const main = document.querySelector('main');
  if (!main) return;

  for (const [id, html] of Object.entries(WIKI)) {
    const sec = document.createElement('div');
    sec.className = 'wiki-section';
    sec.id = id;
    sec.innerHTML = html;
    main.appendChild(sec);
  }

  const hash = window.location.hash.substring(1);
  const startId = hash && document.getElementById(hash) ? hash : 'home';
  document.getElementById(startId).classList.add('active');

  const activeLink = document.querySelector(`.nav-link[data-section="${startId}"]`);
  if (activeLink) activeLink.classList.add('active');
})();
