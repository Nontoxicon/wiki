/* ================================================================
   EarthWars Season 2  –  Complete Wiki Content
   Keys match sidebar data-section IDs.
   Self-executing: injects <div class="wiki-section"> into #wikiContent
   ================================================================ */

const WIKI = {

/* ────────────── HOME ────────────── */
home: `
<div class="home-hero">
  <h2>EarthWars Season 2</h2>
  <p class="subtitle">Build a country. Wage war. Dominate the server.</p>
</div>

<div class="stats-row">
  <div class="stat"><span class="num">80+</span><span class="label">Commands</span></div>
  <div class="stat"><span class="num">13</span><span class="label">Custom Enchants</span></div>
  <div class="stat"><span class="num">6</span><span class="label">Skill Trees</span></div>
  <div class="stat"><span class="num">21</span><span class="label">God Items</span></div>
</div>

<div class="home-intro">
  <h3>What is EarthWars?</h3>
  <p>EarthWars is a country-vs-country warfare server. You create a nation, claim land, recruit players, build defenses, and fight other countries for territory. Season 2 added skills, custom enchants, dungeons, valuable blocks, and a bunch more.</p>
</div>

<div class="feature-grid">
  <div class="feature-card">
    <span class="fc-icon">🏰</span>
    <h4>Countries</h4>
    <p>Start your own nation. Claim chunks, build walls, invite members.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">⚔️</span>
    <h4>Warfare</h4>
    <p>Declare war, siege chunks, break walls, take over rival territory.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">⭐</span>
    <h4>Skills</h4>
    <p>6 trees, 30 perks, 50 levels each. XP scales 7x per level.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">🏚️</span>
    <h4>Dungeons</h4>
    <p>PvE dungeon with parkour, torch puzzles, and a final boss fight.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">💰</span>
    <h4>Economy</h4>
    <p>Buy and sell at the shop, place bounties, gamble with coinflip.</p>
  </div>
  <div class="feature-card">
    <span class="fc-icon">🔱</span>
    <h4>God Items</h4>
    <p>21 legendary weapons, tools, and armor with unique abilities.</p>
  </div>
</div>
`,

/* ────────────── SERVER STORE — RANKS ────────────── */
"store-ranks": `
<h2>Server Ranks</h2>
<p>Grab a rank to support the server and get some nice perks. Each rank includes everything from the one below it.</p>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>

<div class="rank-card knight">
  <div class="rank-header">
    <img src="images/knight.png" alt="Knight" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#4ade80;margin:0">Knight</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Starter Rank</p>
    </div>
  </div>
  <h4>Perks</h4>
  <div class="perk-grid">
    <span class="perk"><code>/anvil</code></span>
    <span class="perk"><code>/craft</code></span>
    <span class="perk"><code>/enderchest</code></span>
    <span class="perk"><code>/grindstone</code></span>
    <span class="perk"><code>/feed</code></span>
    <span class="perk"><code>/hat</code></span>
    <span class="perk"><code>/kit knight</code></span>
    <span class="perk"><code>/repair</code> (120s cooldown)</span>
    <span class="perk"><code>/pv 3</code></span>
  </div>
  <h4>Knight Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Diamond Helmet</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Chestplate</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Leggings</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Diamond Boots</td><td>Protection II, Unbreaking I, Feather Falling I</td></tr>
    <tr><td>Diamond Sword</td><td>Sharpness II, Unbreaking I</td></tr>
    <tr><td>Diamond Pickaxe</td><td>Efficiency II, Unbreaking I</td></tr>
    <tr><td>Shield</td><td>Unbreaking I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Cobblestone, 32 Oak Planks, 32 Cooked Beef, 2 Golden Apples</p>
</div>

<div class="rank-card warlord">
  <div class="rank-header">
    <img src="images/warlord.png" alt="Warlord" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#a78bfa;margin:0">Warlord</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Knight perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk"><code>/repair</code> (60s cooldown)</span>
    <span class="perk"><code>/repairall</code> (1200s cooldown)</span>
    <span class="perk"><code>/kit warlord</code></span>
    <span class="perk"><code>/fly</code></span>
    <span class="perk"><code>/pv 5</code></span>
  </div>
  <h4>Warlord Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Diamond Helmet</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Chestplate</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Leggings</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Diamond Boots</td><td>Protection III, Unbreaking II, Feather Falling II</td></tr>
    <tr><td>Diamond Sword</td><td>Sharpness III, Unbreaking II, Fire Aspect I</td></tr>
    <tr><td>Diamond Pickaxe</td><td>Efficiency III, Unbreaking II, Fortune I</td></tr>
    <tr><td>Shield</td><td>Unbreaking II</td></tr>
    <tr><td>Bow</td><td>Power II, Unbreaking I, Infinity I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 32 Arrows, 64 Cobblestone, 64 Oak Planks, 64 Cooked Beef, 4 Golden Apples</p>
</div>

<div class="rank-card titan">
  <div class="rank-header">
    <img src="images/titan.png" alt="Titan" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#f87171;margin:0">Titan</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Warlord perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk">Keep Experience on death</span>
    <span class="perk">Priority in events &amp; tickets</span>
    <span class="perk"><code>/kit titan</code></span>
    <span class="perk"><code>/pv 5</code></span>
  </div>
  <h4>Titan Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Netherite Helmet</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Chestplate</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Leggings</td><td>Protection II, Unbreaking I</td></tr>
    <tr><td>Netherite Boots</td><td>Protection II, Unbreaking I, Feather Falling I</td></tr>
    <tr><td>Netherite Sword</td><td>Sharpness II, Unbreaking I, Sweeping Edge I</td></tr>
    <tr><td>Netherite Pickaxe</td><td>Efficiency II, Unbreaking I, Fortune I</td></tr>
    <tr><td>Shield</td><td>Unbreaking I</td></tr>
    <tr><td>Bow</td><td>Power II, Unbreaking I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Arrows, 128 Cobblestone, 64 Oak Planks, 64 Cooked Beef, 8 Golden Apples, 2 Ender Pearls</p>
</div>

<div class="rank-card conqueror">
  <div class="rank-header">
    <img src="images/conqueror.png" alt="Conqueror" class="rank-icon">
    <div>
      <h3 class="rank-title" style="color:#e87a1e;margin:0">Conqueror</h3>
      <p style="margin:2px 0;color:var(--text-muted);font-size:13px">Includes all Titan perks</p>
    </div>
  </div>
  <h4>Additional Perks</h4>
  <div class="perk-grid">
    <span class="perk">Second Chance in Wars</span>
    <span class="perk"><code>/kit conqueror</code></span>
    <span class="perk"><code>/pv 9</code></span>
  </div>
  <h4>Conqueror Kit</h4>
  <table>
    <tr><th>Item</th><th>Enchantments</th></tr>
    <tr><td>Netherite Helmet</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Chestplate</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Leggings</td><td>Protection III, Unbreaking II</td></tr>
    <tr><td>Netherite Boots</td><td>Protection III, Unbreaking II, Feather Falling II</td></tr>
    <tr><td>Netherite Sword</td><td>Sharpness III, Unbreaking II, Sweeping Edge II</td></tr>
    <tr><td>Netherite Pickaxe</td><td>Efficiency III, Unbreaking II, Fortune II</td></tr>
    <tr><td>Netherite Axe</td><td>Sharpness II, Efficiency III</td></tr>
    <tr><td>Shield</td><td>Unbreaking II</td></tr>
    <tr><td>Bow</td><td>Power III, Unbreaking II, Flame I</td></tr>
  </table>
  <p style="color:var(--text-muted);font-size:13px"><strong>Also includes:</strong> 64 Arrows, 192 Cobblestone, 128 Oak Planks, 64 Cooked Beef, 16 Golden Apples, 1 Enchanted Golden Apple, 4 Ender Pearls, 1 Totem of Undying</p>
</div>
`,

/* ────────────── SERVER STORE — GOD LOOT BOX ────────────── */
"store-lootbox": `
<h2>God Loot Box</h2>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>
<p>The <strong>God Loot Box</strong> is the best crate you can buy. You open it and get <strong>3 random God Items</strong> — legendary gear with unique abilities and maxed enchants.</p>

<div class="card">
  <h4>What You Get</h4>
  <ul>
    <li><strong>3 Random God Items</strong> per box from the pool below</li>
    <li>Every God Item has a custom ability, maxed enchants, and is unbreakable</li>
    <li>The pool includes swords, axes, bows, armor sets, pickaxes, elytra, and more</li>
  </ul>
</div>

<h3>How It Works</h3>
<ol>
  <li>Buy a God Loot Box from the store</li>
  <li>You get a <strong>Loot Box key</strong> in-game</li>
  <li>Run <code>/lootboxes</code> to open the crate menu</li>
  <li>Watch it spin and claim your 3 God Items</li>
</ol>

<h3>God Items in the Loot Pool</h3>

<h4>Weapons</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#aaffe0">Wind Blade</strong></td><td>Netherite Sword</td><td><strong>Jetstream</strong> — Launch into the sky and take controlled flight. Enemies near landing take damage. <em>(16s CD)</em></td></tr>
  <tr><td><strong style="color:#64ffd8">Serpent's Fang</strong></td><td>Netherite Sword</td><td><strong>Tidal Barrage</strong> — Rapid 3-hit combo on attack. <strong>Riptide Lunge</strong> — Surge through water striking all enemies. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#ff8c00">Ember Edge</strong></td><td>Netherite Sword</td><td><strong>Scorching Strikes</strong> — Sets targets on fire. <strong>Inferno Burst</strong> — 3-block fire AoE. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#b400c8">Shadow Blade</strong></td><td>Netherite Sword</td><td><strong>Backstab</strong> — +25% damage from behind. <strong>Ghastly Step</strong> — Invisibility + Speed II for 4s. <em>(20s CD)</em></td></tr>
  <tr><td><strong style="color:#ff6040">Soulstealer</strong></td><td>Netherite Sword</td><td><strong>Crimson Pact</strong> — Kills restore HP/hunger + Speed. <strong>Deathbringer</strong> — AoE damage + knockback. <em>(25s CD)</em></td></tr>
  <tr><td><strong style="color:#50a0f0">Frostbite</strong></td><td>Netherite Axe</td><td><strong>Chilling Strikes</strong> — 20% chance Slowness I. <strong>Frost Nova</strong> — AoE Slowness II + Mining Fatigue. <em>(18s CD)</em></td></tr>
  <tr><td><strong style="color:#dc64ff">Gravity Bow</strong></td><td>Bow</td><td><strong>Black Hole</strong> — Arrow creates a gravity well pulling in all nearby enemies. <em>(45s CD)</em></td></tr>
  <tr><td><strong style="color:#ffe080">Giant Broadsword</strong></td><td>Netherite Sword</td><td><strong>Unbreakable</strong> — Channel for 1s, then gain Strength, Resistance, and heal every 2s for 10s. Can overheal. <em>(70s CD)</em></td></tr>
</table>

<h4>Tools</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#c8a050">Terraforge</strong></td><td>Netherite Pickaxe</td><td><strong>Miner's Instinct</strong> — Insta-breaks all blocks. <strong>Earthquake</strong> — AoE damage + launch enemies. <em>(15s CD)</em></td></tr>
</table>

<h4>Armor — Titan Set</h4>
<p>Wearing the full set gives you permanent <strong>Resistance I</strong>.</p>
<table>
  <tr><th>Item</th><th>Slot</th><th>Passive</th></tr>
  <tr><td><strong style="color:#ffc830">Titan's Crown</strong></td><td>Helmet</td><td><strong>Titan's Sight</strong> — Night Vision in dark areas</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Guard</strong></td><td>Chestplate</td><td><strong>Titan's Heart</strong> — +1 heart max health</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Stride</strong></td><td>Leggings</td><td><strong>Titan's Stride</strong> — Speed I while sprinting</td></tr>
  <tr><td><strong style="color:#ffc830">Titan's Treads</strong></td><td>Boots</td><td><strong>Titan's Landing</strong> — No fall damage up to 10 blocks</td></tr>
</table>

<h4>Special</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#d0b0ff">Celestial Wings</strong></td><td>Elytra</td><td><strong>Skyfall Boost</strong> — Press SHIFT while gliding to propel forward (no rockets needed). <strong>Cloud Walker</strong> — Reduced fall damage.</td></tr>
</table>

<div class="info-box warn">
  <strong>Note:</strong> God Items are permanent and can't break. You can only get them from Loot Boxes or special events — they can't be crafted.
</div>
`,

/* ────────────── SERVER STORE — SPRING KEY ────────────── */
"store-spring": `
<h2>Spring Key</h2>
<div class="info-box success">
  <strong>Purchase at:</strong> <a href="https://store.earthwarsmp.com" target="_blank" style="color:var(--green);font-weight:600">store.earthwarsmp.com</a>
</div>
<p>The <strong>Spring Key</strong> is a seasonal crate key that gives you one of the exclusive <strong>Spring God Items</strong> — a nature-themed set of weapons and the full <strong>Bloomguard Armor Set</strong>.</p>

<div class="card">
  <h4>What You Get</h4>
  <ul>
    <li>A random <strong>Spring God Item</strong> from the pool below</li>
    <li>Spring items focus on team play — healing, buffs, and crowd control</li>
    <li>The Bloomguard set has a <strong>set bonus</strong> that heals nearby allies</li>
  </ul>
</div>

<h3>Spring God Items</h3>

<h4>Weapons</h4>
<table>
  <tr><th>Item</th><th>Type</th><th>Ability</th></tr>
  <tr><td><strong style="color:#f06498">Briar Thorn</strong></td><td>Netherite Sword</td><td><strong>Spreading Thorns</strong> — Marks enemies; allies popping the mark deal 1.5 bonus hearts + Slowness. <strong>Vine Snare</strong> — Root all enemies within 4 blocks for 2.5s, allies gain Speed I. <em>(12s CD)</em></td></tr>
  <tr><td><strong style="color:#f58282">Harvest Scythe</strong></td><td>Netherite Hoe</td><td><strong>Reaping Arc</strong> — Sweeping hits heal 0.5 hearts per enemy hit. <strong>Petal Storm</strong> — 6-block petal ring dealing 2 hearts + knockback + Blindness. <em>(15s CD)</em></td></tr>
  <tr><td><strong style="color:#e63290">Seedling Staff</strong></td><td>Netherite Shovel</td><td><strong>Bloom Barrier</strong> — Place a 3x3 leaf wall at target block (within 10 blocks). Lasts 8s. Blocks arrows and line of sight. <em>(25s CD)</em></td></tr>
</table>

<h4>Armor — Bloomguard Set</h4>
<p>Wearing all 4 pieces gives <strong>Regeneration I</strong> to you and all allies within 8 blocks.</p>
<table>
  <tr><th>Item</th><th>Slot</th><th>Passive</th></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Crown</strong></td><td>Helmet</td><td><strong>War Bloom</strong> — When you take damage, allies within 6 blocks gain Absorption for 3s <em>(8s CD)</em></td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Plate</strong></td><td>Chestplate</td><td><strong>Bark Skin</strong> — Below 5 hearts, gain Resistance I for 2s when hit <em>(6s CD)</em></td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Greaves</strong></td><td>Leggings</td><td><strong>Rally Roots</strong> — While sprinting, allies within 5 blocks also get Speed I</td></tr>
  <tr><td><strong style="color:#ff50aa">Bloomguard Roots</strong></td><td>Boots</td><td><strong>Grounded</strong> — Immune to knockback while sneaking</td></tr>
</table>

<div class="info-box">
  <strong>Tip:</strong> Bloomguard is built for team fights. Run the full set with Briar Thorn and let your allies pop the thorn marks while you keep everyone alive.
</div>
`,

/* ────────────── QUICK START ────────────── */
quickstart: `
<h2>Quick Start Guide</h2>
<p>Here's how to get going in about five minutes.</p>

<h3>Step 1 — Join &amp; Tutorial</h3>
<p>When you first hop on, you'll land in the <strong>Safe Zone</strong>. There's a quick tutorial that walks you through the basics — finish it to grab some starter rewards.</p>

<h3>Step 2 — Create or Join a Country</h3>
<ul>
  <li><code>/country create &lt;name&gt;</code> — Start your own nation</li>
  <li><code>/country join &lt;name&gt;</code> — Ask to join an existing one</li>
</ul>

<h3>Step 3 — Claim Territory</h3>
<p>Stand in a chunk and run <code>/c claim</code>. Your country grows chunk by chunk. Throw up walls with <code>/c wall</code> for some extra protection.</p>

<h3>Step 4 — Grow &amp; Fight</h3>
<ul>
  <li>Mine <strong>Valuable Blocks</strong> to unlock country perks</li>
  <li>Level up <strong>Skills</strong> with <code>/skills</code></li>
  <li>Get your hands on <strong>Custom Enchants</strong> and <strong>God Items</strong></li>
  <li>Declare <strong>War</strong> on other nations with <code>/war declare &lt;country&gt;</code></li>
</ul>

<div class="info-box success">Tip: Open the shop with <code>/shop</code> to buy and sell resources early on.</div>
`,

/* ────────────── COUNTRIES ────────────── */
countries: `
<h2>Country System</h2>
<p>Countries are the backbone of EarthWars. You team up with other players, claim land, build stuff, and go to war.</p>

<h3>Creating a Country</h3>
<div class="card">
  <p><code>/country create &lt;name&gt;</code> — Makes a new country. You become the <strong>Leader</strong>.</p>
  <p>Names need to be 3–20 characters, letters and numbers only, and can't already be taken.</p>
</div>

<h3>Country Info</h3>
<ul>
  <li><code>/c info</code> — Check your country's stats</li>
  <li><code>/c info &lt;name&gt;</code> — Look up another country</li>
  <li><code>/c list</code> — See all countries</li>
  <li><code>/c online</code> — See who's online in your country</li>
</ul>

<h3>Managing Members</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite someone to your country</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Remove a member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Move them up a rank</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Move them down a rank</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave your country</td></tr>
  <tr><td><code>/c disband</code></td><td>Delete the country (Leader only)</td></tr>
</table>

<h3>Country Settings</h3>
<ul>
  <li><code>/c setspawn</code> — Set where members teleport to</li>
  <li><code>/c spawn</code> — Teleport to country spawn</li>
  <li><code>/c rename &lt;name&gt;</code> — Change the country name</li>
  <li><code>/c description &lt;text&gt;</code> — Set a public description</li>
</ul>
`,

/* ────────────── RANKS ────────────── */
ranks: `
<h2>Ranks &amp; Permissions</h2>
<p>Every country has a rank system that controls what each member is allowed to do.</p>

<h3>Default Ranks</h3>
<table>
  <tr><th>Rank</th><th>Permissions</th></tr>
  <tr><td><span class="badge leader">Leader</span></td><td>Full control — members, wars, ranks, disband, everything</td></tr>
  <tr><td><span class="badge admin">Co-Leader</span></td><td>Invite/kick, manage claims, build walls, set ranks below co-leader</td></tr>
  <tr><td><strong>General</strong></td><td>Claim chunks, build, interact, access country storage</td></tr>
  <tr><td><strong>Member</strong></td><td>Build and interact in claimed territory</td></tr>
  <tr><td><strong>Recruit</strong></td><td>Very limited — can't break, place, or interact unless given permission</td></tr>
</table>

<h3>Rank Permissions</h3>
<p>Leaders and Co-Leaders can tweak what each rank is allowed to do:</p>
<ul>
  <li><strong>BUILD</strong> — Place blocks in territory</li>
  <li><strong>BREAK</strong> — Break blocks in territory</li>
  <li><strong>INTERACT</strong> — Use doors, chests, buttons, etc.</li>
  <li><strong>CLAIM</strong> — Claim new chunks</li>
  <li><strong>INVITE</strong> — Invite new members</li>
</ul>

<div class="info-box warn">Recruits start with zero permissions. Leaders have to manually give them access.</div>
`,

/* ────────────── GOVERNMENT ────────────── */
government: `
<h2>Government Types</h2>
<p>Pick a government type for your country to get different passive bonuses.</p>

<table>
  <tr><th>Type</th><th>Bonus</th></tr>
  <tr><td>Democracy</td><td>+10% tax income, members can vote on decisions</td></tr>
  <tr><td>Monarchy</td><td>+15% claim radius, leader gets bonus perks</td></tr>
  <tr><td>Dictatorship</td><td>+20% war damage, faster declarations</td></tr>
  <tr><td>Republic</td><td>Balanced bonuses across the board</td></tr>
  <tr><td>Anarchy</td><td>No upkeep costs, but no diplomatic bonuses either</td></tr>
</table>

<p>Switch with <code>/c government &lt;type&gt;</code>. There's a 7-day cooldown between changes.</p>
`,

/* ────────────── CLAIMS ────────────── */
claims: `
<h2>Claims &amp; Territory</h2>
<p>You claim land in 16x16 chunks. How much you can hold depends on your country's power.</p>

<h3>Claiming Land</h3>
<ul>
  <li><code>/c claim</code> — Claim the chunk you're standing in</li>
  <li><code>/c unclaim</code> — Give up a chunk</li>
  <li><code>/c autoclaim</code> — Auto-claim chunks as you walk around</li>
  <li><code>/c map</code> — See a text map of nearby claims</li>
</ul>

<h3>Claim Rules</h3>
<div class="card">
  <ul>
    <li>New claims have to be <strong>next to</strong> territory you already own</li>
    <li>You can't claim inside another country's land</li>
    <li>Max claims depend on how many members you have and your perks</li>
    <li>Valuable Blocks can bump up your claim limit</li>
  </ul>
</div>

<h3>Fly in Territory</h3>
<p>If your country unlocks <strong>Claim Flight</strong> (from Valuable Blocks), everyone can fly in owned territory. Toggle it with <code>/c fly</code>.</p>
`,

/* ────────────── WALLS ────────────── */
walls: `
<h2>Walls &amp; Defense</h2>
<p>Walls add extra defense during wars. They don't give you more territory, they just protect what you've got.</p>

<h3>Building Walls</h3>
<ul>
  <li><code>/c wall</code> — Opens the wall management menu</li>
  <li>Walls go around your claimed territory</li>
  <li>They have levels that determine how much HP they have</li>
</ul>

<h3>Wall Mechanics in War</h3>
<div class="card">
  <h4>Attack Order</h4>
  <ol>
    <li>Attackers have to <strong>siege all outer chunks</strong> first (outside the wall)</li>
    <li>Only then can the wall actually be <strong>damaged</strong></li>
    <li>Breaking the wall does <strong>NOT</strong> give you chunks</li>
    <li>Attackers still need to <strong>siege the inner chunks</strong> after the wall goes down</li>
  </ol>
</div>

<h3>Wall HP Boss Bar</h3>
<p>When someone's attacking a wall during war, a boss bar shows up with the wall's HP, level, and which country owns it. The bar changes color as HP drops.</p>

<div class="info-box warn">Walls are defensive only. Breaking them never gives you territory automatically.</div>
`,

/* ────────────── DIPLOMACY ────────────── */
diplomacy: `
<h2>Diplomacy &amp; Alliances</h2>
<p>You can ally up with other countries, set up trade deals, or just mark them as enemies.</p>

<h3>Alliance System</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Send an alliance request</td></tr>
  <tr><td><code>/c unally &lt;country&gt;</code></td><td>Break an alliance</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark as enemy</td></tr>
</table>

<h3>Alliance Benefits</h3>
<ul>
  <li>Allied players can't hurt each other</li>
  <li>Shared territory access (you can configure this)</li>
  <li>Joint war declarations</li>
</ul>

<h3>Espionage</h3>
<p>You can scout enemy territory to see their claim layout and wall HP. Costs in-game money.</p>
`,

/* ────────────── VISAS ────────────── */
visas: `
<h2>Visas &amp; Greencards</h2>
<p>Let players from other countries into your territory without them actually joining.</p>

<h3>Visa Types</h3>
<ul>
  <li><strong>Visitor Visa</strong> — Can walk around, but can't build anything</li>
  <li><strong>Work Visa</strong> — Can build and interact in specific plots</li>
  <li><strong>Greencard</strong> — Basically a full member without actually joining the country</li>
</ul>

<h3>Managing Visas</h3>
<ul>
  <li><code>/c visa grant &lt;player&gt; &lt;type&gt;</code> — Give someone a visa</li>
  <li><code>/c visa revoke &lt;player&gt;</code> — Take it away</li>
  <li><code>/c visa list</code> — See all active visas</li>
</ul>
`,

/* ────────────── TAXES ────────────── */
taxes: `
<h2>Taxes &amp; Treasury</h2>
<p>Running a country costs money. Here's how the treasury works.</p>

<h3>Upkeep</h3>
<ul>
  <li>There's a daily cost based on how many chunks you own</li>
  <li>It comes out of the country treasury</li>
  <li>If the treasury hits zero, you start losing territory</li>
</ul>

<h3>Tax System</h3>
<ul>
  <li><code>/c tax set &lt;%&gt;</code> — Set the tax rate (Leader only)</li>
  <li>A percentage of what your members earn goes into the treasury</li>
  <li><code>/c deposit &lt;amount&gt;</code> — Put money in the treasury yourself</li>
  <li><code>/c withdraw &lt;amount&gt;</code> — Take money out (Leader/Co-Leader)</li>
</ul>
`,

/* ────────────── DECLINE ────────────── */
decline: `
<h2>Decline &amp; Annexation</h2>
<p>If a country goes inactive, it slowly falls apart.</p>

<h3>Decline Mechanics</h3>
<ul>
  <li>If every member is offline for <strong>7+ days</strong>, the country goes into <strong>Decline</strong></li>
  <li>Declining countries lose 1 chunk per day from the edges</li>
  <li>Anyone logging back in stops the decline right away</li>
</ul>

<h3>Annexation</h3>
<p>If a country hits 0 claims, it gets disbanded automatically. Nearby countries can grab the freed chunks.</p>
`,

/* ────────────── PLOTS ────────────── */
plots: `
<h2>Plots &amp; Colonies</h2>

<h3>Plots</h3>
<p>Leaders can split territory into plots and assign them to individual members.</p>
<ul>
  <li><code>/c plot create</code> — Make a plot in the chunk you're in</li>
  <li><code>/c plot assign &lt;player&gt;</code> — Give it to someone</li>
  <li><code>/c plot remove</code> — Delete the plot</li>
</ul>
<p>Plot owners can build, break, and interact freely regardless of their rank.</p>

<h3>Colonies</h3>
<p>Colonies are claim clusters that aren't connected to your main territory. They cost more upkeep, but they're useful as forward bases during wars.</p>
`,

/* ────────────── WAR ────────────── */
war: `
<h2>War System</h2>
<p>War is how you take territory from other countries. It plays out in phases so there's some actual strategy involved.</p>

<h3>Declaring War</h3>
<div class="card">
  <p><code>/war declare &lt;country&gt;</code> — Costs money. The other side gets a warning, and after a prep period the war goes <strong>ACTIVE</strong>.</p>
</div>

<h3>War Phases</h3>
<table>
  <tr><th>Phase</th><th>Description</th></tr>
  <tr><td>Preparation</td><td>Both sides get a heads up — gear up</td></tr>
  <tr><td>Active</td><td>Attackers can siege outer chunks and hit walls</td></tr>
  <tr><td>Wall Breach</td><td>Walls are down, inner territory is exposed</td></tr>
  <tr><td>Resolution</td><td>War ends when objectives are met or time runs out</td></tr>
</table>

<h3>War Flow (with Walls)</h3>
<ol>
  <li>Siege the outer chunks first (outside the walls)</li>
  <li>Once those are yours, start hitting the wall</li>
  <li>Wall goes down and inner territory is exposed</li>
  <li>Siege inner chunks to finish the job</li>
</ol>

<h3>Commands</h3>
<ul>
  <li><code>/war declare &lt;country&gt;</code> — Start a war</li>
  <li><code>/war status</code> — Check active wars</li>
  <li><code>/war continue</code> — Pay to keep the war going</li>
  <li><code>/war surrender</code> — Give up (losing side)</li>
</ul>

<div class="info-box danger">If they have walls, you HAVE to siege outer chunks first. Walls can only take damage after the outer territory is captured.</div>
`,

/* ────────────── SIEGES ────────────── */
siege: `
<h2>Sieges</h2>
<p>Sieges are how you actually capture chunks during a war.</p>

<h3>Starting a Siege</h3>
<ul>
  <li><code>/siege start</code> — Start sieging the chunk you're standing in</li>
  <li>Has to be enemy territory during an active war</li>
  <li>Outer chunks go first — can't touch walls until those are done</li>
</ul>

<h3>Siege Mechanics</h3>
<div class="card">
  <ul>
    <li>Sieging takes time — you need to stay in the chunk</li>
    <li>Defenders can contest by showing up</li>
    <li>If the attacker dies or leaves, the siege stalls</li>
    <li>Once it finishes, the chunk is yours</li>
  </ul>
</div>
`,

/* ────────────── COMBAT ────────────── */
combat: `
<h2>Combat &amp; PvP</h2>
<p>PvP has some custom mechanics on top of vanilla to keep fights interesting.</p>

<h3>Combat Tag</h3>
<ul>
  <li>Hit someone (or get hit) and you're <strong>in combat</strong> for 15 seconds</li>
  <li>Can't run into safe zones while tagged</li>
  <li>Log out in combat = instant death</li>
</ul>

<h3>Ender Pearl Cooldown</h3>
<div class="card">
  <p>Ender pearls have a <strong>10-second cooldown</strong> during combat. No pearl spam allowed.</p>
</div>

<h3>Moshpit Zones</h3>
<p>Free-for-all PvP arenas where protection is turned off. Go in, fight, done.</p>

<h3>Anti-Collision</h3>
<p>Player collision is turned off server-wide so nobody can push-exploit you.</p>
`,

/* ────────────── BOMBS ────────────── */
bombs: `
<h2>TNT &amp; Bombs</h2>
<p>Explosives are useful in wars for busting through walls.</p>

<h3>TNT Usage</h3>
<ul>
  <li>TNT damages enemy walls during active wars</li>
  <li>Damage scales with wall level</li>
  <li>Doesn't work in safe zones</li>
  <li>Your own territory is protected from TNT</li>
</ul>

<h3>Bombs</h3>
<div class="card">
  <p>Special craftable bombs do extra wall damage. Buy them from the shop or craft them with rare materials.</p>
</div>
`,

/* ────────────── SKILLS ────────────── */
skills: `
<h2>Skills (30 Perks)</h2>
<p>Level up your character with skill trees and unlock perks as you go.</p>

<h3>Opening the Menu</h3>
<p><code>/skills</code> — Opens the skill GUI</p>

<h3>How It Works</h3>
<ul>
  <li>Earn XP by mining, fighting, farming, and doing stuff on the server</li>
  <li>Spend skill points on perks across 6 trees</li>
  <li>Each tree has 50 levels with 7x XP scaling</li>
  <li>30 perks total to unlock</li>
</ul>

<h3>Skill Trees</h3>
<table>
  <tr><th>Tree</th><th>Example Perks</th></tr>
  <tr><td>Combat</td><td>More melee damage, lifesteal, crit chance</td></tr>
  <tr><td>Mining</td><td>Auto-smelt, fortune boost, haste</td></tr>
  <tr><td>Farming</td><td>Auto-replant, double drops, growth boost</td></tr>
  <tr><td>Defense</td><td>Damage reduction, fire resist, knockback resist</td></tr>
  <tr><td>Archery</td><td>Arrow damage, multi-shot, tracking</td></tr>
  <tr><td>Utility</td><td>Speed boost, night vision, extra hearts</td></tr>
</table>

<div class="info-box">Your skill progress saves per player and sticks between sessions.</div>
`,

/* ────────────── VALUABLE BLOCKS ────────────── */
valuable: `
<h2>Valuable Blocks</h2>
<p>Place diamond, emerald, netherite, and other valuable blocks in your territory to unlock perks for the whole country.</p>

<h3>How It Works</h3>
<ol>
  <li>Place valuable blocks (diamond, emerald, netherite, etc.) in your territory</li>
  <li>The server keeps track of how many your country has</li>
  <li>Hit certain milestones and everyone gets passive perks</li>
</ol>

<h3>Available Perks</h3>
<table>
  <tr><th>Perk</th><th>Tier</th><th>Effect</th></tr>
  <tr><td>Extra Claims</td><td>Low</td><td>Higher max claim limit</td></tr>
  <tr><td>Member Slots</td><td>Mid</td><td>More people can join</td></tr>
  <tr><td>Defense Boost</td><td>High</td><td>Take less damage in your own territory</td></tr>
  <tr><td>Claim Flight</td><td>High</td><td>Everyone can fly in owned territory (turns on automatically)</td></tr>
</table>

<div class="info-box success">Claim Flight kicks in automatically when you enter your territory. Toggle it with <code>/c fly</code>.</div>
`,

/* ────────────── CUSTOM ENCHANTS ────────────── */
enchants: `
<h2>Custom Enchants</h2>
<p>13 custom enchantments on top of the vanilla ones.</p>

<h3>Obtaining</h3>
<ul>
  <li>Buy books from <code>/shop</code></li>
  <li>Find them in <strong>Loot Boxes</strong></li>
  <li>Get them as <strong>dungeon rewards</strong></li>
</ul>

<h3>Enchant Books</h3>
<div class="card">
  <p>Custom enchant books show all the details in their lore:</p>
  <ul>
    <li><strong>Enchant Name &amp; Level</strong></li>
    <li><strong>Description</strong> — What it does</li>
    <li><strong>Max Level</strong></li>
    <li><strong>Applies To</strong> — Which items it works on (Swords, Pickaxes, Armor, etc.)</li>
  </ul>
  <p>Drag the book onto an item in an anvil to apply it.</p>
</div>

<h3>Enchant List</h3>
<table>
  <tr><th>Enchant</th><th>Effect</th><th>Applies To</th></tr>
  <tr><td>Gravity Bow</td><td>Pulls targets toward you (+35% damage)</td><td>Bows</td></tr>
  <tr><td>Replant</td><td>Auto-replants crops when you harvest</td><td>Hoes</td></tr>
  <tr><td>Earthquake</td><td>AoE ground slam damage</td><td>Swords, Axes</td></tr>
  <tr><td>Tracking</td><td>Arrows home in on the nearest enemy</td><td>Bows</td></tr>
  <tr><td>Lifesteal</td><td>Heal when you hit someone</td><td>Swords</td></tr>
  <tr><td>Venom</td><td>Poisons the target on hit</td><td>Swords</td></tr>
  <tr><td>Thunderstrike</td><td>Chance to strike lightning on hit</td><td>Swords, Axes</td></tr>
  <tr><td>Frost Aspect</td><td>Slows enemies on hit</td><td>Swords</td></tr>
  <tr><td>Explosive</td><td>Small explosion on arrow impact</td><td>Bows</td></tr>
  <tr><td>Telepathy</td><td>Mined blocks go straight to your inventory</td><td>Pickaxes</td></tr>
  <tr><td>Auto-Smelt</td><td>Ores auto-smelt when mined</td><td>Pickaxes</td></tr>
  <tr><td>Harvester</td><td>Harvests crops in a big area</td><td>Hoes</td></tr>
  <tr><td>Soulbound</td><td>Keep the item when you die</td><td>Any</td></tr>
</table>
`,

/* ────────────── DUNGEONS ────────────── */
dungeons: `
<h2>Dungeons</h2>
<p>PvE content where you and your party fight through a dungeon and take on a boss at the end.</p>

<h3>How to Enter</h3>
<ul>
  <li>Find dungeon portals in the world or use <code>/dungeon</code></li>
  <li>Bring a party of 1–4 players</li>
  <li>Make your way through parkour, torch rooms, and combat waves</li>
</ul>

<h3>The Wraith (Final Boss)</h3>
<div class="card">
  <h4>Boss Abilities</h4>
  <table>
    <tr><th>Ability</th><th>Description</th></tr>
    <tr><td>Swipe Attack</td><td>AoE melee — hits everyone within 4.5 blocks</td></tr>
    <tr><td>Teleport</td><td>Warps to its target if they're 2+ blocks away</td></tr>
    <tr><td>Soul Drain</td><td>Channels damage and heals itself</td></tr>
    <tr><td>Spectral Strike</td><td>Big single-target hit</td></tr>
    <tr><td>Soul Pillars</td><td>Summons pillars — <strong>only crits can damage them</strong></td></tr>
    <tr><td>Enrage</td><td>At low HP, damage and speed ramp up hard</td></tr>
  </table>
</div>

<div class="info-box danger">Soul Pillars can only be broken with critical hits! Jump and swing on the way down.</div>

<h3>Loot</h3>
<p>Kill the boss and it drops God Items, enchant books, rare materials, and money.</p>
`,

/* ────────────── PLAYTIME ────────────── */
playtime: `
<h2>Playtime Rewards</h2>
<p>You get rewards just for being on the server.</p>

<ul>
  <li>Rewards drop at certain playtime milestones</li>
  <li>Stuff like money, items, crate keys, and cosmetics</li>
  <li>Check your time with <code>/playtime</code></li>
</ul>
`,

/* ────────────── GOD ITEMS ────────────── */
goditems: `
<h2>God Items (21+)</h2>
<p>Legendary gear with custom abilities that go way beyond what vanilla offers.</p>

<h3>How to Get Them</h3>
<ul>
  <li>Dungeon boss drops</li>
  <li>Loot Box rewards</li>
  <li>Event prizes</li>
  <li>Admin shop (limited stock)</li>
</ul>

<h3>Item Tiers</h3>
<table>
  <tr><th>Tier</th><th>Color</th><th>Power Level</th></tr>
  <tr><td>Legendary</td><td style="color:var(--gold)">Gold</td><td>Top tier — game-changing abilities</td></tr>
  <tr><td>Epic</td><td style="color:var(--accent-light)">Orange</td><td>Strong unique effects</td></tr>
  <tr><td>Rare</td><td style="color:var(--accent)">Orange</td><td>Solid passive bonuses</td></tr>
</table>

<div class="info-box">God items are soulbound. Can't drop them, can't trade them. They stay with you through death.</div>
`,

/* ────────────── LOOT BOXES ────────────── */
lootbox: `
<h2>Loot Boxes</h2>
<p>Crates with randomized loot ranging from basic stuff to God Items.</p>

<h3>Types</h3>
<ul>
  <li><strong>Common Crate</strong> — Basic resources and money</li>
  <li><strong>Rare Crate</strong> — Custom enchant books and rare items</li>
  <li><strong>Legendary Crate</strong> — God Items and big money prizes</li>
</ul>

<h3>Getting Keys</h3>
<ul>
  <li>Playtime rewards</li>
  <li>Event prizes</li>
  <li>Server store</li>
  <li>Vote rewards</li>
</ul>
`,

/* ────────────── KITS ────────────── */
kits: `
<h2>Kits</h2>
<p>Pre-made item sets you can claim on a cooldown.</p>
<ul>
  <li><code>/kit</code> — Opens the kit menu</li>
  <li>Which kits you see depends on your rank and perks</li>
  <li>Each kit has its own cooldown (e.g., starter kit is 24h)</li>
</ul>
`,

/* ────────────── VOUCHERS ────────────── */
vouchers: `
<h2>Vouchers</h2>
<p>Right-click these items to redeem rewards.</p>

<h3>Types</h3>
<ul>
  <li><strong>Money Voucher</strong> — Gives you currency</li>
  <li><strong>XP Voucher</strong> — Gives you experience levels</li>
  <li><strong>Rank Voucher</strong> — Temporary rank upgrade</li>
  <li><strong>Crate Key Voucher</strong> — Turns into a loot box key</li>
</ul>
<p>Just hold it and right-click to use.</p>
`,

/* ────────────── WANDS ────────────── */
wands: `
<h2>Wands</h2>
<p>Wands help you build stuff faster.</p>

<div class="card">
  <h4>Building Wand</h4>
  <ul>
    <li>Right-click a block face to extend in that direction</li>
    <li>Uses matching blocks from your inventory</li>
    <li>Preview mode shows where blocks will go before you confirm</li>
    <li>Only works in your own claimed territory</li>
  </ul>
</div>
`,

/* ────────────── MOB CATCHER ────────────── */
mobcatcher: `
<h2>Mob Catcher</h2>
<p>Catch mobs and move them wherever you want in your territory.</p>

<ul>
  <li>Right-click a mob with the Mob Catcher egg to pick it up</li>
  <li>Right-click the ground to release it</li>
  <li>Works on most passive and neutral mobs</li>
  <li>Can't catch hostile mobs or bosses</li>
</ul>
`,

/* ────────────── SPAWNERS ────────────── */
spawners: `
<h2>Spawners</h2>
<p>You can pick up spawners and place them for mob farming.</p>

<h3>Getting Spawners</h3>
<ul>
  <li>Mine them with <strong>Silk Touch</strong> to pick them up</li>
  <li>Buy them from the shop</li>
</ul>

<h3>Rules</h3>
<ul>
  <li>Only work in claimed territory</li>
  <li>There's a limit per chunk</li>
  <li>Can be upgraded for faster spawn rates</li>
</ul>
`,

/* ────────────── ECONOMY ────────────── */
economy: `
<h2>Economy &amp; Shop</h2>
<p>Everything runs on in-game currency that you earn from playing.</p>

<h3>Making Money</h3>
<ul>
  <li>Sell items at <code>/shop</code></li>
  <li>Kill mobs and players</li>
  <li>Do quests and events</li>
  <li>Collect bounties</li>
</ul>

<h3>Shop Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open the buy/sell menu</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell what you're holding</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell everything sellable in your inventory</td></tr>
  <tr><td><code>/bal</code></td><td>Check your balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amount&gt;</code></td><td>Send money to someone</td></tr>
</table>
`,

/* ────────────── BOUNTIES ────────────── */
bounty: `
<h2>Bounties</h2>
<p>Put a price on someone's head and let other players collect.</p>

<ul>
  <li><code>/bounty set &lt;player&gt; &lt;amount&gt;</code> — Place a bounty</li>
  <li><code>/bounty list</code> — See active bounties</li>
  <li>Kill someone with a bounty and you get the reward</li>
</ul>
`,

/* ────────────── COINFLIP ────────────── */
coinflip: `
<h2>Coinflip</h2>
<p>50/50 money gamble against another player.</p>

<ul>
  <li><code>/coinflip &lt;amount&gt;</code> — Put up a wager</li>
  <li>Someone else accepts the challenge</li>
  <li>Winner takes all (minus a small server tax)</li>
</ul>
`,

/* ────────────── TRADE ────────────── */
trade: `
<h2>Trade System</h2>
<p>Safe player-to-player trading with no scam risk.</p>

<div class="card">
  <p><code>/trade &lt;player&gt;</code> — Send a trade request</p>
  <p>A GUI opens where both players put in items and money. Both sides have to confirm before anything goes through.</p>
</div>
`,

/* ────────────── CHAT ────────────── */
chat: `
<h2>Chat System</h2>
<p>Multiple chat channels so you're not screaming everything into global.</p>

<table>
  <tr><th>Channel</th><th>Command</th><th>Who Sees It</th></tr>
  <tr><td>Global</td><td><code>/g &lt;msg&gt;</code></td><td>Everyone</td></tr>
  <tr><td>Country</td><td><code>/cc &lt;msg&gt;</code></td><td>Your country only</td></tr>
  <tr><td>Alliance</td><td><code>/ac &lt;msg&gt;</code></td><td>Allied countries</td></tr>
  <tr><td>Local</td><td><code>/l &lt;msg&gt;</code></td><td>Players within 100 blocks</td></tr>
</table>
`,

/* ────────────── DUELS ────────────── */
duel: `
<h2>Duels</h2>
<p>1v1 someone in a fair fight.</p>

<ul>
  <li><code>/duel &lt;player&gt;</code> — Challenge someone</li>
  <li>Both players get teleported to an arena</li>
  <li>Your inventory is saved and restored after</li>
  <li>Winner gets money</li>
</ul>
`,

/* ────────────── RESUMES ────────────── */
resume: `
<h2>Resumes &amp; Recruitment</h2>
<p>Looking for a country? Post a resume. Running a country? Browse available players.</p>
<ul>
  <li>Post your resume with your skills and what you're good at</li>
  <li>Country leaders can browse players who are looking</li>
  <li>Send recruitment invites straight from the menu</li>
</ul>
`,

/* ────────────── POLLS ────────────── */
polls: `
<h2>Polls</h2>
<p>Country leaders can set up polls to let members vote on things.</p>
<ul>
  <li>Great for countries running a Democracy government</li>
  <li>Results show up after the poll closes</li>
</ul>
`,

/* ────────────── DISCORD ────────────── */
discord: `
<h2>Discord Link</h2>
<p>Connect your Minecraft account to Discord for some cross-platform stuff.</p>

<h3>What You Get</h3>
<ul>
  <li>Discord roles that match your in-game rank</li>
  <li>Country channels on Discord</li>
  <li>War notifications and alerts</li>
  <li>Chat that goes between Discord and the server</li>
</ul>

<p>Run <code>/discord link</code> in-game to set it up.</p>
`,

/* ────────────── EVENTS ────────────── */
events: `
<h2>Server Events</h2>
<p>Regular events with prizes worth fighting for.</p>

<table>
  <tr><th>Event</th><th>Description</th></tr>
  <tr><td>Capture the Flag</td><td>Team-based CTF, country vs country</td></tr>
  <tr><td>King of the Hill</td><td>Hold a spot to rack up points</td></tr>
  <tr><td>Boss Raids</td><td>Server-wide boss fight, shared loot</td></tr>
  <tr><td>Build Competition</td><td>Judged building contests</td></tr>
  <tr><td>War Games</td><td>Practice wars with no real consequences</td></tr>
</table>

<p>Check <code>/events</code> for what's coming up. We also post announcements on Discord.</p>
`,

/* ────────────── SAFE ZONES ────────────── */
safezones: `
<h2>Safe Zones &amp; Moshpits</h2>

<h3>Safe Zones</h3>
<ul>
  <li>No PvP — you're completely safe</li>
  <li>Can't enter while combat tagged</li>
  <li>No building or breaking allowed</li>
  <li>Villagers are protected from everything</li>
</ul>

<h3>Moshpit Zones</h3>
<div class="card">
  <p>Dedicated free-for-all PvP areas. Protection is completely turned off inside.</p>
  <ul>
    <li>Everyone fights everyone</li>
    <li>No combat tag restrictions for entering or leaving</li>
    <li>Good for practice and tournaments</li>
  </ul>
</div>
`,

/* ────────────── PORTALS ────────────── */
portals: `
<h2>Portals &amp; Nether</h2>
<p>The Nether is open and plays into resource gathering and war strategy.</p>
<ul>
  <li>Regular Nether portals work like normal</li>
  <li>You can claim territory in the Nether</li>
  <li>There are special portal spots around the map</li>
</ul>
`,

/* ────────────── TERRITORY ────────────── */
territory: `
<h2>Territory Mechanics</h2>

<h3>Entry Notifications</h3>
<p>Walk into another country's land and you'll see their name, your relationship with them, and whether it's dangerous.</p>

<h3>Permissions</h3>
<ul>
  <li>Outsiders can't build, break, or interact on claimed land</li>
  <li>During war, attackers get limited access for sieging</li>
  <li>Allies can be given configurable access</li>
</ul>

<h3>Scoreboard</h3>
<p>The sidebar scoreboard shows your country info, balance, what territory you're in, and any active wars.</p>
`,

/* ────────────── HOLOGRAMS ────────────── */
holograms: `
<h2>Holograms</h2>
<p>Floating text that shows info around the server.</p>
<ul>
  <li>Country capitals have holographic signs</li>
  <li>Leaderboards at spawn</li>
  <li>Admins can place custom holograms wherever</li>
</ul>
`,

/* ────────────── ADMIN (Restricted) ────────────── */
"admin-info": `
<h2>Admin &amp; Configuration</h2>
<div class="info-box warn">This section is for server admins only. If you need access, talk to an admin.</div>
<p>Admin tools and config commands are available in-game for anyone with the <code>countrywars.admin</code> permission.</p>
`,

/* ────────────── ALL COMMANDS ────────────── */
commands: `
<h2>All Commands</h2>

<h3>Country Commands</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/c create &lt;name&gt;</code></td><td>Create a country</td></tr>
  <tr><td><code>/c join &lt;name&gt;</code></td><td>Request to join</td></tr>
  <tr><td><code>/c leave</code></td><td>Leave country</td></tr>
  <tr><td><code>/c claim</code></td><td>Claim a chunk</td></tr>
  <tr><td><code>/c unclaim</code></td><td>Unclaim a chunk</td></tr>
  <tr><td><code>/c info [name]</code></td><td>View country info</td></tr>
  <tr><td><code>/c invite &lt;player&gt;</code></td><td>Invite player</td></tr>
  <tr><td><code>/c kick &lt;player&gt;</code></td><td>Kick member</td></tr>
  <tr><td><code>/c promote &lt;player&gt;</code></td><td>Promote</td></tr>
  <tr><td><code>/c demote &lt;player&gt;</code></td><td>Demote</td></tr>
  <tr><td><code>/c spawn</code></td><td>Teleport to country spawn</td></tr>
  <tr><td><code>/c setspawn</code></td><td>Set country spawn</td></tr>
  <tr><td><code>/c fly</code></td><td>Toggle flight (requires perk)</td></tr>
  <tr><td><code>/c wall</code></td><td>Wall management</td></tr>
  <tr><td><code>/c ally &lt;country&gt;</code></td><td>Alliance request</td></tr>
  <tr><td><code>/c enemy &lt;country&gt;</code></td><td>Mark as enemy</td></tr>
  <tr><td><code>/c deposit &lt;amt&gt;</code></td><td>Deposit to treasury</td></tr>
  <tr><td><code>/c disband</code></td><td>Disband (Leader only)</td></tr>
</table>

<h3>War &amp; Siege</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/war declare &lt;country&gt;</code></td><td>Declare war</td></tr>
  <tr><td><code>/war status</code></td><td>View active wars</td></tr>
  <tr><td><code>/war continue</code></td><td>Extend war</td></tr>
  <tr><td><code>/war surrender</code></td><td>Surrender</td></tr>
  <tr><td><code>/siege start</code></td><td>Begin sieging chunk</td></tr>
</table>

<h3>Economy</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/shop</code></td><td>Open shop GUI</td></tr>
  <tr><td><code>/sell hand</code></td><td>Sell held item</td></tr>
  <tr><td><code>/sell all</code></td><td>Sell all sellable items</td></tr>
  <tr><td><code>/bal</code></td><td>Check balance</td></tr>
  <tr><td><code>/pay &lt;player&gt; &lt;amt&gt;</code></td><td>Send money</td></tr>
  <tr><td><code>/bounty set &lt;player&gt; &lt;amt&gt;</code></td><td>Place bounty</td></tr>
  <tr><td><code>/coinflip &lt;amt&gt;</code></td><td>Start coinflip</td></tr>
  <tr><td><code>/trade &lt;player&gt;</code></td><td>Trade request</td></tr>
</table>

<h3>Personal</h3>
<table>
  <tr><th>Command</th><th>Description</th></tr>
  <tr><td><code>/skills</code></td><td>Open skills GUI</td></tr>
  <tr><td><code>/kit</code></td><td>Kit menu</td></tr>
  <tr><td><code>/pv</code></td><td>Player vault</td></tr>
  <tr><td><code>/sethome &lt;name&gt;</code></td><td>Set home</td></tr>
  <tr><td><code>/home &lt;name&gt;</code></td><td>Go to home</td></tr>
  <tr><td><code>/duel &lt;player&gt;</code></td><td>Duel request</td></tr>
  <tr><td><code>/tutorial</code></td><td>Replay tutorial</td></tr>
  <tr><td><code>/playtime</code></td><td>Check playtime</td></tr>
  <tr><td><code>/discord link</code></td><td>Link Discord</td></tr>
  <tr><td><code>/wiki</code></td><td>Open the server wiki</td></tr>
</table>

`

};

/* ================================================================
   DOM Injection  –  Build sections inside #wikiContent
   ================================================================ */
(function injectSections() {
  var container = document.getElementById('wikiContent');
  if (!container) return;

  for (var id in WIKI) {
    if (!WIKI.hasOwnProperty(id)) continue;
    var sec = document.createElement('div');
    sec.className = 'wiki-section';
    sec.id = id;
    sec.innerHTML = WIKI[id];
    container.appendChild(sec);
  }

  var hash = window.location.hash.substring(1);
  var startId = (hash && document.getElementById(hash)) ? hash : 'home';
  document.getElementById(startId).classList.add('active');

  var link = document.querySelector('.nav-link[data-section="' + startId + '"]');
  if (link) link.classList.add('active');
})();
